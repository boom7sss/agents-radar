/**
 * ArXiv AI papers fetched via the ArXiv API (Atom feed).
 *
 * Strategy: query cs.AI + cs.CL + cs.LG categories for the newest papers,
 * sorted by submission date, filtered to last 48h.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface ArxivPaper {
  id: string;
  title: string;
  summary: string;
  authors: string[];
  published: string;
  updated: string;
  categories: string[];
  url: string;
  pdfUrl: string;
  comment: string;
  journalRef: string;
}

export interface ArxivData {
  papers: ArxivPaper[];
  fetchSuccess: boolean;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const ARXIV_MAX_RESULTS = 50;
const API_URL = "https://export.arxiv.org/api/query";

/** ArXiv categories to search. */
const CATEGORIES = ["cs.AI", "cs.CL", "cs.LG", "cs.CV", "eess.IV", "q-bio.QM"];

/** Delay between requests (ArXiv asks for 3s). */
const REQUEST_DELAY_MS = 3000;

// ---------------------------------------------------------------------------
// XML helpers (lightweight, no dependency)
// ---------------------------------------------------------------------------

function extractTag(xml: string, tag: string): string {
  const re = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`);
  const m = xml.match(re);
  return m ? m[1]!.trim() : "";
}

function extractAllTags(xml: string, tag: string): string[] {
  const re = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, "g");
  const results: string[] = [];
  let m: RegExpExecArray | null;
  while ((m = re.exec(xml)) !== null) {
    results.push(m[1]!.trim());
  }
  return results;
}

function extractAttr(xml: string, tag: string, attr: string): string[] {
  const re = new RegExp(`<${tag}[^>]*${attr}="([^"]*)"[^>]*/?>`, "g");
  const results: string[] = [];
  let m: RegExpExecArray | null;
  while ((m = re.exec(xml)) !== null) {
    results.push(m[1]!);
  }
  return results;
}

function extractLinkHref(xml: string, rel: string): string {
  const re = new RegExp(`<link[^>]*rel="${rel}"[^>]*href="([^"]*)"[^>]*/?>`, "g");
  const m = re.exec(xml);
  return m ? m[1]! : "";
}

// ---------------------------------------------------------------------------
// Parse
// ---------------------------------------------------------------------------

function parseEntry(entryXml: string): ArxivPaper | null {
  const id = extractTag(entryXml, "id");
  if (!id) return null;

  const title = extractTag(entryXml, "title").replace(/\s+/g, " ");
  const summary = extractTag(entryXml, "summary").replace(/\s+/g, " ");
  const authors = extractAllTags(entryXml, "name");
  const published = extractTag(entryXml, "published");
  const updated = extractTag(entryXml, "updated");
  const categories = extractAttr(entryXml, "category", "term");
  const comment = extractTag(entryXml, "arxiv:comment").replace(/\s+/g, " ");
  const journalRef = extractTag(entryXml, "arxiv:journal_ref").replace(/\s+/g, " ");

  const url = id; // ArXiv id IS the URL (e.g. http://arxiv.org/abs/...)
  const pdfUrl = extractLinkHref(entryXml, "related") || id.replace("/abs/", "/pdf/");

  return { id, title, summary, authors, published, updated, categories, url, pdfUrl, comment, journalRef };
}

// ---------------------------------------------------------------------------
// Fetch
// ---------------------------------------------------------------------------

async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fetchArxivData(): Promise<ArxivData> {
  const seen = new Map<string, ArxivPaper>();

  for (let i = 0; i < CATEGORIES.length; i++) {
    const cat = CATEGORIES[i]!;
    if (i > 0) await sleep(REQUEST_DELAY_MS);

    try {
      const params = new URLSearchParams({
        search_query: `cat:${cat}`,
        sortBy: "submittedDate",
        sortOrder: "descending",
        max_results: String(ARXIV_MAX_RESULTS),
      });

      const resp = await fetch(`${API_URL}?${params}`, {
        headers: { "User-Agent": "agents-radar/1.0" },
      });

      if (!resp.ok) {
        console.error(`  [arxiv] ${cat}: HTTP ${resp.status}`);
        continue;
      }

      const xml = await resp.text();

      // Split into entries
      const entryBlocks = xml.split("<entry>").slice(1);
      for (const block of entryBlocks) {
        const paper = parseEntry("<entry>" + block);
        if (paper && !seen.has(paper.id)) {
          seen.set(paper.id, paper);
        }
      }

      console.log(`  [arxiv] ${cat}: ${entryBlocks.length} papers`);
    } catch (err) {
      console.error(`  [arxiv] ${cat}: ${err}`);
    }
  }

  // ArXiv has weekend / holiday gaps. Prefer the fresh 48h window, but keep a
  // 7-day fallback so the paper card is not blank simply because a batch did
  // not land today. The caller removes papers already sent recently.
  const allPapers = [...seen.values()].sort(
    (a, b) => new Date(b.published).getTime() - new Date(a.published).getTime(),
  );
  const fresh = allPapers.filter((p) => new Date(p.published).getTime() > Date.now() - 48 * 60 * 60 * 1000);
  const fallback = allPapers.filter(
    (p) => new Date(p.published).getTime() > Date.now() - 7 * 24 * 60 * 60 * 1000,
  );
  const papers = (fresh.length ? fresh : fallback).slice(0, ARXIV_MAX_RESULTS);

  console.log(
    `  [arxiv] ${papers.length} papers (from ${seen.size} unique${fresh.length ? "" : ", 7-day fallback"})`,
  );
  return { papers, fetchSuccess: papers.length > 0 };
}

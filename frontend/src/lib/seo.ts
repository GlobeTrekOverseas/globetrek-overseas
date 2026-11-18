import { useEffect } from "react";

export const SITE_URL = "https://www.globetrekoverseas.com";
export const SITE_NAME = "GlobeTrek Overseas";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export interface PageMeta {
  title: string;
  description: string;
  /** Path portion of the canonical URL, e.g. "/about". */
  path: string;
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
}

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`,
  );
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(
    'link[rel="canonical"]',
  );
  if (!el) {
    el = document.createElement("link");
    el.rel = "canonical";
    document.head.appendChild(el);
  }
  el.href = href;
}

export function applyPageMeta(meta: PageMeta) {
  const url = `${SITE_URL}${meta.path === "/" ? "/" : meta.path.replace(/\/$/, "")}`;
  const image = meta.image || DEFAULT_OG_IMAGE;

  document.title = meta.title;
  upsertMeta("name", "description", meta.description);
  upsertMeta(
    "name",
    "robots",
    meta.noindex ? "noindex, follow" : "index, follow, max-image-preview:large",
  );
  // A noindex page (e.g. 404) should not declare a canonical URL.
  if (meta.noindex) {
    document.head.querySelector('link[rel="canonical"]')?.remove();
  } else {
    upsertCanonical(url);
  }

  upsertMeta("property", "og:type", meta.type || "website");
  upsertMeta("property", "og:title", meta.title);
  upsertMeta("property", "og:description", meta.description);
  upsertMeta("property", "og:url", url);
  upsertMeta("property", "og:image", image);

  upsertMeta("name", "twitter:title", meta.title);
  upsertMeta("name", "twitter:description", meta.description);
  upsertMeta("name", "twitter:image", image);
}

/** Set title/description/canonical/OG tags for the current page. Pass null to skip. */
export function usePageMeta(meta: PageMeta | null) {
  const key = meta ? JSON.stringify(meta) : "";
  useEffect(() => {
    if (meta) applyPageMeta(meta);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);
}

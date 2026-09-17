import { readFileSync, writeFileSync } from 'node:fs';
import { marked } from 'marked';

// The annex only concerns store submission forms; the public page stops before it.
const source = readFileSync('politique-de-confidentialite.md', 'utf8').split('\n---\n')[0];
const body = marked.parse(source, { gfm: true });

const html = `<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light dark">
<title>Politique de confidentialité — PMR Parking</title>
<meta name="description" content="Politique de confidentialité de l'application mobile PMR Parking : données traitées, services tiers, droits des utilisateurs.">
<style>
  :root { --bg: #fafafa; --fg: #1d1d1f; --muted: #555; --link: #0b57d0; --rule: #ddd; }
  @media (prefers-color-scheme: dark) { :root { --bg: #121212; --fg: #e8e8e8; --muted: #aaa; --link: #8ab4f8; --rule: #333; } }
  html { background: var(--bg); color: var(--fg); }
  body { margin: 0 auto; max-width: 42rem; padding: 2rem 1.25rem 4rem; font: 17px/1.6 -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
  h1 { font-size: 1.8rem; line-height: 1.25; }
  h2 { font-size: 1.3rem; margin-top: 2.2rem; }
  h3 { font-size: 1.05rem; margin-top: 1.6rem; }
  a { color: var(--link); overflow-wrap: anywhere; }
  em { color: var(--muted); }
  ul { padding-left: 1.3rem; }
  li + li { margin-top: .3rem; }
  footer { margin-top: 3rem; padding-top: 1rem; border-top: 1px solid var(--rule); color: var(--muted); font-size: .9rem; }
</style>
</head>
<body>
<main>
${body}
</main>
<footer>Application PMR Parking · Cette page est la version publiée de la politique de confidentialité de l'application.</footer>
</body>
</html>
`;
writeFileSync('index.html', html);
console.log('index.html written,', html.length, 'bytes');

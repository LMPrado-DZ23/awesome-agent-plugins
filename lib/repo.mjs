// "https://github.com/owner/repo[/tree/...]" -> "owner/repo" (null when not GitHub).
export function repoKey(url) {
  const m = /^https:\/\/github\.com\/([^/]+)\/([^/#?]+)/.exec(url);
  return m ? `${m[1]}/${m[2].replace(/\.git$/, '')}` : null;
}

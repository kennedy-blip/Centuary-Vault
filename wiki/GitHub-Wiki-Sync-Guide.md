# GitHub Wiki Sync Guide

The `wiki/` folder in the main repository is a **staging area**. GitHub serves the Wiki from a
separate Git repository (`<repo>.wiki.git`), so the Markdown files must be copied there once and
pushed again whenever they change. This guide walks through the clean, repeatable way to do that
for CenturyVault.

## Files to publish

| File | Wiki slug |
| --- | --- |
| `wiki/Home.md` | `Home` |
| `wiki/Days-001-to-070-Foundations-and-Apps.md` | `Days-001-to-070-Foundations-and-Apps` |
| `wiki/Days-071-to-085-Systems-and-Data-Foundations.md` | `Days-071-to-085-Systems-and-Data-Foundations` |
| `wiki/Days-086-to-100-Polyglot-Vercel-Systems.md` | `Days-086-to-100-Polyglot-Vercel-Systems` |
| `wiki/GitHub-Wiki-Sync-Guide.md` | `GitHub-Wiki-Sync-Guide` |

Filenames already follow GitHub Wiki slug conventions, so no renaming is required.

## One-time setup

1. Push the main repository to `main` first.
2. Open the repository in a browser: https://github.com/kennedy-blip/Centuary-Vault
3. Select the **Wiki** tab. GitHub may show "Create the first page" — create a placeholder page
   (for example, `Home`) and save it. This initialises the `*.wiki.git` remote.
4. In repository **Settings → Features**, make sure **Wikis** is enabled.

## Clone and publish

From a directory beside your main checkout:

```bash
git clone https://github.com/kennedy-blip/Centuary-Vault.wiki.git
cp wiki/*.md Centuary-Vault.wiki/
cd Centuary-Vault.wiki
git add .
git commit -m "docs: publish CenturyVault wiki documentation"
git push
```

The Wiki repository's default branch may be `master` or `main` depending on when GitHub created
it — push to whichever branch is checked out after cloning. Do not fight the branch name; GitHub
serves the Wiki from its default branch.

If `git clone` fails because GitHub enabled SSH-only authentication for your account, use the SSH
URL instead:

```bash
git clone git@github.com:kennedy-blip/Centuary-Vault.wiki.git
```

## Verify the result

1. Reload https://github.com/kennedy-blip/Centuary-Vault/wiki/Home
2. Check each deep-dive page from the Home arc map.
3. Confirm section anchors work, for example
   `https://github.com/kennedy-blip/Centuary-Vault/wiki/Days-086-to-100-Polyglot-Vercel-Systems#day-100-releasegate`.
4. Confirm the sidebar lists all five pages. GitHub may need a few seconds to refresh its cache.

## Syncing later changes

The Wiki clone does not update itself. Before copying new Markdown, pull first so you do not
overwrite someone else's edits:

```bash
cd Centuary-Vault.wiki
git pull --rebase
cd ..
cp wiki/*.md Centuary-Vault.wiki/
cd Centuary-Vault.wiki
git add .
git commit -m "docs: sync CenturyVault wiki pages"
git push
```

When you regenerate the docs from the canonical catalog:

```bash
cd Centuary-Vault
python3 tools/sync_catalog.py
python3 tools/verify.py
```

Then repeat the copy-and-push steps above.

## Troubleshooting

| Symptom | Fix |
| --- | --- |
| `repository not found` on clone | Create/save the first Wiki page in the browser; the Wiki remote does not exist until then. |
| `permission denied` | Use the SSH URL above, or re-authenticate the Git/HTTPS helper for GitHub. |
| Pages render as raw filenames | Ensure the files end in `.md` and are committed at the Wiki root, not in a subfolder. |
| Anchors do not resolve | Use the generated `## Day 001: Title` headings; GitHub derives `#day-001-title`. |
| Edits in `wiki/` are not visible online | You edited the main repository only. Copy the files into the `.wiki.git` clone and push there too. |
| Wiki page list looks stale | Hard-refresh the browser; GitHub caches Wiki navigation briefly. |

## Relationship to the live site

The preview site never fetches Wiki Markdown at runtime. It links to published Wiki pages and ships
two curated Markdown structure previews inside the documentation drawer (`wiki/Home.md` and
`wiki/Days-086-to-100-Polyglot-Vercel-Systems.md`). This keeps the Vercel deployment self-contained
and lets the whole UI work from the embedded fallback catalog when offline.

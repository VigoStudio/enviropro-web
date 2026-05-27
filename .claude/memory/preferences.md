# Workflow Preferences

## Session rules

- **Compact at 60% context**: When the context window reaches ~60% capacity, always run `/compact` before continuing. This preserves session continuity on long coding sessions. User explicitly requested this.

## Communication style

- Respond concisely — bullet points over long paragraphs
- Confirm changes with file + line reference, not just "done"
- Always commit after each logical change with a clear message
- Ask before adding new dependencies

## Dev server

- Port: `4321` (falls back to `4322` if occupied)
- Start: `npm run dev -- --port 4321` from `/Users/andrestipan/enviropro-web`
- Always verify with `curl -s -o /dev/null -w "%{http_code}" http://localhost:4321/`

## Git

- Commit after every meaningful change, never batch unrelated work
- End commit messages with `Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>`

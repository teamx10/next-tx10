---
paths: **/*.ts, **/*.tsx
---

# TypeScript Rules

- Use strict mode — `noImplicitAny`, `noImplicitReturns`, `noUnusedLocals`, `noUnusedParameters`
- Never use `any` — use `unknown` with type guards or proper generics
- Prefer `interface` over `type` for object shapes
- All interfaces and object types must be alphabetically sorted (perfectionist enforced)
- All union types must be alphabetically sorted
- Use path alias `@/*` for imports from `src/`
- Import ordering: type imports, external, internal (`@/`), relative — alphabetically within groups, blank lines between groups
- Prefer type inference where the type is obvious from context
- Use `as const` for literal objects that should not be widened
- Nullable types: Firebase config returns `null` if env vars missing — always handle null case

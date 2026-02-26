---
description: Code review current changes for quality, security, and best practices
allowed-tools: Bash(git diff:*), Bash(git status:*), Bash(git log:*)
---

Review the current code changes for quality, security, and adherence to project conventions.

Check staged and unstaged changes: !`git diff HEAD`
Check status: !`git status`

## Review Checklist

- Security vulnerabilities (XSS, injection, exposed secrets, auth bypass)
- Firebase auth flow correctness
- Stripe payment flow security (no secret key exposure)
- TypeScript strict mode compliance
- ESLint/Prettier compliance (sorting, imports, arrow-body-style)
- MUI v7 usage patterns and theme consistency
- React 19 / Next.js 16 best practices
- Error handling and loading states
- Accessibility (ARIA, keyboard navigation)
- Performance (unnecessary re-renders, bundle size)

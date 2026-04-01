# Lessons Learned

> Process and technical lessons.

- **2026-04-01 (#7):** Moving a provider (ThemeProviderWrapper) from the root layout to a nested locale layout creates silent breakage for sibling routes — `not-found.tsx`, `(legal)/privacy`, and `(legal)/terms` lost MUI theme context because they live outside `[locale]/`. When restructuring the layout hierarchy, audit ALL existing route paths to ensure routes outside the new nested layout still receive required providers.

- **2026-04-01 (#7):** next-intl v4 requires 4 config files in `lib/i18n/` (config.ts, routing.ts, request.ts, navigation.ts) vs v3's simpler inline config pattern. When upgrading from a planned library version to a newer major version, flag the API differences in `[IMPL]` comments and verify affected file counts match the plan — the v3→v4 migration added 2 unplanned files (routing.ts, navigation.ts) not listed in Files Touched.

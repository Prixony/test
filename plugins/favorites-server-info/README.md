# Favorites Server Info — experimental Unbound plugin source

Target reported by tester: Unbound 2.0.0, Discord iOS 353.0 PTB (JS 122208).

IMPORTANT: This is NOT a verified installable plugin. The Favorites row component has not been identified, the source has not been compiled, and the build config has not been validated against Unbound 2.0.0. It may fail to build or have no effect. Do not use it on your main account.

The archive includes a draft manifest, source, package.json, and rollup config for further development. It does not contain a compiled plugin or a public installation URL.

## iPhone / GitHub
GitHub's normal upload does NOT unpack ZIP archives. To work from iPhone, extract the ZIP in the Files app and upload the extracted files individually, preserving their folder paths. Your existing repo has files under `plugins/favorites-server-info/`; do not accidentally create a second nested folder. The build configuration should eventually be aligned with Unbound's current official plugin template.

## Remaining work
1. Confirm current Unbound plugin manifest and CLI conventions from official source.
2. Inspect Discord 353.0 PTB's Favorites row renderer; replace guessed component names.
3. Implement and test safe patch cleanup on plugin disable.
4. Build, inspect GitHub Actions output, and host the compiled artifact.
5. Test only on a nonessential account first.

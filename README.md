# Taqtile peril

More info at [danger/peril](https://github.com/danger/peril)

# Local test
 
We need to validate if our checks are returning results as expected. This is a simple way:
 
- Create a local empty project
- Add `package.json` with `danger` and `jest`:
    ```json
        {
            "name": "local-test",
            "version": "0.0.1",
            "description": "Warning Danger! Danger!",
            "author": "author",
            "license": "MIT",
            "dependencies": {
                "danger": "2.0.0-alpha.7"
            },
            "engines": {
                "node": "7.10.1"
            },
            "jest": {
                "transform": {
                ".(ts|tsx)": "<rootDir>/node_modules/ts-jest/preprocessor.js"
                }
            },
            "devDependencies": {
                "ts-jest": "^20.0.10"
            }
        }
    ```
- `node` >= `6.5.0`
- Run `yarn install`
- Edit a dangerfile in use like [issues.ts](/dangerfiles/issues.ts) or [pr.ts](/dangerfile/pr.ts) with new checks
- [Export your danger github token](https://github.com/indigotech/danger#it-is-asking-me-for-a-danger_github_api_token)
- Run `yarn danger -- pr <URL_pr_to_be_tested> --dangerfile ./dangerfiles/<dangerfile_you_edited>.ts` (you can pick any open pull request)
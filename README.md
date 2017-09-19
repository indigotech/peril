# Taqtile peril

More info at [danger/peril](https://github.com/danger/peril)

## Local test

We need to validate if a PR againt peril setup locally,the simplest way is:

- Use `node` >= `6.5.0`
- Run `yarn install`
- Edit a dangerfile in use like [issues.ts](/dangerfiles/issues.ts) or [pr.ts](/dangerfile/pr.ts) with new checks
- [Export your danger github token](#it-is-asking-me-for-a-danger_github_api_token)
- Run `yarn danger -- pr <URL_pr_to_be_tested> --dangerfile ./dangerfiles/<dangerfile_you_edited>.ts` (you can pick any open pull request)

## Changing Danger rules

All current rules are being done via Taqtile's Danger plugin, which allows any developer adding specific rules with tests to ensure it works. 

Check [indigotech/dangerjs-plugin](https://github.com/indigotech/dangerjs-plugin) to know what it being currently checked and/or add your rules.

## Troubleshooting

### It is asking me for a `DANGER_GITHUB_API_TOKEN`

> Local repository was not found on GitHub. If you're trying to test a private repository please provide a valid API token through DANGER_GITHUB_API_TOKEN environment variable.

1. Create a github [Personal Access Token](https://help.github.com/articles/creating-an-access-token-for-command-line-use/)
2. Export it to an environment variable
```bash
$ export DANGER_GITHUB_API_TOKEN=your token here
```

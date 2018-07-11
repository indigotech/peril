# Taqtile peril

More info at [danger/peril](https://github.com/danger/peril)

## Local test

We need to validate if a PR againt peril setup locally,the simplest way is:

- Go to the your peril folder
- Use `node` >= `6.5.0` (Can use the version in `.nvmrc`)
- Run `yarn install`
- Edit a dangerfile in use like [node.ts](https://github.com/indigotech/dangerjs-plugin/blob/master/src/rules/node.ts) or [pr.ts](https://github.com/indigotech/dangerjs-plugin/blob/master/src/rules/pr.ts) with new checks. Call your rule just created following one of the examples below 1. or 2.
1)  Run locally an specific rule of the file node.ts in dangerjs-plugin repo
```
node.yourNewlyCreatedRule()
```
2) Run locally all rules. Add this command in index.ts of the dangerjs-plugin repo
```
taqtileDangerjsPlugin().
```

- [Export your danger github token](#it-is-asking-me-for-a-danger_github_api_token)
- Run `yarn danger -- pr <URL_pr_to_be_tested> --dangerfile ../dangerjs-plugin/src/rules/<dangerfile_you_edited>.ts` (you can pick any open pull request)

***PS: Remove the function call from code before creating an PR, as the server already does it.***

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

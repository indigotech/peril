# Taqtile peril

More info at [danger/peril](https://github.com/danger/peril)

# Local test
 
We need to validate if our checks are returning results as expected. This is a simple way:

- Use `node` >= `6.5.0`
- Run `yarn install`
- Edit a dangerfile in use like [issues.ts](/dangerfiles/issues.ts) or [pr.ts](/dangerfile/pr.ts) with new checks
- [Export your danger github token](#it-is-asking-me-for-a-danger_github_api_token)
- Run `yarn danger -- pr <URL_pr_to_be_tested> --dangerfile ./dangerfiles/<dangerfile_you_edited>.ts` (you can pick any open pull request)


## What is currently being checked

### Common

- [x] Fail when no description is provided
- [x] Warns if description provided is too short
- [ ] Warn if some files/folders to be changed/committed like `.gitignore`, `Gemfile`, `Gemfile.lock`, `.travis.yml`
- [ ] `>>>` Strings to make sure rebase was successful
- [x] Big PRs
- [ ] Warn when `Gemfile` was modified and `Gemfile.lock` was not
- [ ] Warn when Amazon Secret Key is hardcoded
- [ ] Warn when `Dangerfile` was modified
- [ ] Warn when `http://` is used

### Node

- [ ] Warn if some files/folders to be changed/committed like `yarn.lock`, `docker-compose.yml`, `Procfile`, `npm-shrinkwrap.json`, `node_modules`, `env.coffee`
- [ ] Warn when `npm install -g` is used
- [ ] Warn when `.env` or `.nvmrc` files are modified
- [ ] Warn when `console.log` is added
- [ ] Warn when `package.json` was modified and `yarn.lock` or `shrinkwrap` was not
- [ ] Warn if node version is different between .travis.yml, .nvmrc, package.json and README (or just warn if node version has change just in one of these locations)
- [ ] At packages.json every package should have its version fixed (do not use ^ or ~), or explicitly set the major and minor versions (ie.: 1.2.x)
- [ ] [TypeScript] Warn if using `<any>` as return type.

### iOS

- [ ] Warn if some files/folders to be changed/committed like `Cakefile`, `settings.yml.erb`, `Fastfile`
- [ ] Warn when `Podfile` was modified and `Podfile.lock` was not
- [ ] Warn if changes made in Cakefile may 'break' provisionings and sign certificates configurations
- [ ] Warn when ATS Exception is set in plist
- [ ] Warn when Landscape orientation is set in plist
- [ ] Warn when Facebook ID is hardcoded in plist
- [ ] Warn when pod is being loaded from external git repos
- [ ] Warn when `TODO` is added
- [ ] Warn when `print(“”)` is added
- [ ] Warn when `fatalError` is added
- [ ] Warn if Podfile has pods should not using fixed versions
- [ ] [Swift] Warn if forced unwrapping was found
- [ ] Warn if hardcoded font is used in `.xib`
- [ ] Warn if hardcoded color is used in `.xib`

### Android

- [ ] Warn when `.gradle` or `Manifest.xml` files are modified

### Web

- [ ] Warn if some files/folders to be changed/committed like `yarn.lock`, `docker-compose.yml`, `Procfile`, `npm-shrinkwrap.json`, `node_modules`, `env.coffee`
- [ ] Warn when `npm install -g` is used
- [ ] Warn when `.env` or `.nvmrc` files are modified
- [ ] Warn when `console.log` is added
- [ ] Warn when `package.json` was modified and `yarn.lock` or `shrinkwrap` was not
- [ ] Warn if node version is different between .travis.yml, .nvmrc, package.json and README (or just warn if node version has change just in one of these locations)
- [ ] At packages.json every package should have its version fixed (do not use ^ or ~), or explicitly set the major and minor versions (ie.: 1.2.x)
- [ ] [TypeScript] Warn if using `<any>` as return type.
- [ ] Warn if CSS files were changed


## Troubleshooting

### It is asking me for a `DANGER_GITHUB_API_TOKEN`

> Local repository was not found on GitHub. If you're trying to test a private repository please provide a valid API token through DANGER_GITHUB_API_TOKEN environment variable.

1. Create a github [Personal Access Token](https://help.github.com/articles/creating-an-access-token-for-command-line-use/)
2. Export it to an environment variable
```bash
$ export DANGER_GITHUB_API_TOKEN=your token here
```
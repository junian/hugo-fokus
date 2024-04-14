# FOKUS - Hugo Theme

## Development

Install dependencies.

```shell
npm install
```

To build the assets.

```shell
npm run build
```

JS bundle is using `webpack`.

CSS bundle is using `gulp` and `sass`.

The rest of automation is using `gulp`.

Edit the files in `./src/`.

## Warning

- Use [`"sass": "=1.32.13"`](https://stackoverflow.com/a/67637646/2640559) because the newer version will cause [Breaking Change: Slash as Division](https://sass-lang.com/documentation/breaking-changes/slash-div/).

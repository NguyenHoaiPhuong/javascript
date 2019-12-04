# Get Started

## Installation

### Webpack

```
npm install --save-dev webpack webpack-cli
npm install --save lodash
```

### Loading CSS

```
npm install --save-dev style-loader css-loader
```

### Loading Images

```
npm install --save-dev file-loader
```

## How to build?

Without config (default entry = ./src/index.js, default output = ./dist/main.js):

```
npx webpack
```

With config:

```
npx webpack --config webpack.config.js
```

## References

- https://webpack.js.org/guides/asset-management/
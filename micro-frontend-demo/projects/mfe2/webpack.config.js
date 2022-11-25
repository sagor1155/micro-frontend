const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "auto",
    uniqueName: "mfe2"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
      library: { type: "module" },
      name: "mfe2",
      filename: "remoteEntry.js",
      exposes: {
        './web-components': './projects/mfe2/src/bootstrap.ts',
      },

      shared: {
        '@angular/animations': {singleton: true, strictVersion: true},
        '@angular/core': {singleton: true, strictVersion: false},
        '@angular/common': {singleton: true, strictVersion: true},
        '@angular/forms': {singleton: true, strictVersion: true},
        '@angular/platform-browser': {singleton: true, strictVersion: true},
        '@angular/router': {singleton: true, strictVersion: true},
        '@angular/elements': {singleton: true, strictVersion: true},
      }
    })
  ],
};

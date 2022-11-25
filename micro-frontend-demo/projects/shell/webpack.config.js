const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "auto",
    uniqueName: "shell"
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
      remotes: {
      },
      shared: {
        '@angular/animations': {singleton: true, strictVersion: true},
        '@angular/core': {singleton: true, strictVersion: false},
        '@angular/common': {singleton: true, strictVersion: true},
        '@angular/forms': {singleton: true, strictVersion: true},
        '@angular/platform-browser': {singleton: true, strictVersion: true},
        '@angular/router': {singleton: true, strictVersion: true},
        '@angular/elements': {singleton: true, strictVersion: true},
        'rxjs': {singleton: true, strictVersion: true, requiredVersion: false},
        "ngx-mfe": { singleton: true, strictVersion: true},
        "projects/utils/src/public-api": { singleton: true, strictVersion: true, requiredVersion: "0.0.1"}
      }
    })
  ],
};

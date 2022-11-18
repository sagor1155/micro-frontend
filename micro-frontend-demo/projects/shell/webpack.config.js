const { share, shareAll, withModuleFederationPlugin, SharedMappings } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  shared: share({
    '@angular/animations': {singleton: true, strictVersion: true},
    '@angular/core': {singleton: true, strictVersion: true},
    '@angular/common': {singleton: true, strictVersion: true},
    '@angular/forms': {singleton: true, strictVersion: true},
    '@angular/platform-browser': {singleton: true, strictVersion: true},
    '@angular/router': {singleton: true, strictVersion: true},
    rxjs: {singleton: true, strictVersion: true},
    "ngx-mfe": { singleton: true, strictVersion: true},
    "projects/utils/src/public-api": { singleton: true, strictVersion: true, requiredVersion: "0.0.1"}
  })

});

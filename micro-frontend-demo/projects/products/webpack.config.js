const { withModuleFederationPlugin, share } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'products',
  filename: 'products.js',
  exposes: {
    DashboardModule: './projects/products/src/app/dashboard/dashboard.module.ts',
    DashboardTableComponent: './projects/products/src/app/dashboard/dashboard-table/dashboard-table.component.ts',
    CatalogModule: './projects/products/src/app/catalog/catalog.module.ts',
    CatalogComponent: './projects/products/src/app/catalog/catalog/catalog.component.ts'
  },

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

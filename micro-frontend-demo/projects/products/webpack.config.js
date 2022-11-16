const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'products',
  filename: 'products.js',
  exposes: {
    './DashboardModule': './projects/products/src/app/dashboard/dashboard.module.ts',
    './CatalogModule': './projects/products/src/app/catalog/catalog.module.ts',
    './CatalogComponent': './projects/products/src/app/catalog/catalog/catalog.component.ts'
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});

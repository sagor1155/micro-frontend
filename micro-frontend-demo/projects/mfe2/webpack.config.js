const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mfe2',
  library: { type: "var", name: "mfe2" },
  filename: "remoteEntry.js",
  exposes: {
      './web-components': './projects/mfe2/src/bootstrap.ts',
      // './web-components': './projects/mfe2/src/app/app.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});

const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: "ReactMicrofrontend",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./build",
      },
      shared: {},
    }),
  ],
};

const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

export const plugins = [
  new ModuleFederationPlugin({
    name: "ReactMicrofrontend",
    filename: "remoteEntry.js",
    exposes: {
      "./App": "./build",
    },
    shared: {},
  }),
];

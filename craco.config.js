const { whenProd } = require("@craco/craco");

const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      whenProd(() => {
        webpackConfig.plugins.push(
          new ModuleFederationPlugin({
            name: "ReactMicrofrontend",
            filename: "remoteEntry.js",
            exposes: {
              "./App": path.join(__dirname, "./src/App"),
            },
            shared: {
              react: { singleton: true, eager: true },
              "react-dom": { singleton: true, eager: true },
            },
          })
        );
      });
      return webpackConfig;
    },
  },
};

import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {
  const isDev = mode === "development";

  const env = loadEnv(mode, process.cwd(), "");

  const marsDashboardApp = isDev
    ? `http://localhost:5001/assets/remoteEntry.js`
    : `${env.VITE_MARS_DASHBOARD_APP_URL}`;

  const deliverySyncApp = isDev
    ? `http://localhost:5002/assets/remoteEntry.js`
    : `${env.VITE_DELIVERY_SYNC_APP_URL}`;

  const inventoryUpdaterApp = isDev
    ? `http://localhost:5003/assets/remoteEntry.js`
    : `${env.VITE_INVENTORY_UPDATER_APP_URL}`;

  const salesForcastApp = isDev
    ? `http://localhost:5004/assets/remoteEntry.js`
    : `${env.VITE_SALES_FORCAST_APP_URL}`;

  return {
    plugins: [
      react(),
      tailwindcss(),
      federation({
        name: "host",
        remotes: {
          marsDashboardApp,
          deliverySyncApp,
          inventoryUpdaterApp,
          salesForcastApp,
        },
        shared: ["react", "react-dom", "react-router-dom"],
      }),
    ],
    build: {
      modulePreload: false,
      target: "esnext",
      minify: true,
      cssCodeSplit: false,
    },
    server: {
      port: 5000,
    },
  };
});

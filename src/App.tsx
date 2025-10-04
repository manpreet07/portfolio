import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/NavBar";
import "./index.css";

const MarsDashboardApp = React.lazy(() => import("marsDashboardApp/App"));
const DeliverySyncApp = React.lazy(() => import("deliverySyncApp/App"));

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar />
        <main className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/mars-dashboard/*"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <MarsDashboardApp />
                </Suspense>
              }
            />
            <Route
              path="/delivery-sync/*"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <DeliverySyncApp />
                </Suspense>
              }
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;

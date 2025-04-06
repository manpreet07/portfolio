import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/NavBar";
import "./index.css";

const MarsDashboardApp = lazy(() => import("marsDashboard/App"));

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen max-w-screen-xl mx-auto px-6">
        <Navbar />
        <main className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/projects/mars-dashboard"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <MarsDashboardApp />
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

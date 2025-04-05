import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

// const MarsDashboard = lazy(() => import('marsDashboard/App'));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          }
        />
        {/* <Route path="/projects/mars-dashboard" element={<Suspense fallback={<div>Loading...</div>}><MarsDashboard /></Suspense>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

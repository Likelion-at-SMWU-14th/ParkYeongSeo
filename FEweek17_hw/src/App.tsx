import { BrowserRouter, Route, Routes } from "react-router-dom";

import BlindPage from "./pages/BlindPage";
import RevealPage from "./pages/RevealPage";
import CollectionPage from "./pages/CollectionPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BlindPage />} />
        <Route path="/reveal" element={<RevealPage />} />
        <Route path="/collections" element={<CollectionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
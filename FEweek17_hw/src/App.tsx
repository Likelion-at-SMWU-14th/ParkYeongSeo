import { BrowserRouter, Route, Routes } from "react-router-dom";

import BlindPage from "./pages/BlindPage";
import RevealPage from "./pages/RevealPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BlindPage />} />
        <Route path="/reveal" element={<RevealPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
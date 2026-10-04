import { BrowserRouter, Route, Routes } from "react-router-dom";

import BlindPage from "./pages/BlindPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BlindPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
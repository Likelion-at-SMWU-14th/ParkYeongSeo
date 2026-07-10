import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import MainPage from "./pages/MainPage";
import SlotPage from "./pages/SlotPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="slot" element={<SlotPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
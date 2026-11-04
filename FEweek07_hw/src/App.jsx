import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SlotPage from "./pages/SlotPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/slot" element={<SlotPage />} />
    </Routes>
  );
};

export default App;
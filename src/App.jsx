import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import "./App.css";
import Sidebar from "./components/Sidebar";
import BandPage from "./pages/BandPage";
import ShowPage from "./pages/ShowPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>

        {/* Main Stuff */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/band" element={<BandPage />} />
          <Route path="/shows" element={<ShowPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;

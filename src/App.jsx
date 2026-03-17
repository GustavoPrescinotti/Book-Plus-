import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Catalogo from "./pages/Catalogo";
import Livro from "./pages/Livro";














export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/livro/:id" element={<Livro />} />
      </Routes>
      <Footer />
    </Router>
  );
}
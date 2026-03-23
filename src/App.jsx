import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";


import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Cadastro from "./pages/Cadastro.jsx";
import Catalogo from "./pages/Catalogo.jsx";
import Livro from "./pages/Livro.jsx";
import Admin from "./pages/Admin.jsx";
import CadastrarLivro from "./pages/CadastrarLivro.jsx";














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
        <Route path="/Admin" element={<Admin />} />
        <Route path="/CadastrarLivro" element={<CadastrarLivro />}  />
      </Routes>
      <Footer />
    </Router>
  );
}
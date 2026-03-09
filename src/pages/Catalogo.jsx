import { useState } from "react";
import BookGrid from "../components/BookGrid/BookGrid";
import SectionTitle from "../components/SectionTitle/SectionTitle";

const todosOsLivros = [
  { id: 1, titulo: "1984", autor: "George Orwell", tipo: "Ficção Científica", imagem: "https://m.media-amazon.com/images/I/61t0bwt1s3L._SY425_.jpg" },
  { id: 2, titulo: "O Principezinho", autor: "Antoine de Saint-Exupéry", tipo: "Fábula", imagem: "https://m.media-amazon.com/images/I/41ZU+PPvc0S._SY445_SX342_ML2_.jpg" },
  { id: 3, titulo: "Ensaio sobre a Cegueira", autor: "José Saramago", tipo: "Ficção / Distopia", imagem: "https://m.media-amazon.com/images/I/41iQySvQq0L._SY445_SX342_ML2_.jpg" },
  { id: 4, titulo: "Sapiens: Uma Breve História da Humanidade", autor: "Yuval Noah Harari", tipo: "História", imagem: "https://m.media-amazon.com/images/I/51fuvXO6wvL._SY445_SX342_ML2_.jpg" },
  { id: 5, titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", tipo: "Fantasia", imagem: "https://m.media-amazon.com/images/I/91Uy0aboP2L._SY466_.jpg" },
  { id: 6, titulo: "Orgulho e Preconceito", autor: "Jane Austen", tipo: "Romance", imagem: "https://m.media-amazon.com/images/I/719esIW3D7L._SY466_.jpg" },
  { id: 7, titulo: "Cem Anos de Solidão", autor: "Gabriel García Márquez", tipo: "Realismo Mágico", imagem: "https://m.media-amazon.com/images/I/515cVYLIP9L._SY445_SX342_ML2_.jpg" },
  { id: 8, titulo: "O Nome da Rosa", autor: "Umberto Eco", tipo: "Ficção Histórica", imagem: "https://m.media-amazon.com/images/I/51MB2Ly7XiL._SY445_SX342_ML2_.jpg" }
];

export default function Catalogo() {
  const [busca, setBusca] = useState("");

  const livrosFiltrados = todosOsLivros.filter((livro) => {
    return livro.titulo.includes(busca) || livro.autor.includes(busca);
  });

  return (
    <main className="p-8">
      <SectionTitle badge="Explorar" title="Catálogo" sortOptions={["A-Z"]} />
      
      <input 
        type="text" 
        placeholder="Buscar por título ou autor..." 
        className="w-full p-3 mb-8 border border-gray-300 rounded-lg outline-none focus:border-blue-500"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />

      <BookGrid livros={livrosFiltrados} />
    </main>
  );
}
import BookGrid from "../BookGrid/BookGrid";
import SectionTitle from "../SectionTitle/SectionTitle";

const livros = [
  {
    titulo: "1984",
    autor: "George Orwell",
    tipo: "Ficção Científica / Distopia",
    imagem: "https://m.media-amazon.com/images/I/61t0bwt1s3L._SY425_.jpg",
  },
  {
    titulo: "O Principezinho",
    autor: "Antoine de Saint-Exupéry",
    tipo: "Fábula",
    imagem: "https://m.media-amazon.com/images/I/41ZU+PPvc0S._SY445_SX342_ML2_.jpg",
  },
  {
    titulo: "Ensaio sobre a Cegueira",
    autor: "José Saramago",
    tipo: "Ficção / Distopia",
    imagem: "https://m.media-amazon.com/images/I/41iQySvQq0L._SY445_SX342_ML2_.jpg",
  },
  {
    titulo: "Sapiens: Uma Breve História da Humanidade",
    autor: "Yuval Noah Harari",
    tipo: "História",
    imagem: "https://m.media-amazon.com/images/I/51fuvXO6wvL._SY445_SX342_ML2_.jpg",
  },
  {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    tipo: "Fantasia",
    imagem: "https://m.media-amazon.com/images/I/91Uy0aboP2L._SY466_.jpg",
    
  },
  {
    titulo: "Orgulho e Preconceito",
    autor: "Jane Austen",
    tipo: "Romance",
    imagem: "https://m.media-amazon.com/images/I/719esIW3D7L._SY466_.jpg",
  },
  {
    titulo: "Cem Anos de Solidão",
    autor: "Gabriel García Márquez",
    tipo: "Realismo Mágico",
    imagem: "https://m.media-amazon.com/images/I/515cVYLIP9L._SY445_SX342_ML2_.jpg",
  },
  {
    titulo: "O Nome da Rosa",
    autor: "Umberto Eco",
    tipo: "Ficção Histórica",
    imagem: "https://m.media-amazon.com/images/I/51MB2Ly7XiL._SY445_SX342_ML2_.jpg",
  }
];

export default function Main() {
  return (
    <main id="catalogo" className="px-6 py-16">
      <section className="mx-auto max-w-[1280px]">
        <SectionTitle
          badge="Catalogo"
          title="Livros em destaque"
          sortOptions={["Mais recentes", "Mais vendidos", "Melhor avaliados"]}
        />
        <BookGrid livros={livros} />
      </section>
    </main>
  );
}

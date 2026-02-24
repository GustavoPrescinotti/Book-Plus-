import BookCard from "../BookCard/BoolCard";

export default function BookGrid({ livros }) {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {livros.map((livro) => (
        <BookCard
          key={livro.titulo}
          titulo={livro.titulo}
          autor={livro.autor}
          tipo={livro.tipo}
          imagem={livro.imagem}
        />
      ))}
    </div>
  );
}

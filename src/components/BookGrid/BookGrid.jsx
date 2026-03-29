import BookCard from "../BookCard/BoolCard";

export default function BookGrid({ livros }) {
  return (
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {livros.map((livros) => (
            <BookCard
                key={livros.id}
                id={livros.id}
                titulo={livros.titulo}
                autor={livros.autor}
                tipo={livros.categoria}
                imagem={livros.imagem}
            />
        ))}
      </div>
  );
}
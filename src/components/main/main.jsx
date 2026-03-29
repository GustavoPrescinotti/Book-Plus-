import BookGrid from "../BookGrid/BookGrid";
import SectionTitle from "../SectionTitle/SectionTitle";
import {useEffect, useState} from "react";



export default function Main() {
  const [livros, setLivros] = useState([]);


  async function buscarLista() {
    let resposta = await fetch('https://apps-api-livros.ucxocw.easypanel.host/livro', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const dados = await  resposta.json();
    if (dados.livros) {
      setLivros(dados.livros);
    }
}
  useEffect(() => {
    buscarLista();
  }, []);


  return (
      <main id="catalogo" className="px-6 py-16">
        <section className="mx-auto max-w-[1280px]">
          <SectionTitle
              badge="Catálogo"
              title="Livros em destaque"
              sortOptions={["Mais recentes", "Mais vendidos", "Melhor avaliados"]}
          />
          <BookGrid livros={livros} />
        </section>
      </main>
  );
}

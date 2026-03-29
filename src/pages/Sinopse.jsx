import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Livro() {
  const { id } = useParams();
  const [livro, setLivro] = useState();


  async function buscarLivro() {
    const resposta = await fetch(`https://apps-api-livros.ucxocw.easypanel.host/livro/${id}`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json"
        }
      });

      const dados = await resposta.json();


      if (dados.livro) {
        setLivro(dados.livro);
      } else {
        setLivro(dados);
      }

  }

  useEffect(() => {
    buscarLivro();
  }, [id]);


  if (!livro) {
    return (
        <main className="px-6 py-16 min-h-[70vh] flex justify-center items-center">
          <p className="text-xl font-bold text-navy">A carregar detalhes do livro...</p>
        </main>
    );
  }

  return (
      <main className="px-6 py-16 min-h-[70vh]">
        <div className="mx-auto max-w-[1000px] flex flex-col md:flex-row gap-12 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <div className="w-full md:w-1/3 flex-shrink-0">
            <img
                src={livro.imagem}
                alt={livro.titulo}
                className="w-full h-auto object-cover rounded-xl shadow-md"
            />
          </div>

          <div className="flex flex-col flex-1 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
              <span className="inline-block rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                {livro.categoria}
              </span>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                {livro.faixa_etaria}
              </span>
              </div>

              <h1 className="text-4xl font-extrabold text-navy tracking-tight">{livro.titulo}</h1>
              <p className="text-lg text-gray-500 mt-2 font-medium">{livro.autor}</p>
            </div>

            <div className="w-12 h-[2px] bg-gray-200" />

            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-navy mb-3">Sinopse</h3>
              <p className="text-gray-600 leading-relaxed">{livro.descricao}</p>
            </div>

            <div className="mt-auto pt-6 flex gap-4">
              <button className="bg-navy text-white px-8 py-3 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-slate-800 transition">
                Comprar E-book
              </button>
              <Link
                  to="/catalogo"
                  className="px-8 py-3 rounded-full font-bold uppercase tracking-wider text-sm border border-gray-300 text-gray-600 hover:border-navy hover:text-navy transition flex items-center justify-center"
              >
                Voltar
              </Link>
            </div>
          </div>
        </div>
      </main>
  );
}
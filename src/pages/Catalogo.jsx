import { useEffect, useState } from "react";
import BookGrid from "../components/BookGrid/BookGrid.jsx";


export default function Catalogo() {
  const [total, setTotal] = useState(0);
  const [livros, setLivros] = useState([]);
  const [busca, setBusca] = useState("");

  async function buscarLivros() {

    const resposta = await fetch( `https://apps-api-livros.ucxocw.easypanel.host/livro?autor=${busca}`,{
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    });

    const dados = await resposta.json();

    setLivros(dados.livros);
    setTotal(dados.total);
  }

  useEffect(function () {
    buscarLivros();
  }, [busca]);


  return (
      <main className= "min-h-[70vh] bg-gray-50 px-6 py-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div>
              <h1 className="text-4xl font-extrabold text-navy tracking-tight">Catálogo de Livros</h1>
              <p className="text-sm text-gray-500 mt-2">
                Explora o nosso livros. <span className="font-bold text-navy">{total}</span>
              </p>
            </div>

            <div className="w-full md:w-96 relative">
              <input
                  type="text"
                  placeholder="Buscar por autor..."
                  value={busca}
                  onChange={(e) => setBusca(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 shadow-sm focus:border-navy focus:ring-1 focus:ring-navy transition-all outline-none"
              />
            </div>
          </div>





        {livros.length > 0 ? (
            <BookGrid livros={livros} />
        ) : (
            <div className="text-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <span className="material-symbols-outlined text-5xl text-gray-300 mb-3">auto_stories</span>
              <h3 className="text-xl font-bold text-gray-700">Nenhum livro encontrado</h3>
              <p className="text-gray-500 mt-2">Tenta buscar por outro termo ou limpa a pesquisa.</p>
            </div>
        )}
      </main>
  );
}
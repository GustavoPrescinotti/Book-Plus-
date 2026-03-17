import { useEffect, useState } from "react";

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
    <>
      <h1>Listagem de Livros</h1>
      <p>Total de livros {total}</p>

      <input
        type="text"
        placeholder="Buscar por título ou autor..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />

      {livros.map(function (livro, index) {
        return (
          <div key={index} className="px-6 py-16">
            <img src={livro.imagem} alt={livro.titulo} style={{ width: '100px' }} />
            <h2 >{livro.titulo}</h2>
            <h3>{livro.autor}</h3>
            <p>{livro.categoria}</p>
          </div>
        );
      })}
    </>
  );
}
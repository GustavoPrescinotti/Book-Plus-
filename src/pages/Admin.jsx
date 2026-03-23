import { Link } from "react-router-dom";
import {useEffect, useState} from "react";

export default function Admin() {
    const [livros, setLivros] = useState([]);

    async function buscarLivros() {
        try {
            let resposta = await fetch('https://apps-api-livros.ucxocw.easypanel.host/livro', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            let dados = await resposta.json();

            if (dados.livros) {
                setLivros(dados.livros);
            }
        } catch (erro) {
            console.error("Erro ao buscar livros:", erro);
        }
    }
useEffect(() => {
    buscarLivros();
})

    return (
        <main className="min-h-[70vh] bg-gray-50 px-6 py-12">
            <div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
                    <div>
                        <h2 className="text-3xl font-extrabold text-navy tracking-tight">Painel Administrativo</h2>
                        <p className="text-sm text-gray-500 mt-1">Gerencie os livros do seu catálogo</p>
                    </div>
                    <Link
                        to="/CadastrarLivro"
                        className="bg-navy text-black font-bold py-3 px-6 rounded-full hover:bg-slate-880 transition shadow-sm flex items-center gap-2 uppercase text-xs tracking-wider"
                    >
                        <span className="material-symbols-outlined text-base">add</span>
                        Cadastrar Livro
                    </Link>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                        <tr className="border-b-2 border-gray-100 text-xs uppercase tracking-wider text-gray-400">
                            <th className="pb-4 font-bold">Título</th>
                            <th className="pb-4 font-bold">Autor</th>
                            <th className="pb-4 font-bold">Categoria</th>
                            <th className="pb-4 font-bold text-center">Ações</th>
                        </tr>
                        </thead>
                        <tbody className="text-gray-700">

                        {livros.map((livro) => (
                            <tr key={livro.id} className="border-b border-gray-50 hover:bg-gray-50/80 transition">
                                <td className="py-5 font-bold text-navy">{livro.titulo}</td>
                                <td className="py-5 text-sm">{livro.autor}</td>
                                <td className="py-5">
                                        <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                            {livro.categoria}
                                        </span>
                                </td>
                                <td className="py-5 flex justify-center gap-4">
                                    <button className="text-gray-400 hover:text-blue-600 transition" title="Editar">
                                        <span className="material-symbols-outlined">edit</span>
                                    </button>
                                    <button className="text-gray-400 hover:text-red-600 transition" title="Excluir">
                                        <span className="material-symbols-outlined">delete</span>
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>

                    {livros.length === 0 && (
                        <div className="text-center py-12">
                            <span className="material-symbols-outlined text-4xl text-gray-300 mb-2">menu_book</span>
                            <p className="text-gray-500 font-medium">Nenhum livro cadastrado ainda.</p>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
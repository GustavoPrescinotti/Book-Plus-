import { useState } from "react";
import { Link } from "react-router-dom";

export default function CadastrarLivro() {
    const [imagem, setImagem] = useState('');
    const [titulo, setTitulo] = useState('');
    const [categoria, setCategoria] = useState('');
    const [descricao, setDescricao] = useState('');
    const [autor, setAutor] = useState('');
    const [faixaEtaria, setFaixaEtaria] = useState('');
    const [mensagem, setMensagem] = useState('');


    async function realizarCadastro(e) {
        e.preventDefault(); // Impede a página de recarregar

        const token = localStorage.getItem('token');

        let resposta = await fetch('https://apps-api-livros.ucxocw.easypanel.host/livro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({
                imagem: imagem,
                titulo: titulo,
                categoria: categoria,
                descricao: descricao,
                autor: autor,
                faixa_etaria: faixaEtaria
            })
        });

        let retorno = await resposta.json();
        console.log(retorno);

        if (retorno.livro) {
            setMensagem('Livro cadastrado com sucesso!');
            // Limpa os campos
            setImagem(''); setTitulo(''); setCategoria(''); setDescricao(''); setAutor(''); setFaixaEtaria('');
        } else {
            setMensagem('Erro ao cadatrar livro. Verifique os dados.');
        }
    }

    return (
        <main className="min-h-[70vh] flex items-center justify-center bg-gray-50 px-6 py-12">
            <div className="max-w-2xl w-full bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-extrabold text-navy tracking-tight">Cadastrar Novo Livro</h2>
                    <p className="text-sm text-gray-500 mt-2">Área administrativa</p>
                </div>

                {mensagem && (
                    <div className={`mb-6 p-4 rounded-md text-center text-sm font-medium ${mensagem.includes('sucesso') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {mensagem}
                    </div>
                )}

                {/* O onSubmit do formulário chama a nossa função assíncrona */}
                <form className="space-y-6" onSubmit={realizarCadastro}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Título</label>
                            <input type="text" required value={titulo} onChange={(e) => setTitulo(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 p-2 border focus:border-navy" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Autor</label>
                            <input type="text" required value={autor} onChange={(e) => setAutor(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 p-2 border focus:border-navy" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Categoria</label>
                            <input type="text" required value={categoria} onChange={(e) => setCategoria(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 p-2 border focus:border-navy" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Faixa Etária</label>
                            <input type="text" required value={faixaEtaria} onChange={(e) => setFaixaEtaria(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 p-2 border focus:border-navy" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">URL da Imagem</label>
                        <input type="url" required value={imagem} onChange={(e) => setImagem(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 p-2 border focus:border-navy" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Descrição</label>
                        <textarea required value={descricao} onChange={(e) => setDescricao(e.target.value)} rows="4" className="mt-1 block w-full rounded-md border-gray-300 p-2 border focus:border-navy"></textarea>
                    </div>

                    <div className="">
                        <button type="submit" className="px-6 py-2 border border-gray-300 rounded-full text-gray-700 font-semibold hover:bg-gray-50 transition">
                            Salvar Livro
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
}
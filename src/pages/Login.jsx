import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [alerta, setAlerta] = useState('');

  async function realizarLogin(e) {
    e.preventDefault(); // Impede o recarregamento da página ao enviar o formulário

    let retorno = await fetch('https://apps-api-livros.ucxocw.easypanel.host/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        senha: senha,
      })
    });

    retorno = await retorno.json();
    console.log(retorno);

    if (retorno.token) {
      setAlerta('Login realizado com sucesso!');

      // SALVA NO BANCO DO JS (LocalStorage)
      localStorage.setItem('token', retorno.token);
      localStorage.setItem('usuario_nome', retorno.usuario.nome);
      localStorage.setItem('usuario_email', retorno.usuario.email);
      localStorage.setItem('usuario_id', retorno.usuario.id);

    } else {
      setAlerta('E-mail ou senha estão incorretos.');
    }
  }

  // Executa o comando uma vez quando a página carrega
  useEffect(function () {
    let token = localStorage.getItem('token');

    if (token) {
      let nome = localStorage.getItem('usuario_nome');
      setAlerta('Olá, ' + nome + ', você já está logado.');
    }
  }, []);

  return (
      <main className="min-h-[70vh] flex items-center justify-center bg-gray-50 px-6 py-12">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-navy tracking-tight">Bem-vindo de volta</h2>
            <p className="text-sm text-gray-500 mt-2">Faça login para acessar sua conta</p>
          </div>

          {/* Exibição do Alerta */}
          {alerta && (
              <div className={`mb-6 p-3 rounded text-center text-sm font-medium ${alerta.includes('sucesso') || alerta.includes('logado') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {alerta}
              </div>
          )}

          <form className="space-y-6" onSubmit={realizarLogin}>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-navy focus:ring-navy p-2 border"
                  placeholder="seu@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Senha</label>
              <input
                  type="password"
                  required
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-navy focus:ring-navy p-2 border"
                  placeholder="••••••••"
              />
            </div>
            <button type="submit" className="w-full bg-navy text-black font-bold py-3 px-4 rounded-full">
              <Link to="/admin">Entrar</Link>
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Não tem uma conta? <Link to="/cadastro" className="text-blue-600 font-semibold hover:underline">Cadastre-se</Link>
          </p>
        </div>
      </main>
  );
}
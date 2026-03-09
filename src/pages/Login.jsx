import { Link } from "react-router-dom";

export default function Login() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center bg-gray-50 px-6 py-12">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-navy tracking-tight">Bem-vindo de volta</h2>
          <p className="text-sm text-gray-500 mt-2">Faça login para acessar sua conta</p>
        </div>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-navy focus:ring-navy p-2 border" placeholder="seu@email.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Senha</label>
            <input type="password" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-navy focus:ring-navy p-2 border" placeholder="••••••••" />
          </div>
          <button type="submit" className="w-full bg-navy text-black font-bold py-3 px-4 rounded-full">
            Entrar
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Não tem uma conta? <Link to="/cadastro" className="text-blue-600 font-semibold hover:underline">Cadastre-se</Link>
        </p>
      </div>
    </main>
  );
}
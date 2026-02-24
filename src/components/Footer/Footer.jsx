export default function Footer() {
  return (
    <footer className="border-t border-gray-100 py-20 px-6 bg-gray-50/50">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 text-navy">
              <span className="material-symbols-outlined text-3xl">auto_stories</span>
              <span className="text-2xl font-black tracking-tighter">BOOK PLUS</span>
            </div>
            <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
              Sua livraria digital de confiança. Uma curadoria minimalista das obras mais impactantes para o seu crescimento.
            </p>
            <div className="flex gap-4">
              <a className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-navy hover:text-navy transition-all" href="#">
                <span className="material-symbols-outlined text-xl">share</span>
              </a>
              <a className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-navy hover:text-navy transition-all" href="#">
                <span className="material-symbols-outlined text-xl">favorite</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
            <div className="flex flex-col gap-4">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-navy">Explorar</h4>
              <nav className="flex flex-col gap-3 text-sm text-gray-500">
                <a className="hover:text-navy" href="#">Lançamentos</a>
                <a className="hover:text-navy" href="#">Mais Vendidos</a>
                <a className="hover:text-navy" href="#">E-books</a>
              </nav>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-navy">Suporte</h4>
              <nav className="flex flex-col gap-3 text-sm text-gray-500">
                <a className="hover:text-navy" href="#">Ajuda</a>
                <a className="hover:text-navy" href="#">Envios</a>
                <a className="hover:text-navy" href="#">Trocas</a>
              </nav>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-navy">Institucional</h4>
              <nav className="flex flex-col gap-3 text-sm text-gray-500">
                <a className="hover:text-navy" href="#">Sobre Nós</a>
                <a className="hover:text-navy" href="#">Contato</a>
                <a className="hover:text-navy" href="#">Privacidade</a>
              </nav>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200/60 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
             2024 Book Plus. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Desenvolvido com</span>
            <span className="material-symbols-outlined text-sm text-red-400 fill-1">favorite</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">em SENAI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

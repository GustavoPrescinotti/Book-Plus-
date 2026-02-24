export default function BookCard({ titulo, autor, tipo, imagem }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <img className="h-64 w-full object-cover" src={imagem} alt={titulo} loading="lazy" />
      <div className="space-y-2 p-5">
        <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gray-600">
          {tipo}
        </span>
        <h3 className="text-lg font-bold text-slate-900">{titulo}</h3>
        <p className="text-sm text-gray-500">{autor}</p>
      </div>
    </article>
  );
}

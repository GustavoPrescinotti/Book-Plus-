export default function SectionTitle({ title, badge, sortOptions }) {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-[2px] bg-navy" />
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-gray-400">{badge}</span>
        </div>
        <h2 className="text-4xl font-extrabold text-navy tracking-tight">{title}</h2>
      </div>

      <div className="flex gap-4">
        <button className="p-2 border border-gray-200 rounded-full hover:border-navy hover:text-navy transition-colors" aria-label="Filtrar">
          <span className="material-symbols-outlined">filter_list</span>
        </button>
        <select className="border-gray-200 rounded-full text-sm font-medium pr-10 focus:ring-navy focus:border-navy" defaultValue={sortOptions[0]}>
          {sortOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

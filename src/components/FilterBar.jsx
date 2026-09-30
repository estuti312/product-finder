import { categories } from "../data/products.js";

// Price ranges shown in the dropdown. `max: Infinity` means "no upper limit".
export const priceRanges = [
  { label: "All prices", min: 0, max: Infinity },
  { label: "Under $25", min: 0, max: 25 },
  { label: "$25 - $50", min: 25, max: 50 },
  { label: "$50 - $75", min: 50, max: 75 },
  { label: "Over $75", min: 75, max: Infinity },
];

const inputClass =
  "w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200";

// A "controlled" component: it shows the values it gets from its parent
// and tells the parent when the user changes something.
function FilterBar({ search, onSearch, category, onCategory, priceIndex, onPriceIndex, sort, onSort, onReset }) {
  return (
    <div className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:grid-cols-2 lg:grid-cols-5">
      <input
        type="search"
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search products..."
        aria-label="Search products"
        className={`${inputClass} sm:col-span-2 lg:col-span-1`}
      />
      <select value={category} onChange={(e) => onCategory(e.target.value)} aria-label="Category" className={inputClass}>
        <option value="All">All categories</option>
        {categories.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
      <select value={priceIndex} onChange={(e) => onPriceIndex(Number(e.target.value))} aria-label="Price range" className={inputClass}>
        {priceRanges.map((range, index) => (
          <option key={range.label} value={index}>{range.label}</option>
        ))}
      </select>
      <select value={sort} onChange={(e) => onSort(e.target.value)} aria-label="Sort by price" className={inputClass}>
        <option value="none">Sort by: Featured</option>
        <option value="low">Price: Low to High</option>
        <option value="high">Price: High to Low</option>
      </select>
      <button
        onClick={onReset}
        className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
      >
        Reset filters
      </button>
    </div>
  );
}

export default FilterBar;

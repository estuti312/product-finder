import { useState } from "react";
import { products } from "../data/products.js";
import FilterBar, { priceRanges } from "../components/FilterBar.jsx";
import ProductGrid from "../components/ProductGrid.jsx";
import EmptyState from "../components/EmptyState.jsx";

function ProductsPage({ wishlist, toggleWishlist }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [priceIndex, setPriceIndex] = useState(0);
  const [sort, setSort] = useState("none");

  function resetFilters() {
    setSearch("");
    setCategory("All");
    setPriceIndex(0);
    setSort("none");
  }

  // No extra state needed: we work out the visible list from the current filter values.
  const range = priceRanges[priceIndex];

  const visibleProducts = products
    .filter((p) => p.name.toLowerCase().includes(search.trim().toLowerCase()))
    .filter((p) => category === "All" || p.category === category)
    .filter((p) => p.price >= range.min && p.price <= range.max);

  // filter() returned a new array, so sorting it will not change the original data.
  if (sort === "low") visibleProducts.sort((a, b) => a.price - b.price);
  if (sort === "high") visibleProducts.sort((a, b) => b.price - a.price);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Find your next favourite product</h1>
        <p className="mt-1 text-slate-500">Search, filter and save products you like.</p>
      </div>

      <FilterBar
        search={search} onSearch={setSearch}
        category={category} onCategory={setCategory}
        priceIndex={priceIndex} onPriceIndex={setPriceIndex}
        sort={sort} onSort={setSort}
        onReset={resetFilters}
      />

      <p className="text-sm text-slate-500">
        Showing {visibleProducts.length} of {products.length} products
      </p>

      {visibleProducts.length === 0 ? (
        <EmptyState icon="🔍" title="No products found" message="Try a different search word or change your filters.">
          <button onClick={resetFilters} className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
            Reset filters
          </button>
        </EmptyState>
      ) : (
        <ProductGrid products={visibleProducts} wishlist={wishlist} onToggleWishlist={toggleWishlist} />
      )}
    </div>
  );
}

export default ProductsPage;

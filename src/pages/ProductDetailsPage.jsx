import { Link, useParams } from "react-router-dom";
import { products } from "../data/products.js";
import ProductImage from "../components/ProductImage.jsx";
import Rating from "../components/Rating.jsx";
import EmptyState from "../components/EmptyState.jsx";

function ProductDetailsPage({ wishlist, toggleWishlist }) {
  // useParams reads the :id part of the URL (/product/3 -> "3").
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <EmptyState icon="😕" title="Product not found" message="This product does not exist or was removed.">
        <Link to="/" className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
          Back to Products
        </Link>
      </EmptyState>
    );
  }

  const isWishlisted = wishlist.includes(product.id);

  return (
    <div>
      <Link to="/" className="text-sm font-medium text-indigo-600 hover:underline">← Back to Products</Link>

      <div className="mt-4 grid gap-8 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:grid-cols-2 md:p-8">
        <div className="aspect-square overflow-hidden rounded-2xl">
          <ProductImage product={product} large />
        </div>

        <div className="flex flex-col justify-center">
          <span className="w-fit rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700">{product.category}</span>
          <h1 className="mt-3 text-3xl font-bold">{product.name}</h1>
          <div className="mt-2"><Rating value={product.rating} /></div>
          <p className="mt-4 text-3xl font-bold">${product.price.toFixed(2)}</p>
          <p className="mt-4 leading-relaxed text-slate-600">{product.description}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => toggleWishlist(product.id)}
              className={`rounded-lg px-5 py-3 text-sm font-medium transition ${
                isWishlisted
                  ? "border border-rose-200 bg-rose-50 text-rose-600 hover:bg-rose-100"
                  : "bg-indigo-600 text-white hover:bg-indigo-700"
              }`}
            >
              {isWishlisted ? "♥ Remove from Wishlist" : "♡ Add to Wishlist"}
            </button>
            <Link to="/" className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100">
              Back to Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;

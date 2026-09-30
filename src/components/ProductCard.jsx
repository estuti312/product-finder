import { Link } from "react-router-dom";
import ProductImage from "./ProductImage.jsx";
import Rating from "./Rating.jsx";
import WishlistButton from "./WishlistButton.jsx";

function ProductCard({ product, isWishlisted, onToggleWishlist }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="aspect-square">
        <ProductImage product={product} />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs font-medium text-indigo-600">{product.category}</p>
        <h3 className="mt-1 font-semibold text-slate-900">{product.name}</h3>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
          <Rating value={product.rating} />
        </div>
        <div className="mt-4 flex items-center gap-2">
          <Link
            to={`/product/${product.id}`}
            className="flex-1 rounded-lg bg-indigo-600 px-3 py-2 text-center text-sm font-medium text-white transition hover:bg-indigo-700"
          >
            View Details
          </Link>
          <WishlistButton active={isWishlisted} onClick={() => onToggleWishlist(product.id)} />
        </div>
      </div>
    </article>
  );
}

export default ProductCard;

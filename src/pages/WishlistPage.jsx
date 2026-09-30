import { Link } from "react-router-dom";
import { products } from "../data/products.js";
import ProductGrid from "../components/ProductGrid.jsx";
import EmptyState from "../components/EmptyState.jsx";

function WishlistPage({ wishlist, toggleWishlist }) {
  // Turn the saved ids into full product objects.
  const wishlistProducts = products.filter((p) => wishlist.includes(p.id));

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Your Wishlist</h1>

      {wishlistProducts.length === 0 ? (
        <EmptyState icon="♡" title="Your wishlist is empty" message="Tap the heart on any product to save it here.">
          <Link to="/" className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
            Browse products
          </Link>
        </EmptyState>
      ) : (
        <>
          <p className="text-sm text-slate-500">{wishlistProducts.length} saved item(s). Tap the heart to remove.</p>
          <ProductGrid products={wishlistProducts} wishlist={wishlist} onToggleWishlist={toggleWishlist} />
        </>
      )}
    </div>
  );
}

export default WishlistPage;

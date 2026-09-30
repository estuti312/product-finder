import ProductCard from "./ProductCard.jsx";

// Reused by the Products page and the Wishlist page.
function ProductGrid({ products, wishlist, onToggleWishlist }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isWishlisted={wishlist.includes(product.id)}
          onToggleWishlist={onToggleWishlist}
        />
      ))}
    </div>
  );
}

export default ProductGrid;

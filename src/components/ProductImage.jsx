// Shows a real image if the product has one, otherwise a coloured emoji tile.
function ProductImage({ product, large = false }) {
  if (product.image) {
    return <img src={product.image} alt={product.name} className="h-full w-full object-cover" />;
  }
  return (
    <div
      role="img"
      aria-label={product.name}
      className={`flex h-full w-full items-center justify-center ${product.color} ${large ? "text-9xl" : "text-7xl"}`}
    >
      {product.emoji}
    </div>
  );
}

export default ProductImage;

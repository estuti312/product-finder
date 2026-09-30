// Heart button used on cards. `active` is true when the product is in the wishlist.
function WishlistButton({ active, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label={active ? "Remove from wishlist" : "Add to wishlist"}
      aria-pressed={active}
      className={`grid h-9 w-9 place-items-center rounded-full border text-lg transition ${
        active
          ? "border-rose-200 bg-rose-50 text-rose-500"
          : "border-slate-200 bg-white text-slate-400 hover:text-rose-500"
      }`}
    >
      {active ? "♥" : "♡"}
    </button>
  );
}

export default WishlistButton;

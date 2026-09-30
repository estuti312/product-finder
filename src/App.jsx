import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import ProductDetailsPage from "./pages/ProductDetailsPage.jsx";
import WishlistPage from "./pages/WishlistPage.jsx";

function App() {
  // The wishlist is stored here (one place) so every page can share it.
  // We only keep product ids, e.g. [1, 5, 9].
  const [wishlist, setWishlist] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("wishlist")) || [];
    } catch {
      return [];
    }
  });

  // Save the wishlist in the browser so it survives a page refresh.
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // Add the id if it is missing, remove it if it is already there.
  function toggleWishlist(id) {
    setWishlist((current) =>
      current.includes(id) ? current.filter((x) => x !== id) : [...current, id]
    );
  }

  const shared = { wishlist, toggleWishlist };

  return (
    <div className="min-h-screen">
      <Navbar wishlistCount={wishlist.length} />
      <main className="mx-auto max-w-6xl px-4 py-8">
        <Routes>
          <Route path="/" element={<ProductsPage {...shared} />} />
          <Route path="/product/:id" element={<ProductDetailsPage {...shared} />} />
          <Route path="/wishlist" element={<WishlistPage {...shared} />} />
          <Route path="*" element={<p className="py-20 text-center text-slate-500">Page not found.</p>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

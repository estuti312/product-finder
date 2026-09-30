import { Link, NavLink } from "react-router-dom";

function Navbar({ wishlistCount }) {
  const linkClass = ({ isActive }) =>
    `rounded-lg px-3 py-2 text-sm font-medium transition ${
      isActive ? "bg-indigo-50 text-indigo-700" : "text-slate-600 hover:bg-slate-100"
    }`;

  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-slate-900">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-indigo-600 text-sm text-white">PF</span>
          Product Finder
        </Link>
        <div className="flex items-center gap-1">
          <NavLink to="/" end className={linkClass}>Products</NavLink>
          <NavLink to="/wishlist" className={linkClass}>
            Wishlist
            <span className="ml-2 rounded-full bg-indigo-600 px-2 py-0.5 text-xs text-white">{wishlistCount}</span>
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

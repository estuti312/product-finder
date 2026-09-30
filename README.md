# Product Finder

A responsive product discovery website built with React. Users can browse products, search, filter by category and price, sort by price, view product details and save products to a wishlist.

This is a frontend-only project. All product data is stored locally in `src/data/products.js`. There is no backend, database, login, payment or external API.

## Features

- Product grid with image, name, category, price, rating, wishlist button and View Details button
- Search by product name
- Category filter and price-range filter
- Sort by price (low to high / high to low)
- Reset filters button and an empty state when nothing matches
- Product details page (`/product/:id`)
- Wishlist page with remove option and empty state
- Wishlist is saved in the browser (`localStorage`) so it stays after refresh
- Responsive layout for mobile, tablet and desktop

## Technologies Used

React 18, Vite, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, React Router

## How to Install and Run

Requires Node.js 18 or newer.

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal (usually http://localhost:5173).

## How to Build

```bash
npm run build     # creates the production files in /dist
npm run preview   # preview the production build locally
```

## Project Structure

```
src/
  components/   Navbar, ProductCard, ProductGrid, FilterBar, Rating, ...
  pages/        ProductsPage, ProductDetailsPage, WishlistPage
  data/         products.js (local product data)
  App.jsx       routes + wishlist state
  main.jsx      app entry point
  index.css     Tailwind import
```

## Future Improvements

- Real product photos
- Pagination or "load more"
- Custom min/max price inputs
- Sort by rating or name
- Keep filters in the URL so they can be shared
- Unit tests with Vitest and React Testing Library
- Connect to a real backend API

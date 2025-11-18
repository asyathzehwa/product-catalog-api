const express = require("express");
const app = express();
const PORT = 3000;

// Serve frontend (HTML)
app.use(express.static("public"));

// -------------------------
// Product Data (In-Memory)
// -------------------------
const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 45000, inStock: true },
  { id: 2, name: "Phone", category: "Electronics", price: 25000, inStock: true },
  { id: 3, name: "Table", category: "Furniture", price: 7000, inStock: false },
  { id: 4, name: "Headphones", category: "Accessories", price: 1500, inStock: true },
  { id: 5, name: "Backpack", category: "Accessories", price: 900, inStock: false }
];

// -------------------------
// API ENDPOINTS
// -------------------------

// 1) GET ALL PRODUCTS
app.get("/products", (req, res) => {
  res.json(products);
});

// 2) GET UNIQUE CATEGORIES
app.get("/products/categories", (req, res) => {
  const categories = [...new Set(products.map(p => p.category))];
  res.json({ categories });
});

// 3) GET ONLY IN-STOCK PRODUCTS
app.get("/products/instock", (req, res) => {
  const instockProducts = products.filter(p => p.inStock === true);
  res.json(instockProducts);
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

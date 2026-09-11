import { motion } from "motion/react";
import { ShoppingCart, ChevronRight } from "lucide-react";
import { useState, useMemo, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router";
import { Product } from "../components/ProductCard";
import { productsData } from "../data/products";
import { useCart } from "../context/CartContext";

type PersonaFilter = "all" | "student" | "developer" | "gamer" | "teacher" | "designer";
type CategoryFilter = "all" | "Laptops" | "Keyboards" | "Monitors" | "Accessories" | "Audio";
type PriceFilter = "all" | "under100" | "100to500" | "500to1000" | "over1000";

const personaProducts: Record<string, string[]> = {
  student: ["1", "2", "3", "4", "5", "6", "7", "8"],
  developer: ["9", "10", "11", "12", "13", "14", "15", "16"],
  gamer: ["17", "18", "19", "20", "21", "22", "23"],
  teacher: ["24", "25", "26", "27"],
  designer: ["28", "29", "30"],
};

export function StorePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { addToCart, setIsCartOpen } = useCart();

  const initialCategory = (searchParams.get("category") as CategoryFilter) || "all";
  
  const [personaFilter, setPersonaFilter] = useState<PersonaFilter>("all");
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>(initialCategory);
  const [priceFilter, setPriceFilter] = useState<PriceFilter>("all");

  // Sync state with URL param if it changes
  useEffect(() => {
    const category = searchParams.get("category") as CategoryFilter;
    if (category) {
      setCategoryFilter(category);
    }
  }, [searchParams]);

  const updateCategory = (category: CategoryFilter) => {
    setCategoryFilter(category);
    if (category === "all") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", category);
    }
    setSearchParams(searchParams);
  };

  // Filter products based on selected filters
  const filteredProducts = useMemo(() => {
    let filtered = [...productsData];

    // Filter by persona
    if (personaFilter !== "all") {
      const productIds = personaProducts[personaFilter] || [];
      filtered = filtered.filter((p) => productIds.includes(p.id));
    }

    // Filter by category
    if (categoryFilter !== "all") {
      filtered = filtered.filter((p) => p.category === categoryFilter);
    }

    // Filter by price
    if (priceFilter !== "all") {
      filtered = filtered.filter((p) => {
        switch (priceFilter) {
          case "under100":
            return p.price < 1000;
          case "100to500":
            return p.price >= 1000 && p.price < 5000;
          case "500to1000":
            return p.price >= 5000 && p.price < 10000;
          case "over1000":
            return p.price >= 10000;
          default:
            return true;
        }
      });
    }

    return filtered;
  }, [personaFilter, categoryFilter, priceFilter]);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-[#E6E9F0]/30 rounded-xl p-6 space-y-6 sticky top-36">
              {/* Who's it for? */}
              <div>
                <h3 className="text-[#2C3E50] mb-4">Who's it for?</h3>
                <div className="space-y-2">
                  {[
                    { value: "all", label: "All Users" },
                    { value: "student", label: "Students" },
                    { value: "developer", label: "Developers" },
                    { value: "gamer", label: "Gamers" },
                    { value: "teacher", label: "Teachers" },
                    { value: "designer", label: "Designers" },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className="flex items-center space-x-3 cursor-pointer group"
                    >
                      <input
                        type="radio"
                        name="persona"
                        value={option.value}
                        checked={personaFilter === option.value}
                        onChange={(e) =>
                          setPersonaFilter(e.target.value as PersonaFilter)
                        }
                        className="w-4 h-4 text-[#0056b3] focus:ring-[#0056b3] cursor-pointer"
                      />
                      <span className="text-gray-700 group-hover:text-[#0056b3] transition-colors">
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Category */}
              <div>
                <h3 className="text-[#2C3E50] mb-4">Category</h3>
                <div className="space-y-2">
                  {[
                    { value: "all", label: "All Categories" },
                    { value: "Laptops", label: "Laptops" },
                    { value: "Keyboards", label: "Keyboards" },
                    { value: "Monitors", label: "Monitors" },
                    { value: "Accessories", label: "Accessories" },
                    { value: "Audio", label: "Audio" },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className="flex items-center space-x-3 cursor-pointer group"
                    >
                      <input
                        type="radio"
                        name="category"
                        value={option.value}
                        checked={categoryFilter === option.value}
                        onChange={(e) =>
                          updateCategory(e.target.value as CategoryFilter)
                        }
                        className="w-4 h-4 text-[#0056b3] focus:ring-[#0056b3] cursor-pointer"
                      />
                      <span className="text-gray-700 group-hover:text-[#0056b3] transition-colors">
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="text-[#2C3E50] mb-4">Price Range</h3>
                <div className="space-y-2">
                  {[
                    { value: "all", label: "Any price" },
                    { value: "under100", label: "Under 1,000 DH" },
                    { value: "100to500", label: "1,000 - 5,000 DH" },
                    { value: "500to1000", label: "5,000 - 10,000 DH" },
                    { value: "over1000", label: "Over 10,000 DH" },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className="flex items-center space-x-3 cursor-pointer group"
                    >
                      <input
                        type="radio"
                        name="price"
                        value={option.value}
                        checked={priceFilter === option.value}
                        onChange={(e) =>
                          setPriceFilter(e.target.value as PriceFilter)
                        }
                        className="w-4 h-4 text-[#0056b3] focus:ring-[#0056b3] cursor-pointer"
                      />
                      <span className="text-gray-700 group-hover:text-[#0056b3] transition-colors">
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              <button
                onClick={() => {
                  setPersonaFilter("all");
                  updateCategory("all");
                  setPriceFilter("all");
                }}
                className="w-full py-2 text-sm text-[#0056b3] hover:text-[#003d82] transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          </aside>

          {/* Products Grid */}
          <main className="flex-1">
            {/* Page Title */}
            <div className="mb-6">
              <h1 className="text-3xl text-[#2C3E50] mb-2">
                {personaFilter === "all" && categoryFilter === "all"
                  ? "All Products"
                  : personaFilter !== "all"
                  ? `${
                      personaFilter.charAt(0).toUpperCase() +
                      personaFilter.slice(1)
                    } Products`
                  : categoryFilter}
              </h1>
              <p className="text-gray-600">
                {filteredProducts.length} product
                {filteredProducts.length !== 1 ? "s" : ""} available
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-xl overflow-hidden group"
                  style={{
                    border: "1px solid rgba(0, 86, 179, 0.1)",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
                  }}
                >
                  {/* Product Image */}
                  <div 
                    className="relative bg-gradient-to-b from-[#E6E9F0] to-white p-6 aspect-square cursor-pointer"
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-4 space-y-3">
                    <div className="space-y-1">
                      <p className="text-xs text-[#0056b3] uppercase tracking-wider">
                        {product.category}
                      </p>
                      <h3 className="text-[#2C3E50]">{product.name}</h3>
                    </div>

                    <p className="text-sm text-gray-600 line-clamp-2">
                      {product.description}
                    </p>

                    <div className="flex items-baseline space-x-1">
                      <span className="text-2xl text-[#2C3E50]">
                        {product.price.toLocaleString("fr-MA")}
                      </span>
                      <span className="text-sm text-gray-500">DH</span>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 pt-2">
                      <button
                        onClick={() => navigate(`/product/${product.id}`)}
                        className="flex-1 py-2 px-4 text-[#0056b3] hover:bg-[#E6E9F0] rounded-lg transition-colors flex items-center justify-center space-x-2"
                      >
                        <span>View details</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                      <motion.button
                        onClick={() => addToCart(product)}
                        className="py-2 px-4 rounded-lg text-white flex items-center justify-center space-x-2"
                        style={{
                          background:
                            "linear-gradient(135deg, #0056b3 0%, #003d82 100%)",
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ShoppingCart className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-gray-500 mb-4">
                  No products found matching your filters
                </p>
                <button
                  onClick={() => {
                    setPersonaFilter("all");
                    updateCategory("all");
                    setPriceFilter("all");
                  }}
                  className="text-[#0056b3] hover:text-[#003d82] transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

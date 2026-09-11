import { ShoppingCart } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { useCart } from "../context/CartContext";

export function Header() {
  const { cartItemCount, setIsCartOpen } = useCart();
  const navigate = useNavigate();

  const handleNavigateToStore = (category?: string) => {
    if (category && category !== "all") {
      navigate(`/store?category=${category}`);
    } else {
      navigate("/store");
    }
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-[#0056b3] to-[#003d82] rounded-lg flex items-center justify-center">
              <span className="text-white text-sm">TS</span>
            </div>
            <span className="text-xl text-[#2C3E50]">TechStore</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavigateToStore("all")}
              className="text-[#2C3E50] hover:text-[#0056b3] transition-colors"
            >
              All Products
            </button>
            <button
              onClick={() => handleNavigateToStore("Laptops")}
              className="text-[#2C3E50] hover:text-[#0056b3] transition-colors"
            >
              Laptops
            </button>
            <button
              onClick={() => handleNavigateToStore("Keyboards")}
              className="text-[#2C3E50] hover:text-[#0056b3] transition-colors"
            >
              Keyboards
            </button>
            <button
              onClick={() => handleNavigateToStore("Accessories")}
              className="text-[#2C3E50] hover:text-[#0056b3] transition-colors"
            >
              Accessories
            </button>

            <button
              onClick={() => handleNavigateToStore("Audio")}
              className="text-[#2C3E50] hover:text-[#0056b3] transition-colors"
            >
              Audio
            </button>

            <button
              onClick={() => handleNavigateToStore("Monitors")}
              className="text-[#2C3E50] hover:text-[#0056b3] transition-colors"
            >
              Monitors
            </button>
          </div>

          {/* Shopping Cart */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ShoppingCart className="w-6 h-6 text-[#2C3E50]" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#0056b3] text-white text-xs rounded-full flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

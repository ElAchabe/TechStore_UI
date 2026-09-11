import { motion } from "motion/react";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onProductClick?: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart, onProductClick }: ProductCardProps) {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1000);
  };

  return (
    <motion.div
      className="group relative bg-white rounded-lg overflow-hidden"
      style={{
        border: "0.5px solid rgba(0, 86, 179, 0.1)",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ 
        y: -4,
        boxShadow: "0 8px 16px rgba(0, 86, 179, 0.12)",
        transition: { duration: 0.2 }
      }}
    >
      {/* Moroccan Pattern Background - Subtle */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30 30 0zm0 10L10 30l20 20 20-20-20-20z' fill='%230056b3' fill-opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: "30px 30px",
        }}
      />

      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-b from-[#E6E9F0] to-white p-6">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain"
          style={{ marginBottom: "0.25rem" }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-3">
        <div className="space-y-1">
          <p className="text-xs text-[#0056b3] uppercase tracking-wider">
            {product.category}
          </p>
          <h3 
            className="text-[#2C3E50] group-hover:text-[#0056b3] transition-colors cursor-pointer"
            onClick={() => onProductClick?.(product)}
          >
            {product.name}
          </h3>
        </div>

        <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
          {product.description}
        </p>

        {/* Price and CTA */}
        <div className="flex items-center justify-between pt-2">
          <div>
            <p className="text-xs text-gray-500">Prix</p>
            <p className="text-[#2C3E50]">{product.price.toLocaleString('fr-MA')} DH</p>
          </div>

          <motion.button
            onClick={handleAddToCart}
            className="relative px-4 py-2 rounded-lg overflow-hidden group/btn"
            style={{
              background: isAdded 
                ? "linear-gradient(135deg, #D4AF37 0%, #C49A2E 100%)" 
                : "linear-gradient(135deg, #0056b3 0%, #003d82 100%)",
              boxShadow: "0 2px 8px rgba(0, 86, 179, 0.2)",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="flex items-center space-x-2 text-white text-sm"
              animate={isAdded ? { scale: [1, 1.2, 1] } : {}}
            >
              <ShoppingCart className="w-4 h-4" />
              <span>{isAdded ? "Ajouté!" : "Ajouter"}</span>
            </motion.div>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
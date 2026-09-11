import { motion } from "motion/react";
import { ArrowLeft, ShoppingCart, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import { Product, ProductCard } from "../components/ProductCard";
import { productsData } from "../data/products";
import { useCart } from "../context/CartContext";

const personaConfig = {
  student: {
    label: "Perfect for Students",
    color: "#0056b3",
    bgColor: "rgba(0, 86, 179, 0.1)",
  },
  developer: {
    label: "Built for Developers",
    color: "#059669",
    bgColor: "rgba(5, 150, 105, 0.1)",
  },
  gamer: {
    label: "Gamer's Choice",
    color: "#dc2626",
    bgColor: "rgba(220, 38, 38, 0.1)",
  },
  teacher: {
    label: "Perfect for Teachers",
    color: "#7c3aed",
    bgColor: "rgba(124, 58, 237, 0.1)",
  },
  designer: {
    label: "Designer's Pick",
    color: "#ea580c",
    bgColor: "rgba(234, 88, 12, 0.1)",
  },
};

// Map product IDs to specs
const productSpecs: Record<string, string[]> = {
  "1": [
    "Puce Apple M3 Pro",
    "16GB RAM Unifiée",
    "512GB SSD",
    "Écran Liquid Retina XDR 14\"",
    "Autonomie jusqu'à 18h",
  ],
  "2": [
    "Réduction de bruit active",
    "Autonomie 30h",
    "Charge rapide USB-C",
    "Contrôles tactiles",
    "Multipoint Bluetooth",
  ],
  "3": [
    "Puce A17 Pro",
    "128GB Stockage",
    "Triple caméra 48MP",
    "Écran Super Retina XDR 6.1\"",
    "5G Ultra rapide",
  ],
  "4": [
    "Résolution 4K UHD (3840x2160)",
    "Panel IPS 99% sRGB",
    "Temps de réponse 5ms",
    "USB-C, HDMI, DisplayPort",
    "Support VESA inclus",
  ],
  "5": [
    "Switches Cherry MX Red",
    "Rétroéclairage RGB",
    "Câble détachable",
    "Anti-ghosting complet",
    "Repose-poignets magnétique",
  ],
  "6": [
    "Puce Apple M3 Max",
    "32GB RAM Unifiée",
    "1TB SSD",
    "Écran Liquid Retina XDR 16\"",
    "Autonomie jusqu'à 22h",
  ],
  "7": [
    "Capteur optique 16000 DPI",
    "8 boutons programmables",
    "Poids ajustable 80-120g",
    "RGB personnalisable",
    "Polling rate 1000Hz",
  ],
  "8": [
    "Switches mécaniques Razer",
    "RGB Chroma personnalisable",
    "Anti-ghosting N-Key",
    "Repose-poignets ergonomique",
    "Macros programmables",
  ],
  "9": [
    "Son surround 7.1 virtuel",
    "Microphone antibruit",
    "Coussinets memory foam",
    "Autonomie 20h",
    "USB sans fil 2.4GHz",
  ],
};

export function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const product = productsData.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Produit non trouvé</h2>
          <button 
            onClick={() => navigate('/store')}
            className="mt-4 text-blue-600 hover:underline"
          >
            Retour à la boutique
          </button>
        </div>
      </div>
    );
  }

  // Determine persona - default to student if not mapped
  const personaKey = "student"; 
  const personaInfo = personaConfig[personaKey];
  
  const specs = productSpecs[product.id] || [];
  const totalPrice = product.price * quantity;

  // Find related products (same category, excluding current)
  const relatedProducts = productsData
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="bg-white border-b border-gray-100 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <motion.button
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2 text-[#0056b3] hover:text-[#003d82] transition-colors"
            whileHover={{ x: -4 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </motion.button>
        </div>
      </div>

      {/* Product Detail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Column 1: Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="sticky top-32">
              <div
                className="relative bg-gradient-to-b from-[#E6E9F0] to-white rounded-2xl p-12 overflow-hidden"
                style={{
                  border: "0.5px solid rgba(0, 86, 179, 0.1)",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                }}
              >
                {/* Decorative Pattern */}
                <div
                  className="absolute inset-0 opacity-[0.02] pointer-events-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30 30 0zm0 10L10 30l20 20 20-20-20-20z' fill='%230056b3' fill-opacity='1'/%3E%3C/svg%3E")`,
                    backgroundSize: "30px 30px",
                  }}
                />
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto object-contain relative z-10"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          </motion.div>

          {/* Column 2: Product Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Persona Badge */}
            <motion.div
              className="inline-flex items-center px-4 py-2 rounded-full"
              style={{
                backgroundColor: personaInfo.bgColor,
                color: personaInfo.color,
              }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-sm font-medium">{personaInfo.label}</span>
            </motion.div>

            {/* Category */}
            <p className="text-xs text-[#0056b3] uppercase tracking-wider">
              {product.category}
            </p>

            {/* Product Title */}
            <h1 className="text-3xl md:text-4xl text-[#2C3E50]">
              {product.name}
            </h1>

            {/* Price */}
            <div className="flex items-baseline space-x-2">
              <span className="text-4xl text-[#2C3E50]">
                {product.price.toLocaleString("fr-MA")}
              </span>
              <span className="text-2xl text-gray-500">DH</span>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed">
              {product.description}
            </p>

            {/* Key Specifications */}
            {specs.length > 0 && (
              <div
                className="p-6 rounded-xl space-y-3"
                style={{
                  backgroundColor: "rgba(230, 233, 240, 0.3)",
                  border: "1px solid rgba(0, 86, 179, 0.1)",
                }}
              >
                <h3 className="text-[#2C3E50] mb-4">
                  Caractéristiques Clés
                </h3>
                <ul className="space-y-2">
                  {specs.map((spec, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start space-x-3 text-gray-700"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.05 }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0056b3] mt-2 flex-shrink-0" />
                      <span>{spec}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}

            {/* Quantity and Add to Cart */}
            <div className="space-y-4 pt-4">
              {/* Quantity Controls */}
              <div className="space-y-2">
                <label className="text-sm text-gray-600">Quantité</label>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-3 bg-[#E6E9F0] rounded-lg p-2">
                    <motion.button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 flex items-center justify-center hover:bg-white rounded-md transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      disabled={quantity <= 1}
                    >
                      <Minus className="w-4 h-4 text-[#2C3E50]" />
                    </motion.button>

                    <span className="text-xl text-[#2C3E50] w-12 text-center font-medium">
                      {quantity}
                    </span>

                    <motion.button
                      onClick={() => setQuantity(Math.min(99, quantity + 1))}
                      className="w-10 h-10 flex items-center justify-center hover:bg-white rounded-md transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      disabled={quantity >= 99}
                    >
                      <Plus className="w-4 h-4 text-[#2C3E50]" />
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Calculated Total */}
              <div className="flex items-center justify-between py-4 border-t border-b border-gray-200">
                <span className="text-gray-600">Total</span>
                <div className="flex items-baseline space-x-2">
                  <span className="text-3xl text-[#2C3E50]">
                    {totalPrice.toLocaleString("fr-MA")}
                  </span>
                  <span className="text-xl text-gray-500">DH</span>
                </div>
              </div>

              {/* Add to Cart Button */}
              <motion.button
                onClick={handleAddToCart}
                className="w-full px-8 py-4 rounded-lg text-white flex items-center justify-center space-x-3"
                style={{
                  background: isAdded
                    ? "linear-gradient(135deg, #D4AF37 0%, #C49A2E 100%)"
                    : "linear-gradient(135deg, #0056b3 0%, #003d82 100%)",
                  boxShadow: "0 4px 16px rgba(0, 86, 179, 0.3)",
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                animate={isAdded ? { scale: [1, 1.05, 1] } : {}}
              >
                <ShoppingCart className="w-5 h-5" />
                <span className="text-lg">
                  {isAdded ? "Ajouté au Panier!" : "Ajouter au Panier"}
                </span>
              </motion.button>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-4 text-sm text-gray-500 pt-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full" />
                  <span>Livraison Gratuite</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full" />
                  <span>Garantie 2 Ans</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full" />
                  <span>Retour Gratuit 30j</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* You Might Also Like Section */}
        {relatedProducts.length > 0 && (
          <motion.div
            className="mt-20 pt-12 border-t border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl text-[#2C3E50] mb-8">
              Vous Aimerez Aussi
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct, index) => (
                <motion.div
                  key={relatedProduct.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <ProductCard
                    product={relatedProduct}
                    onAddToCart={(p) => addToCart(p, 1)}
                    onProductClick={() => navigate(`/product/${relatedProduct.id}`)}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

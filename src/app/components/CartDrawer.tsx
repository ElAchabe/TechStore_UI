import { motion, AnimatePresence } from "motion/react";
import { X, ShoppingCart, Trash2, Plus, Minus } from "lucide-react";
import { Product } from "./ProductCard";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: Product[];
  onRemoveItem: (productId: string) => void;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onClearCart: () => void;
}

export function CartDrawer({ 
  isOpen, 
  onClose, 
  items, 
  onRemoveItem,
  onUpdateQuantity,
  onClearCart 
}: CartDrawerProps) {
  // Calculate totals
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  const shipping = items.length > 0 ? 0 : 0; // Livraison gratuite
  const total = subtotal + shipping;

  // Group items by id to show quantity
  const groupedItems = items.reduce((acc, item) => {
    const existing = acc.find((i) => i.product.id === item.id);
    if (existing) {
      existing.quantity++;
    } else {
      acc.push({ product: item, quantity: 1 });
    }
    return acc;
  }, [] as Array<{ product: Product; quantity: number }>);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#0056b3] to-[#003d82] rounded-lg flex items-center justify-center">
                  <ShoppingCart className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-[#2C3E50]">Votre Panier</h2>
                  <p className="text-sm text-gray-500">
                    {items.length} article{items.length > 1 ? "s" : ""}
                  </p>
                </div>
              </div>
              <motion.button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-5 h-5 text-gray-600" />
              </motion.button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {groupedItems.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center h-full space-y-4 text-center"
                >
                  <div className="w-20 h-20 bg-[#E6E9F0] rounded-full flex items-center justify-center">
                    <ShoppingCart className="w-10 h-10 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-gray-600 mb-2">Votre panier est vide</p>
                    <p className="text-sm text-gray-500">
                      Ajoutez des produits pour commencer
                    </p>
                  </div>
                  <motion.button
                    onClick={onClose}
                    className="px-6 py-3 bg-[#0056b3] text-white rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Continuer vos achats
                  </motion.button>
                </motion.div>
              ) : (
                <>
                  {groupedItems.map(({ product, quantity }) => (
                    <motion.div
                      key={product.id}
                      layout
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex space-x-4 p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
                    >
                      {/* Product Image */}
                      <div className="w-20 h-20 bg-[#E6E9F0] rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm text-[#2C3E50] mb-1 truncate">
                          {product.name}
                        </h3>
                        <p className="text-xs text-gray-500 mb-3">
                          {product.category}
                        </p>
                        
                        {/* Price and Quantity Control */}
                        <div className="flex items-center justify-between">
                          <p className="text-[#0056b3]">
                            {(product.price * quantity).toLocaleString("fr-MA")} DH
                          </p>
                          
                          {/* Numeric UpDown */}
                          <div className="flex items-center space-x-2 bg-[#E6E9F0] rounded-lg p-1">
                            <motion.button
                              onClick={() => onUpdateQuantity(product.id, Math.max(1, quantity - 1))}
                              className="w-7 h-7 flex items-center justify-center hover:bg-white rounded-md transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              disabled={quantity <= 1}
                            >
                              <Minus className="w-3 h-3 text-[#2C3E50]" />
                            </motion.button>
                            
                            <span className="text-sm text-[#2C3E50] w-8 text-center font-medium">
                              {quantity}
                            </span>
                            
                            <motion.button
                              onClick={() => onUpdateQuantity(product.id, quantity + 1)}
                              className="w-7 h-7 flex items-center justify-center hover:bg-white rounded-md transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              disabled={quantity >= 99}
                            >
                              <Plus className="w-3 h-3 text-[#2C3E50]" />
                            </motion.button>
                          </div>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <motion.button
                        onClick={() => onRemoveItem(product.id)}
                        className="p-2 h-fit hover:bg-red-50 rounded-lg transition-colors group"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Trash2 className="w-4 h-4 text-gray-400 group-hover:text-red-500" />
                      </motion.button>
                    </motion.div>
                  ))}

                  {/* Clear Cart Button */}
                  {items.length > 0 && (
                    <motion.button
                      onClick={onClearCart}
                      className="w-full py-2 text-sm text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Vider le panier
                    </motion.button>
                  )}
                </>
              )}
            </div>

            {/* Footer - Summary */}
            {items.length > 0 && (
              <div className="border-t border-gray-200 p-6 space-y-4 bg-gradient-to-t from-[#E6E9F0]/20 to-white">
                {/* Price Breakdown */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Sous-total</span>
                    <span className="text-[#2C3E50]">
                      {subtotal.toLocaleString("fr-MA")} DH
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Livraison</span>
                    <span className="text-[#D4AF37]">
                      Gratuite
                    </span>
                  </div>
                  <div className="h-px bg-gray-200 my-2" />
                  <div className="flex items-center justify-between">
                    <span className="text-[#2C3E50]">Total</span>
                    <span className="text-[#0056b3]">
                      {total.toLocaleString("fr-MA")} DH
                    </span>
                  </div>
                </div>

                {/* Checkout Button */}
                <motion.button
                  className="w-full py-4 rounded-lg text-white"
                  style={{
                    background: "linear-gradient(135deg, #0056b3 0%, #003d82 100%)",
                    boxShadow: "0 4px 16px rgba(0, 86, 179, 0.3)",
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 6px 20px rgba(0, 86, 179, 0.4)" 
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Procéder au paiement
                </motion.button>

                <p className="text-xs text-center text-gray-500">
                  Paiement sécurisé · Livraison sous 48h
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
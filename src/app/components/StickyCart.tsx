import { motion, AnimatePresence } from "motion/react";
import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";

interface StickyCartProps {
  itemCount: number;
  totalPrice: number;
  onViewCart: () => void;
}

export function StickyCart({ itemCount, totalPrice, onViewCart }: StickyCartProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky cart after scrolling 200px
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (itemCount === 0) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 md:hidden"
        >
          <motion.button
            onClick={onViewCart}
            className="flex items-center space-x-4 px-6 py-4 rounded-full shadow-2xl"
            style={{
              background: "linear-gradient(135deg, #0056b3 0%, #003d82 100%)",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center space-x-2 text-white">
              <div className="relative">
                <ShoppingCart className="w-5 h-5" />
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-[#D4AF37] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center"
                >
                  {itemCount}
                </motion.span>
              </div>
              <span>Voir Panier</span>
            </div>

            <div className="h-6 w-px bg-white/30" />

            <div className="text-white">
              <p className="text-xs opacity-80">Total</p>
              <p className="font-semibold">{totalPrice.toLocaleString('fr-MA')} DH</p>
            </div>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

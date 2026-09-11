import { motion } from "motion/react";
import { SlidersHorizontal } from "lucide-react";

interface FilterSectionProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function FilterSection({ 
  categories, 
  activeCategory, 
  onCategoryChange 
}: FilterSectionProps) {
  return (
    <section className="bg-white border-b border-gray-100 sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center space-x-4">
          {/* Filter Icon */}
          <div className="flex items-center space-x-2 text-gray-600">
            <SlidersHorizontal className="w-4 h-4" />
            <span className="text-sm hidden sm:inline">Filtrer</span>
          </div>

          {/* Category Pills */}
          <div className="flex-1 flex items-center space-x-2 overflow-x-auto scrollbar-hide">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              
              return (
                <motion.button
                  key={category}
                  onClick={() => onCategoryChange(category)}
                  className={`relative px-4 py-2 rounded-full whitespace-nowrap text-sm transition-all ${
                    isActive 
                      ? "text-white" 
                      : "text-gray-600 hover:bg-[#E6E9F0]"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategory"
                      className="absolute inset-0 bg-[#0056b3] rounded-full"
                      transition={{ type: "spring", duration: 0.3 }}
                    />
                  )}
                  <span className="relative z-10">{category}</span>
                  
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{
                        border: "1px solid rgba(212, 175, 55, 0.3)",
                      }}
                      initial={{ scale: 1, opacity: 0 }}
                      animate={{ 
                        scale: [1, 1.1, 1],
                        opacity: [0, 1, 0]
                      }}
                      transition={{ 
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Results Count */}
          <div className="hidden md:block text-sm text-gray-500">
            <span className="text-[#0056b3]">{activeCategory}</span>
          </div>
        </div>
      </div>

      {/* Hide scrollbar on mobile */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}

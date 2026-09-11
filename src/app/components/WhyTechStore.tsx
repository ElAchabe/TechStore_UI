import { motion } from "motion/react";
import { Shield, Truck, Award, Headphones } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Paiement Sécurisé",
    description: "Transactions protégées avec la technologie la plus avancée",
  },
  {
    icon: Truck,
    title: "Livraison Rapide",
    description: "Livraison gratuite partout au Maroc sous 48h",
  },
  {
    icon: Award,
    title: "Garantie Premium",
    description: "2 ans de garantie sur tous nos produits",
  },
  {
    icon: Headphones,
    title: "Support Expert",
    description: "Assistance technique 7j/7 en français et arabe",
  },
];

export function WhyTechStore() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-[#E6E9F0]/30 overflow-hidden">
      {/* Moroccan Carpet Pattern Background */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0L100 50L50 100L0 50L50 0zM50 25L25 50L50 75L75 50L50 25z' fill='%230056b3' fill-opacity='1'/%3E%3Cpath d='M50 35L35 50L50 65L65 50L50 35z' fill='%23D4AF37' fill-opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: "100px 100px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl text-[#2C3E50] mb-4">
            Pourquoi TechStore?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Une expérience d'achat premium pensée pour le marché marocain
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <motion.div
                key={index}
                className="relative bg-white rounded-xl p-6 text-center"
                style={{
                  border: "0.5px solid rgba(0, 86, 179, 0.1)",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -4,
                  boxShadow: "0 8px 20px rgba(0, 86, 179, 0.12)",
                  transition: { duration: 0.2 }
                }}
              >
                {/* Decorative Element - Moroccan Inspired */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path
                      d="M50 0L100 50L50 100L0 50L50 0zM50 25L25 50L50 75L75 50L50 25z"
                      fill="#D4AF37"
                    />
                  </svg>
                </div>

                {/* Icon */}
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#0056b3] to-[#1a6dd4] mb-4"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className="w-7 h-7 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-[#2C3E50] mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

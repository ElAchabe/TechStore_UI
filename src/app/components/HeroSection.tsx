import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

interface HeroSectionProps {
  onExploreClick?: () => void;
  onLearnMore?: () => void;
}

export function HeroSection({ onExploreClick, onLearnMore }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-white via-[#E6E9F0]/30 to-white py-16 md:py-24 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Sphères animées dans toute la section */}
        <motion.div
          className="absolute rounded-full"
          style={{ 
            width: "120px",
            height: "120px",
            background: "radial-gradient(circle at 30% 30%, #0056b3 0%, #003d82 100%)",
            boxShadow: "0 15px 30px -5px rgba(0, 86, 179, 0.3)"
          }}
          initial={{ opacity: 0.1, x: "-20%", y: "20%" }}
          animate={{
            x: ["-20%", "80%", "-20%"],
            y: ["20%", "80%", "20%"],
            scale: [1, 1.05, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute rounded-full"
          style={{ 
            width: "180px",
            height: "180px",
            background: "radial-gradient(circle at 30% 30%, #0056b3 0%, #003d82 100%)",
            boxShadow: "0 25px 50px -5px rgba(0, 86, 179, 0.4)"
          }}
          initial={{ opacity: 0.08, x: "100%", y: "-10%" }}
          animate={{
            x: ["100%", "-30%", "100%"],
            y: ["-10%", "90%", "-10%"],
            scale: [1, 1.1, 1],
            opacity: [0.08, 0.12, 0.08]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute rounded-full"
          style={{ 
            width: "80px",
            height: "80px",
            background: "radial-gradient(circle at 30% 30%, #0056b3 0%, #003d82 100%)",
            boxShadow: "0 10px 20px -5px rgba(0, 86, 179, 0.2)"
          }}
          initial={{ opacity: 0.12, x: "-30%", y: "90%" }}
          animate={{
            x: ["-30%", "90%", "-30%"],
            y: ["90%", "-20%", "90%"],
            scale: [1, 1.2, 1],
            opacity: [0.12, 0.15, 0.12]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute rounded-full"
          style={{ 
            width: "220px",
            height: "220px",
            background: "radial-gradient(circle at 30% 30%, #0056b3 0%, #003d82 100%)",
            boxShadow: "0 30px 60px -5px rgba(0, 86, 179, 0.5)"
          }}
          initial={{ opacity: 0.06, x: "120%", y: "110%" }}
          animate={{
            x: ["120%", "-40%", "120%"],
            y: ["110%", "0%", "110%"],
            scale: [1, 1.05, 1],
            opacity: [0.06, 0.1, 0.06]
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute rounded-full"
          style={{ 
            width: "90px",
            height: "90px",
            background: "radial-gradient(circle at 30% 30%, #0056b3 0%, #003d82 100%)",
            boxShadow: "0 12px 25px -5px rgba(0, 86, 179, 0.25)"
          }}
          initial={{ opacity: 0.1, x: "150%", y: "120%" }}
          animate={{
            x: ["150%", "-20%", "150%"],
            y: ["120%", "-10%", "120%"],
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.13, 0.1]
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        
        {/* Particules flottantes */}
        <motion.div
          className="absolute w-2 h-2 rounded-full bg-[#0056b3]/10"
          style={{ top: "15%", left: "30%" }}
          animate={{
            x: [0, 20, 0],
            y: [0, 15, 0],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        
        <motion.div
          className="absolute w-3 h-3 rounded-full bg-[#0056b3]/15"
          style={{ top: "70%", right: "25%" }}
          animate={{
            x: [0, -15, 0],
            y: [0, 20, 0],
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        
        <motion.div
          className="absolute w-1.5 h-1.5 rounded-full bg-[#0056b3]/8"
          style={{ bottom: "20%", left: "40%" }}
          animate={{
            x: [0, 10, 0],
            y: [0, -15, 0],
            scale: [1, 1.4, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        
        <motion.div
          className="absolute w-2.5 h-2.5 rounded-full bg-[#0056b3]/12"
          style={{ top: "45%", right: "40%" }}
          animate={{
            x: [0, -10, 0],
            y: [0, 15, 0],
            scale: [1, 1.35, 1],
            opacity: [0.2, 0.45, 0.2],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        
        <motion.div
          className="absolute w-1 h-1 rounded-full bg-[#0056b3]/7"
          style={{ top: "30%", left: "60%" }}
          animate={{
            x: [0, 15, 0],
            y: [0, -10, 0],
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        
        {/* Lignes fluides avec gradient */}
        <motion.div
          className="absolute w-1/2 h-0.5"
          style={{ 
            background: "linear-gradient(to right, #0056b3/8 0%, #003d82/8 100%)",
            opacity: 0.08
          }}
          animate={{
            x: [0, 100, 0],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        
        <motion.div
          className="absolute w-1/3 h-0.5"
          style={{ 
            background: "linear-gradient(to right, #0056b3/6 0%, #003d82/6 100%)",
            opacity: 0.06
          }}
          animate={{
            x: [0, -80, 0],
            opacity: [0.06, 0.12, 0.06],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        
        <motion.div
          className="absolute w-1/4 h-0.5"
          style={{ 
            background: "linear-gradient(to right, #0056b3/5 0%, #003d82/5 100%)",
            opacity: 0.05
          }}
          animate={{
            x: [0, 60, 0],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        
        {/* Fond avec gradient subtil */}
        <motion.div
          className="absolute inset-0"
          style={{ 
            background: "linear-gradient(135deg, #0056b3/3 0%, #003d82/3 100%)",
            opacity: 0.02
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      {/* Éléments décoratifs - Moucharabieh */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="moucharabieh" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="2" fill="#0056b3" />
              <circle cx="60" cy="20" r="2" fill="#D4AF37" />
              <circle cx="100" cy="20" r="2" fill="#0056b3" />
              <circle cx="20" cy="60" r="2" fill="#D4AF37" />
              <circle cx="60" cy="60" r="3" fill="#0056b3" />
              <circle cx="100" cy="60" r="2" fill="#D4AF37" />
              <circle cx="20" cy="100" r="2" fill="#0056b3" />
              <circle cx="60" cy="100" r="2" fill="#D4AF37" />
              <circle cx="100" cy="100" r="2" fill="#0056b3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#moucharabieh)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-[#0056b3]/20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-sm text-[#0056b3]">Nouvelle Collection 2026</span>
          </motion.div>

          {/* Titre principal */}
          <motion.h1
            className="text-4xl md:text-6xl text-[#2C3E50] max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            La Tech Premium
            <br />
            <span className="text-[#0056b3]">Pensée pour Vous</span>
          </motion.h1>

          {/* Sous-titre */}
          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Découvrez notre sélection de produits technologiques adaptés à votre profil.
            Design minimaliste, qualité maximale.
          </motion.p>

          {/* Boutons CTA */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.button
              className="px-8 py-4 rounded-lg text-white"
              style={{
                background: "linear-gradient(135deg, #0056b3 0%, #003d82 100%)",
                boxShadow: "0 4px 16px rgba(0, 86, 179, 0.3)",
              }}
              whileHover={{ scale: 1.05, boxShadow: "0 6px 20px rgba(0, 86, 179, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              onClick={onExploreClick}
            >
              Explorer la Collection
            </motion.button>
            <motion.button
              className="px-8 py-4 rounded-lg text-[#0056b3] border border-[#0056b3]"
              style={{
                background: "linear-gradient(135deg, #E6E9F0 0%, #E6E9F0 100%)",
                boxShadow: "0 4px 16px rgba(0, 86, 179, 0.3)",
              }}
              whileHover={{ scale: 1.05, boxShadow: "0 6px 20px rgba(0, 86, 179, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              onClick={onLearnMore}
            >
              En savoir plus
            </motion.button>
          </motion.div>

          {/* Indicateurs de confiance */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-8 pt-8 text-sm text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
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
              <span>Paiement Sécurisé</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
import { motion } from "motion/react";

export type Persona = "student" | "developer" | "gamer" | "designer" | "teacher";

interface PersonaTabsProps {
  activePersona: Persona;
  onPersonaChange: (persona: Persona) => void;
}

export function PersonaTabs({ activePersona, onPersonaChange }: PersonaTabsProps) {
  const personas = [
    { id: "student", label: "Étudiant", icon: "🎓" },
    { id: "developer", label: "Développeur", icon: "💻" },
    { id: "gamer", label: "Gamer", icon: "🎮" },
    { id: "designer", label: "Designer", icon: "🎨" },
    { id: "teacher", label: "Enseignant", icon: "📚" }
  ];

  return (
    <section className="bg-white border-b border-gray-100 sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center space-x-4">
          {/* Persona Selection */}
          <div className="flex-1 flex items-center space-x-2 overflow-x-auto scrollbar-hide">
            {personas.map((persona) => {
              const isActive = activePersona === persona.id;
              
              return (
                <motion.button
                  key={persona.id}
                  onClick={() => onPersonaChange(persona.id as Persona)}
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
                      layoutId="activePersona"
                      className="absolute inset-0 bg-[#0056b3] rounded-full"
                      transition={{ type: "spring", duration: 0.3 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>{persona.icon}</span>
                    <span>{persona.label}</span>
                  </span>
                  
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
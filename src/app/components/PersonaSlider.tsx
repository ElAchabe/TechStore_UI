import { useState, useEffect } from "react";
import { motion } from "motion/react";

interface PersonaSliderProps {
  onExploreClick: () => void;
}

export function PersonaSlider({ onExploreClick }: PersonaSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Configuration des personas avec des images Unsplash valides
  const personaConfig = {
    student: {
      title: "Construit pour l'Étudiant",
      description: "Matériel fiable et abordable pour vos études et projets créatifs.",
      points: [
        "Budget étudiant",
        "Confort visuel prolongé",
        "Paiement à la livraison"
      ],
      color: "bg-blue-50",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      icon: "🎓",
      image: "https://images.unsplash.com/photo-1701576766277-c6160505581d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwc3R1ZHlpbmclMjBsYXB0b3B8ZW58MXx8fHwxNzY2NTY1NDQ3fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    developer: {
      title: "Station de Travail Optimale",
      description: "Matériel fiable compatible Mac, gain de temps garanti.",
      points: [
        "Ergonomie TMS",
        "Matériel professionnel",
        "Gain de temps"
      ],
      color: "bg-green-50",
      buttonColor: "bg-green-600 hover:bg-green-700",
      icon: "💻",
      image: "https://images.unsplash.com/photo-1566915896913-549d796d2166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBjb2RpbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY2NTQ5Njg2fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    gamer: {
      title: "Match Amusant",
      description: "Gaming gear sérieux, testé en compétition, sans excès visuel.",
      points: [
        "Performance optimale",
        "Durabilité extrême",
        "RGB désactivable"
      ],
      color: "bg-red-50",
      buttonColor: "bg-red-600 hover:bg-red-700",
      icon: "🎮",
      image: "https://images.unsplash.com/photo-1694919123854-24b74b376da1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBzZXR1cCUyMGRlc2t8ZW58MXx8fHwxNzY2NTU4MzY0fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    designer: {
      title: "Précision Chromatique",
      description: "Matériel respectant la fidélité des couleurs et confort visuel.",
      points: [
        "Fidélité des couleurs",
        "Design minimaliste",
        "Accessoires ergonomiques"
      ],
      color: "bg-orange-50",
      buttonColor: "bg-orange-600 hover:bg-orange-700",
      icon: "🎨",
      image: "https://images.unsplash.com/photo-1728281144091-b743062a9bf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHdvcmtzcGFjZSUyMGNyZWF0aXZlfGVufDF8fHx8MTc2NjU5NTkyOXww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    teacher: {
      title: "Enseignement Simplifié",
      description: "Kit de téléenseignement simple, professionnel et livré rapidement.",
      points: [
        "Simplicité d'utilisation",
        "Fiabilité absolue",
        "Livraison rapide"
      ],
      color: "bg-gray-50",
      buttonColor: "bg-gray-600 hover:bg-gray-700",
      icon: "📚",
      image: "https://images.unsplash.com/photo-1588912914074-b93851ff14b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwb25saW5lJTIwdGVhY2hpbmd8ZW58MXx8fHwxNzY2NTk1OTI5fDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  };

  const personaList = Object.keys(personaConfig);
  const currentPersona = personaConfig[personaList[currentSlide] as keyof typeof personaConfig];

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % personaList.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + personaList.length) % personaList.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const timer = setInterval(goToNextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <motion.div
        className="mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-2xl md:text-3xl text-[#2C3E50] mb-2">
          Pour Qui TechStore?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Découvrez comment notre plateforme s'adapte à vos besoins spécifiques
        </p>
      </motion.div>

      <div className="relative overflow-hidden rounded-xl shadow-md">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ 
            transform: `translateX(-${currentSlide * 100}%)`,
            width: `${personaList.length * 100}%`
          }}
        >
          {personaList.map((personaId, index) => {
            const persona = personaConfig[personaId as keyof typeof personaConfig];
            return (
              <div key={index} className="w-full flex-shrink-0 px-2">
                <div className={`h-[300px] rounded-xl overflow-hidden relative ${persona.color}`}>
                  <div className="absolute inset-0 rounded-xl overflow-hidden">
                    <img 
                      src={persona.image} 
                      alt={`Personne ${personaId}`} 
                      className="w-full h-full object-cover opacity-40"
                      onError={(e) => {
                        e.currentTarget.src = "https://via.placeholder.com/1200x500?text=TechStore+Image";
                      }}
                    />
                  </div>
                  
                  <div className="relative h-full flex flex-col p-6 md:p-8">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                        <span className="text-xl">{persona.icon}</span>
                      </div>
                      <h3 className="text-xl font-bold text-[#2C3E50]">{persona.title}</h3>
                    </div>
                    
                    <p className="text-gray-700 mb-4 md:mb-6">
                      {persona.description}
                    </p>
                    
                    <div className="space-y-3 mt-2 mb-8">
                      {persona.points.map((point, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <div className={`w-1.5 h-1.5 rounded-full mt-1.5 ${
                            index === 0 ? 'bg-blue-600' : 
                            index === 1 ? 'bg-green-600' : 
                            index === 2 ? 'bg-red-600' : 
                            index === 3 ? 'bg-orange-600' : 
                            'bg-gray-600'
                          }`} />
                          <span className="text-gray-700 text-sm md:text-base">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button 
          onClick={goToPrevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-2 shadow-sm hover:bg-gray-100 transition-colors z-10 hidden md:block"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={goToNextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-2 shadow-sm hover:bg-gray-100 transition-colors z-10 hidden md:block"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {personaList.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentSlide === index 
                  ? 'bg-[#0056b3] w-6' 
                  : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
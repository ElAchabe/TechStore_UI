export function Footer() {
  return (
    <footer className="bg-[#2C3E50] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#0056b3] to-[#003d82] rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold">TS</span>
              </div>
              <span className="text-xl">TechStore</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Votre partenaire tech premium au Maroc. Design minimaliste, qualité maximale.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4">Produits</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer transition-colors">Ordinateurs</li>
              <li className="hover:text-white cursor-pointer transition-colors">Smartphones</li>
              <li className="hover:text-white cursor-pointer transition-colors">Audio</li>
              <li className="hover:text-white cursor-pointer transition-colors">Accessoires</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
              <li className="hover:text-white cursor-pointer transition-colors">Garantie</li>
              <li className="hover:text-white cursor-pointer transition-colors">Livraison</li>
              <li className="hover:text-white cursor-pointer transition-colors">Retours</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Légal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer transition-colors">CGV</li>
              <li className="hover:text-white cursor-pointer transition-colors">Confidentialité</li>
              <li className="hover:text-white cursor-pointer transition-colors">Cookies</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>© 2026 TechStore. Design minimaliste pour le marché marocain.</p>
        </div>
      </div>
    </footer>
  );
}

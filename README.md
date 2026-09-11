
# Prototype TechStore Minimaliste

Ce projet est un prototype d'application e-commerce minimaliste (TechStore) conçu sous forme de Single Page Application (SPA). Le design original du projet est accessible sur https://www.figma.com/design/pYGuCDbSCg9oqReEcKTVkf/Prototype-TechStore-Minimaliste

---

## Technologies utilisées

L'application s'appuie sur une pile technique moderne et performante :
- **React** : Framework principal pour l'interface utilisateur.
- **React Router** : Gestion de la navigation côté client et du routage applicatif.
- **Tailwind CSS (v4)** : Framework utilitaire pour un stylisage rapide et adaptatif.
- **Context API** : Gestion globale et centralisée de l'état du panier d'achats.
- **Motion (Framer Motion)** : Animations fluides des composants et transitions.
- **Shadcn/ui & Radix UI** : Base de composants UI accessibles et modulaires (Dialog, Sheet, Tabs, Radio Group, etc.).

---

## Structure du site et Routage

Le routage est configuré de manière centralisée dans `/src/app/routes.tsx` via `createBrowserRouter`. L'arborescence des pages est structurée ainsi :

- **`/` (Layout global)** : Composant structurel qui englobe toutes les pages et fournit les éléments persistants (En-tête, Panier flottant, Tiroir coulissant).
  - **`Index` (Page d'accueil)** : Point d'entrée présentant la section Hero, un slider de personas et les propositions de valeur du magasin.
  - **`/store` (Boutique)** : Page principale des produits équipée d'une barre latérale de filtrage multicritères.
  - **`/product/:id` (Détails produit)** : Vue détaillée pour la consultation d'un produit spécifique.

---

## Gestion de l'État (State Management)

1. **Global (Panier)** : Le composant `CartProvider` enveloppe l'ensemble de l'application pour distribuer l'état en temps réel du panier (articles, calcul du total, quantité) à n'importe quel composant via le hook personnalisé `useCart`.
2. **Local & URL** : La page de la boutique (`StorePage`) synchronise ses filtres avec les paramètres de recherche de l'URL (`URL Search Parameters`), permettant de partager et de mettre en favoris des configurations de filtrage spécifiques.

---

## Composants Principaux

### Pages (`/src/app/pages`)
- **HomePage** : Section Hero visuelle et propositions de valeur.
- **StorePage** : Grille de produits dynamique dotée de filtres par persona, catégorie et tranche de prix.
- **ProductPage** : Fiche produit détaillée.

### Composants structurels (`/src/app/components`)
- **Header & Footer** : Navigation principale et pied de page.
- **FilterSection** : Barre latérale interactive et pilules de catégories pour affiner la recherche.
- **CartDrawer & StickyCart** : Menu coulissant de gestion du panier et indicateur flottant optimisé pour les interactions mobiles.

---

## Installation et Lancement

Suivez ces étapes pour exécuter le prototype localement sur votre machine :

1. Installez les dépendances du projet :
   ```bash
   npm i

````

2.  Lancez le serveur de développement :
    ``` bash
    npm run dev
    
    ```

-----

## Attributions

  - Les composants d'interface intègrent des éléments de [shadcn/ui](https://ui.shadcn.com/) sous licence MIT.
  - Les photographies et visuels d'illustration proviennent d'ouvrages libres de droits sur [Unsplash](https://unsplash.com).

<!-- end list -->

``` 



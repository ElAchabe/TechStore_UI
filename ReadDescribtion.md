# ReadDescription

## Website Structure

The application is structured as a Single Page Application (SPA) using React Router for navigation.

### Routing Configuration

The routing is defined in `/src/app/routes.tsx` using `createBrowserRouter`.

* **/**: The root path, which renders the `Layout` component.

  * **/** (Index): Renders `HomePage`.
  * **/store**: Renders `StorePage`.
  * **/product/:id**: Renders `ProductPage` for individual product details.

### Layout

The `Layout` component (`/src/app/layout.tsx`) wraps all pages and provides persistent elements:

* **Header**: Navigation and branding.
* **StickyCart**: A floating summary of the cart state.
* **CartDrawer**: A slide-out drawer for managing cart items.
* **Outlet**: Where the page content is rendered.

## Configuration

### Technologies

* **React**: Core framework.
* **React Router**: For client-side routing.
* **Tailwind CSS**: For utility-first styling.
* **Context API**: `CartContext` is used for global state management of the shopping cart.

### State Management

* **CartProvider**: Wraps the application to provide cart state (items, total, count) to any component.
* **URL State**: The `StorePage` uses URL search parameters to manage filter state, allowing for shareable and bookmarkable filter configurations.

## Used Components

### Pages (`/src/app/pages`)

* **HomePage**: The landing page featuring a Hero section, Persona slider, and value propositions.
* **StorePage**: The main shopping area with product listings and a sidebar for filtering.
* **ProductPage**: Detailed view of a specific product.

### Components (`/src/app/components`)

* **HeroSection**: Main visual entry point with call-to-actions.
* **PersonaSlider**: Interactive slider showcasing different user personas.
* **ProductCard**: Reusable component to display product information (image, price, title).
* **FilterSection**: Sidebar component for filtering products by category, price, etc.
* **WhyTechStore**: Section highlighting the benefits of the store.
* **Header**: Main navigation bar.
* **Footer**: Application footer.
* **CartDrawer**: Slide-out panel for cart management.
* **StickyCart**: Floating cart indicator.


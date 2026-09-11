import { Outlet } from "react-router";
import { Header } from "./components/Header";
import { StickyCart } from "./components/StickyCart";
import { CartDrawer } from "./components/CartDrawer";
import { useCart } from "./context/CartContext";

export function Layout() {
  const { 
    cartItemCount, 
    cartTotal, 
    isCartOpen, 
    setIsCartOpen, 
    cart, 
    removeFromCart, 
    updateQuantity, 
    clearCart 
  } = useCart();

  // Convert cart for CartDrawer which expects a flat list of products for now, or adapt CartDrawer
  // Wait, looking at CartDrawer code:
  // interface CartDrawerProps { items: Product[]; ... }
  // And it groups them internally.
  // But CartContext `cart` is { product: Product, quantity: number }[]
  // So I need to flatten it back to what CartDrawer expects, OR update CartDrawer to accept CartItem[].
  // CartDrawer groups internally: `const groupedItems = items.reduce...`
  // This means CartDrawer expects an array where the same product appears multiple times.
  // This is inefficient but compatible with how it was written.
  // Let's adapt the data here to match CartDrawer's expectation.
  
  const flatCartItems = cart.flatMap((item) =>
    Array(item.quantity).fill(item.product)
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <Outlet />
      </main>

      <StickyCart 
        itemCount={cartItemCount}
        totalPrice={cartTotal}
        onViewCart={() => setIsCartOpen(true)}
      />

      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={flatCartItems}
        onRemoveItem={removeFromCart}
        onUpdateQuantity={updateQuantity}
        onClearCart={clearCart}
      />
    </div>
  );
}

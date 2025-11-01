import { Coffee, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import CartSheet from "./CartSheet";

const Navbar = () => {
  const { totalItems } = useCart();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <Coffee className="h-8 w-8 text-accent transition-transform group-hover:rotate-12" />
            <span className="text-2xl font-bold text-foreground">
              Global Coffee <span className="text-accent">Hub</span>
            </span>
          </Link>
          
          <div className="flex items-center gap-6">
            <Link to="/" className="text-foreground hover:text-accent transition-colors">
              Home
            </Link>
            <Link to="/products" className="text-foreground hover:text-accent transition-colors">
              Shop Coffee
            </Link>
            <CartSheet>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center font-semibold">
                    {totalItems}
                  </span>
                )}
              </Button>
            </CartSheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

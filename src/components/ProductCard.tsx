import { Button } from "./ui/button";
import { ShoppingCart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/hooks/use-toast";

interface ProductCardProps {
  id: number;
  name: string;
  country: string;
  flag: string;
  price: number;
  image: string;
  roastLevel: string;
  rating: number;
  category: string;
}

const ProductCard = ({ id, name, country, flag, price, image, roastLevel, rating, category }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, name, country, flag, price, image, roastLevel, category });
    toast({
      title: "Added to cart!",
      description: `${name} has been added to your cart.`,
    });
  };

  return (
    <div className="group bg-card rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-border hover:border-accent/50">
      {/* Image Container */}
      <Link to={`/product/${id}`} className="block relative aspect-square overflow-hidden bg-secondary">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Country Badge */}
        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-card/95 backdrop-blur-sm border border-border shadow-sm flex items-center gap-2">
          <span className="text-xl">{flag}</span>
          <span className="text-sm font-medium text-foreground">{country}</span>
        </div>
        {/* Category Badge */}
        <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-accent/90 backdrop-blur-sm border border-accent">
          <span className="text-xs font-semibold text-accent-foreground">{category}</span>
        </div>
      </Link>

      {/* Content */}
      <div className="p-5 space-y-3">
        <Link to={`/product/${id}`} className="block">
          <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors line-clamp-1">
            {name}
          </h3>
        </Link>

        {/* Rating & Roast Level */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-accent text-accent" />
            <span className="font-semibold text-foreground">{rating}</span>
            <span className="text-muted-foreground">(250)</span>
          </div>
          <span className="text-muted-foreground">{roastLevel}</span>
        </div>

        {/* Price & Add to Cart */}
        <div className="flex items-center justify-between pt-2">
          <div>
            <span className="text-2xl font-bold text-foreground">${price}</span>
            <span className="text-sm text-muted-foreground ml-1">/250g</span>
          </div>
          <Button variant="coffee" size="sm" className="gap-1" onClick={handleAddToCart}>
            <ShoppingCart className="h-4 w-4" />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

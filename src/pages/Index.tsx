import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe, Leaf, Shield, Truck } from "lucide-react";

import ethiopianImage from "@/assets/coffee-ethiopian.jpg";
import brazilianImage from "@/assets/coffee-brazilian.jpg";
import colombianImage from "@/assets/coffee-colombian.jpg";

const FEATURED_PRODUCTS = [
  {
    id: 1,
    name: "Ethiopian Yirgacheffe",
    country: "Ethiopia",
    flag: "🇪🇹",
    price: 24.99,
    image: ethiopianImage,
    roastLevel: "Light",
    rating: 4.8,
    category: "Arabica"
  },
  {
    id: 2,
    name: "Brazilian Santos",
    country: "Brazil",
    flag: "🇧🇷",
    price: 19.99,
    image: brazilianImage,
    roastLevel: "Medium",
    rating: 4.6,
    category: "Arabica"
  },
  {
    id: 3,
    name: "Colombian Supremo",
    country: "Colombia",
    flag: "🇨🇴",
    price: 22.99,
    image: colombianImage,
    roastLevel: "Medium-Dark",
    rating: 4.9,
    category: "Arabica"
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />

      {/* Features Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-3 p-6 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10">
                <Globe className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold text-lg text-foreground">Global Sourcing</h3>
              <p className="text-sm text-muted-foreground">Premium beans from 20+ countries worldwide</p>
            </div>

            <div className="text-center space-y-3 p-6 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10">
                <Leaf className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold text-lg text-foreground">100% Organic</h3>
              <p className="text-sm text-muted-foreground">Sustainably grown and ethically sourced</p>
            </div>

            <div className="text-center space-y-3 p-6 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10">
                <Shield className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold text-lg text-foreground">Quality Assured</h3>
              <p className="text-sm text-muted-foreground">Every batch tested for perfection</p>
            </div>

            <div className="text-center space-y-3 p-6 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10">
                <Truck className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold text-lg text-foreground">Fast Delivery</h3>
              <p className="text-sm text-muted-foreground">Fresh coffee delivered to your door</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Featured <span className="text-accent">Coffees</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Handpicked selections from our premium collection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {FEATURED_PRODUCTS.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/products">
              <Button variant="hero" size="lg">
                View All Coffees
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-accent blur-3xl" />
          <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-accent blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Elevate Your Coffee Experience?
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Join thousands of coffee lovers who trust us for their daily brew
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/products">
                <Button variant="hero" size="lg">
                  Start Shopping
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

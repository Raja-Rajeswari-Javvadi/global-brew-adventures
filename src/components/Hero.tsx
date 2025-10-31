import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-coffee.jpg";
import { Globe, Coffee } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-primary/90" />
      </div>
      
      {/* Floating Coffee Beans Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <Coffee className="absolute top-20 left-10 text-accent/20 h-12 w-12 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }} />
        <Coffee className="absolute top-40 right-20 text-accent/20 h-8 w-8 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }} />
        <Coffee className="absolute bottom-32 left-1/4 text-accent/20 h-10 w-10 animate-bounce" style={{ animationDelay: '2s', animationDuration: '3.5s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 backdrop-blur-sm">
            <Globe className="h-4 w-4 text-accent" />
            <span className="text-accent font-semibold">Premium Coffee from Around the World</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-tight">
            Taste the World<br />
            <span className="text-accent">in Every Cup</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto">
            Freshly sourced premium coffee powders from India, Ethiopia, Brazil, Colombia, and beyond—delivered to your doorstep.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link to="/products">
              <Button variant="hero" size="lg" className="w-full sm:w-auto">
                <Coffee className="mr-2 h-5 w-5" />
                Explore Coffees
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="w-full sm:w-auto bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground">
              <Globe className="mr-2 h-5 w-5" />
              Coffee Origins
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent">20+</div>
              <div className="text-primary-foreground/80 mt-1">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent">100+</div>
              <div className="text-primary-foreground/80 mt-1">Premium Blends</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent">5k+</div>
              <div className="text-primary-foreground/80 mt-1">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/50 flex items-start justify-center p-2">
          <div className="w-1 h-3 rounded-full bg-primary-foreground/50" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

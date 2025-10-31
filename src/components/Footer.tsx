import { Coffee, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Coffee className="h-8 w-8 text-accent" />
              <span className="text-xl font-bold">
                Global Coffee <span className="text-accent">Hub</span>
              </span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Bringing the world's finest coffee to your doorstep, one cup at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Shop Coffee
                </Link>
              </li>
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Coffee Origins
                </Link>
              </li>
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Brew Guides
                </Link>
              </li>
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-primary-foreground/80 hover:text-accent transition-colors cursor-pointer">Arabica</li>
              <li className="text-primary-foreground/80 hover:text-accent transition-colors cursor-pointer">Robusta</li>
              <li className="text-primary-foreground/80 hover:text-accent transition-colors cursor-pointer">Blends</li>
              <li className="text-primary-foreground/80 hover:text-accent transition-colors cursor-pointer">Espresso Roast</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <Mail className="h-4 w-4 text-accent" />
                hello@coffeehub.com
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <Phone className="h-4 w-4 text-accent" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <MapPin className="h-4 w-4 text-accent" />
                123 Coffee St, Brew City
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/70">
          <p>&copy; 2025 Global Coffee Hub. All rights reserved. Crafted with ☕ and love.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

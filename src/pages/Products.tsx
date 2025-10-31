import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

import ethiopianImage from "@/assets/coffee-ethiopian.jpg";
import brazilianImage from "@/assets/coffee-brazilian.jpg";
import colombianImage from "@/assets/coffee-colombian.jpg";
import indianImage from "@/assets/coffee-indian.jpg";

const PRODUCTS = [
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
  {
    id: 4,
    name: "South Indian Filter",
    country: "India",
    flag: "🇮🇳",
    price: 18.99,
    image: indianImage,
    roastLevel: "Dark",
    rating: 4.7,
    category: "Blend"
  },
  {
    id: 5,
    name: "Ethiopian Sidamo",
    country: "Ethiopia",
    flag: "🇪🇹",
    price: 23.99,
    image: ethiopianImage,
    roastLevel: "Light-Medium",
    rating: 4.7,
    category: "Arabica"
  },
  {
    id: 6,
    name: "Brazilian Cerrado",
    country: "Brazil",
    flag: "🇧🇷",
    price: 21.99,
    image: brazilianImage,
    roastLevel: "Medium",
    rating: 4.5,
    category: "Robusta"
  },
];

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [selectedRoast, setSelectedRoast] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.country.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCountry = selectedCountry === "all" || product.country === selectedCountry;
    const matchesRoast = selectedRoast === "all" || product.roastLevel === selectedRoast;
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    
    return matchesSearch && matchesCountry && matchesRoast && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Explore Our <span className="text-accent">Coffee Collection</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover premium coffee from around the globe, carefully selected for your perfect brew
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-card border-y border-border sticky top-[73px] z-40 backdrop-blur-sm bg-card/95">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search coffee..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-background"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3">
              <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                <SelectTrigger className="w-[140px] bg-background">
                  <SelectValue placeholder="Country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Countries</SelectItem>
                  <SelectItem value="Ethiopia">🇪🇹 Ethiopia</SelectItem>
                  <SelectItem value="Brazil">🇧🇷 Brazil</SelectItem>
                  <SelectItem value="Colombia">🇨🇴 Colombia</SelectItem>
                  <SelectItem value="India">🇮🇳 India</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedRoast} onValueChange={setSelectedRoast}>
                <SelectTrigger className="w-[140px] bg-background">
                  <SelectValue placeholder="Roast" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Roasts</SelectItem>
                  <SelectItem value="Light">Light</SelectItem>
                  <SelectItem value="Light-Medium">Light-Medium</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="Medium-Dark">Medium-Dark</SelectItem>
                  <SelectItem value="Dark">Dark</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-[140px] bg-background">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="Arabica">Arabica</SelectItem>
                  <SelectItem value="Robusta">Robusta</SelectItem>
                  <SelectItem value="Blend">Blend</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" size="icon">
                <SlidersHorizontal className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-muted-foreground">
            Showing {filteredProducts.length} of {PRODUCTS.length} products
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">No products found matching your filters</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCountry("all");
                  setSelectedRoast("all");
                  setSelectedCategory("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;

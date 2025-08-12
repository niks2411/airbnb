import { useSearchParams, useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";
import { Filter, Map, ArrowLeft, SlidersHorizontal, Grid3X3, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import PropertyCard from "@/components/PropertyCard";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { popularHomesGurgaon, gautamBuddhaNagar } from "@/data/properties";
import { useToast } from "@/hooks/use-toast";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('recommended');
  const [filters, setFilters] = useState({
    minPrice: '',
    maxPrice: '',
    propertyType: 'all',
    minRating: 'any'
  });
  
  const location = searchParams.get("location") || "Gurgaon";
  const checkIn = searchParams.get("checkIn");
  const checkOut = searchParams.get("checkOut");
  const guests = searchParams.get("guests");

  // Filter and sort properties
  const allProperties = [...popularHomesGurgaon, ...gautamBuddhaNagar];
  
  const filteredProperties = useMemo(() => {
    let filtered = allProperties.filter(property => {
      // Location filter
      const matchesLocation = property.location.toLowerCase().includes(location.toLowerCase());
      
      // Price filter
      const matchesMinPrice = !filters.minPrice || property.price >= parseInt(filters.minPrice);
      const matchesMaxPrice = !filters.maxPrice || property.price <= parseInt(filters.maxPrice);
      
      // Property type filter
      const matchesType = filters.propertyType === 'all' || 
        property.location.toLowerCase().includes(filters.propertyType.toLowerCase());
      
      // Rating filter
      const matchesRating = filters.minRating === 'any' || 
        property.rating >= parseFloat(filters.minRating);
      
      return matchesLocation && matchesMinPrice && matchesMaxPrice && matchesType && matchesRating;
    });
    
    // Sort properties
    switch (sortBy) {
      case 'price-low':
        return filtered.sort((a, b) => a.price - b.price);
      case 'price-high':
        return filtered.sort((a, b) => b.price - a.price);
      case 'rating':
        return filtered.sort((a, b) => b.rating - a.rating);
      default:
        return filtered;
    }
  }, [allProperties, location, filters, sortBy]);
  
  const handleMapView = () => {
    toast({
      title: "Map view coming soon!",
      description: "Interactive map functionality will be available in a future update.",
    });
  };
  
  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };
  
  const clearFilters = () => {
    setFilters({
      minPrice: '',
      maxPrice: '',
      propertyType: 'all',
      minRating: 'any'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Search Controls */}
      <div className="bg-background border-b border-border px-6 py-4">
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2"
            >
              <Filter className="h-4 w-4" />
              Filters
            </Button>
            <Button variant="outline" onClick={handleMapView} className="flex items-center gap-2">
              <Map className="h-4 w-4" />
              Show map
            </Button>
            <div className="flex items-center border border-border rounded-lg">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="rounded-r-none"
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="rounded-l-none"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-6 py-8">
        {/* Search Summary and Sort */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-semibold mb-2">
                {filteredProperties.length} stays in {location}
              </h1>
              <div className="flex items-center gap-4 text-muted-foreground">
                {checkIn && checkOut && (
                  <span>{checkIn} - {checkOut}</span>
                )}
                {guests && (
                  <span>{guests} guest{parseInt(guests) > 1 ? 's' : ''}</span>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium">Sort by:</label>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-border rounded-md bg-background"
              >
                <option value="recommended">Recommended</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <Card className="p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <SlidersHorizontal className="h-5 w-5" />
                Filters
              </h3>
              <Button variant="outline" size="sm" onClick={clearFilters}>
                Clear all
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Price range (₹)</label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    value={filters.minPrice}
                    onChange={(e) => handleFilterChange('minPrice', e.target.value)}
                    className="w-full px-3 py-2 border border-border rounded-md bg-background"
                  />
                  <span className="text-muted-foreground">-</span>
                  <input
                    type="number"
                    placeholder="Max"
                    value={filters.maxPrice}
                    onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                    className="w-full px-3 py-2 border border-border rounded-md bg-background"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Property type</label>
                <select 
                  value={filters.propertyType}
                  onChange={(e) => handleFilterChange('propertyType', e.target.value)}
                  className="w-full px-3 py-2 border border-border rounded-md bg-background"
                >
                  <option value="all">All types</option>
                  <option value="flat">Apartment/Flat</option>
                  <option value="home">House/Home</option>
                  <option value="studio">Studio</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Minimum rating</label>
                <select 
                  value={filters.minRating}
                  onChange={(e) => handleFilterChange('minRating', e.target.value)}
                  className="w-full px-3 py-2 border border-border rounded-md bg-background"
                >
                  <option value="any">Any rating</option>
                  <option value="4.5">4.5+ stars</option>
                  <option value="4.0">4.0+ stars</option>
                  <option value="3.5">3.5+ stars</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Quick filters</label>
                <div className="space-y-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => handleFilterChange('minRating', '4.5')}
                    className="w-full justify-start"
                  >
                    Top rated
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => { handleFilterChange('maxPrice', '8000'); }}
                    className="w-full justify-start"
                  >
                    Budget friendly
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* Results */}
        <div className={viewMode === 'grid' 
          ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          : "space-y-4"
        }>
          {filteredProperties.map((property) => (
            <div key={property.id}>
              <PropertyCard {...property} />
            </div>
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <Card className="text-center py-16">
            <div className="max-w-md mx-auto">
              <h3 className="text-lg font-semibold mb-2">No properties found</h3>
              <p className="text-muted-foreground mb-6">
                We couldn't find any properties matching your criteria. Try adjusting your filters or search in a different location.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="outline" onClick={clearFilters}>
                  Clear filters
                </Button>
                <Button onClick={() => navigate('/')}>
                  Back to home
                </Button>
              </div>
            </div>
          </Card>
        )}
        
        {/* Load More */}
        {filteredProperties.length > 0 && filteredProperties.length >= 12 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" onClick={() => {
              toast({
                title: "Loading more properties...",
                description: "This feature will load additional properties in a real application.",
              });
            }}>
              Load more properties
            </Button>
          </div>
        )}
      </div>
      <ScrollToTop />
    </div>
  );
};

export default SearchResults;
import { useSearchParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Filter, Map, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import PropertyCard from "@/components/PropertyCard";
import Header from "@/components/Header";
import { popularHomesGurgaon, gautamBuddhaNagar } from "@/data/properties";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [showFilters, setShowFilters] = useState(false);
  
  const location = searchParams.get("location") || "Gurgaon";
  const checkIn = searchParams.get("checkIn");
  const checkOut = searchParams.get("checkOut");
  const guests = searchParams.get("guests");

  // Filter properties based on search location
  const allProperties = [...popularHomesGurgaon, ...gautamBuddhaNagar];
  const filteredProperties = allProperties.filter(property =>
    property.location.toLowerCase().includes(location.toLowerCase())
  );

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
            <Button variant="outline" className="flex items-center gap-2">
              <Map className="h-4 w-4" />
              Show map
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-6 py-8">
        {/* Search Summary */}
        <div className="mb-8">
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

        {/* Filters Panel */}
        {showFilters && (
          <div className="bg-card border border-border rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold mb-4">Filters</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Price range</label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    className="w-full px-3 py-2 border border-border rounded-md"
                  />
                  <span>-</span>
                  <input
                    type="number"
                    placeholder="Max"
                    className="w-full px-3 py-2 border border-border rounded-md"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Property type</label>
                <select className="w-full px-3 py-2 border border-border rounded-md">
                  <option>All types</option>
                  <option>Apartment</option>
                  <option>House</option>
                  <option>Studio</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Minimum rating</label>
                <select className="w-full px-3 py-2 border border-border rounded-md">
                  <option>Any rating</option>
                  <option>4.5+</option>
                  <option>4.0+</option>
                  <option>3.5+</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Results Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProperties.map((property) => (
            <div
              key={property.id}
              onClick={() => navigate(`/property/${property.id}`)}
              className="cursor-pointer"
            >
              <PropertyCard {...property} />
            </div>
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-lg font-semibold mb-2">No properties found</h3>
            <p className="text-muted-foreground">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
import { useRef } from "react";
import PropertyCard from "./PropertyCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const PropertySection = ({ title, properties }) => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };
  return (
    <section className="max-w-screen-2xl mx-auto px-6 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-foreground">{title}</h2>
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full h-8 w-8"
            onClick={scrollLeft}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full h-8 w-8"
            onClick={scrollRight}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div 
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {properties.map((property) => (
          <div key={property.id} className="flex-none w-64">
            <PropertyCard {...property} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PropertySection;
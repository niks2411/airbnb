import PropertyCard from "./PropertyCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Property {
  id: string;
  image: string;
  location: string;
  title: string;
  price: number;
  rating: number;
  nights: number;
  isFavorite?: boolean;
}

interface PropertySectionProps {
  title: string;
  properties: Property[];
}

const PropertySection = ({ title, properties }: PropertySectionProps) => {
  return (
    <section className="max-w-screen-2xl mx-auto px-6 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-foreground">{title}</h2>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" className="rounded-full h-8 w-8">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full h-8 w-8">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {properties.map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </div>
    </section>
  );
};

export default PropertySection;
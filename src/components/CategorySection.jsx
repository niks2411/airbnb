import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const categories = [
  {
    id: "beachfront",
    title: "Beachfront",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&h=200&fit=crop",
    description: "Wake up to ocean views"
  },
  {
    id: "cabins",
    title: "Cabins",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300&h=200&fit=crop",
    description: "Cozy retreats in nature"
  },
  {
    id: "trending",
    title: "Trending",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=300&h=200&fit=crop",
    description: "Popular destinations"
  },
  {
    id: "countryside",
    title: "Countryside",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=300&h=200&fit=crop",
    description: "Peaceful rural escapes"
  },
  {
    id: "luxe",
    title: "Luxe",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=300&h=200&fit=crop",
    description: "High-end stays"
  },
  {
    id: "amazing-pools",
    title: "Amazing pools",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=300&h=200&fit=crop",
    description: "Stunning pool properties"
  }
];

const CategoryCard = ({ category }) => {
  const navigate = useNavigate();

  const handleCategoryClick = () => {
    // Navigate to search results with category filter
    navigate(`/search?category=${category.id}&location=India`);
  };

  return (
    <Card 
      className="group cursor-pointer overflow-hidden hover:shadow-lg transition-shadow duration-300"
      onClick={handleCategoryClick}
    >
      <div className="relative">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={category.image}
            alt={category.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-lg font-semibold mb-1">{category.title}</h3>
          <p className="text-sm opacity-90">{category.description}</p>
        </div>
      </div>
    </Card>
  );
};

const CategorySection = () => {
  return (
    <section className="max-w-screen-2xl mx-auto px-6 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-2">Browse by category</h2>
        <p className="text-muted-foreground">Find your perfect stay by exploring different property types</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>

      <div className="text-center mt-8">
        <Button 
          variant="outline" 
          onClick={() => window.location.href = "/search?location=India"}
          className="px-8"
        >
          Explore all categories
        </Button>
      </div>
    </section>
  );
};

export default CategorySection;
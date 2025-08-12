import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PropertyCardProps {
  id: string;
  image: string;
  location: string;
  title: string;
  price: number;
  rating: number;
  nights: number;
  isFavorite?: boolean;
}

const PropertyCard = ({
  id,
  image,
  location,
  title,
  price,
  rating,
  nights,
  isFavorite = false,
}: PropertyCardProps) => {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(isFavorite);

  const handleCardClick = () => {
    navigate(`/property/${id}`);
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click
    setIsLiked(!isLiked);
  };
  return (
    <div className="group cursor-pointer" onClick={handleCardClick}>
      <div className="relative">
        <div className="aspect-square overflow-hidden rounded-xl bg-muted">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleFavoriteClick}
          className="absolute top-3 right-3 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90"
        >
          <Heart
            className={`h-4 w-4 transition-colors ${
              isLiked ? "fill-red-500 text-red-500" : "text-foreground hover:text-red-500"
            }`}
          />
        </Button>
        <div className="absolute top-3 left-3 px-2 py-1 bg-background/90 backdrop-blur-sm rounded-md">
          <span className="text-xs font-medium">Guest favourite</span>
        </div>
      </div>

      <div className="mt-3 space-y-1">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-foreground truncate">{title}</h3>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-foreground text-foreground" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">{location}</p>
        <div className="flex items-baseline gap-1">
          <span className="font-semibold text-foreground">₹{price.toLocaleString()}</span>
          <span className="text-sm text-muted-foreground">for {nights} nights</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
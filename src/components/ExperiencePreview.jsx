import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, Clock } from "lucide-react";

const featuredExperiences = [
  {
    id: "exp1",
    title: "Delhi Food Walking Tour",
    host: "Priya",
    duration: "3 hours",
    price: 2500,
    rating: 4.9,
    reviews: 127,
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop",
    location: "Old Delhi"
  },
  {
    id: "exp2", 
    title: "Sunrise Yoga in Rishikesh",
    host: "Amit",
    duration: "2 hours",
    price: 1800,
    rating: 4.8,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    location: "Rishikesh"
  },
  {
    id: "exp3",
    title: "Rajasthani Cooking Class",
    host: "Meera",
    duration: "4 hours",
    price: 3200,
    rating: 4.9,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
    location: "Jaipur"
  }
];

const ExperiencePreviewCard = ({ experience }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/experiences");
  };

  return (
    <Card className="group cursor-pointer overflow-hidden" onClick={handleCardClick}>
      <div className="relative">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={experience.image}
            alt={experience.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="absolute top-3 left-3 px-2 py-1 bg-background/90 backdrop-blur-sm rounded-md">
          <span className="text-xs font-medium">Experience</span>
        </div>
      </div>

      <div className="p-4 space-y-2">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="font-semibold text-foreground line-clamp-2">{experience.title}</h3>
            <p className="text-sm text-muted-foreground">Hosted by {experience.host}</p>
          </div>
          <div className="flex items-center gap-1 ml-2">
            <Star className="h-4 w-4 fill-foreground text-foreground" />
            <span className="text-sm font-medium">{experience.rating}</span>
          </div>
        </div>

        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>{experience.duration}</span>
        </div>

        <div className="flex items-baseline gap-1">
          <span className="font-semibold text-foreground">₹{experience.price.toLocaleString()}</span>
          <span className="text-sm text-muted-foreground">per person</span>
        </div>
      </div>
    </Card>
  );
};

const ExperiencePreview = () => {
  const navigate = useNavigate();

  return (
    <section className="max-w-screen-2xl mx-auto px-6 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-2">Discover Experiences</h2>
          <p className="text-muted-foreground">Unique activities hosted by local experts</p>
        </div>
        <Button 
          variant="outline"
          onClick={() => navigate("/experiences")}
          className="px-6"
        >
          View all experiences
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredExperiences.map((experience) => (
          <ExperiencePreviewCard key={experience.id} experience={experience} />
        ))}
      </div>
    </section>
  );
};

export default ExperiencePreview;
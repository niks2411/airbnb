import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Star, Clock, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const experiences = [
  {
    id: "exp1",
    title: "Delhi Food Walking Tour",
    host: "Priya",
    duration: "3 hours",
    groupSize: "Up to 8 guests",
    price: 2500,
    rating: 4.9,
    reviews: 127,
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop",
    location: "Old Delhi",
    description: "Discover the authentic flavors of Delhi's street food scene"
  },
  {
    id: "exp2", 
    title: "Sunrise Yoga in Rishikesh",
    host: "Amit",
    duration: "2 hours",
    groupSize: "Up to 12 guests",
    price: 1800,
    rating: 4.8,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    location: "Rishikesh",
    description: "Start your day with peaceful yoga by the Ganges river"
  },
  {
    id: "exp3",
    title: "Rajasthani Cooking Class",
    host: "Meera",
    duration: "4 hours", 
    groupSize: "Up to 6 guests",
    price: 3200,
    rating: 4.9,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
    location: "Jaipur",
    description: "Learn to cook traditional Rajasthani dishes with a local family"
  },
  {
    id: "exp4",
    title: "Mumbai Street Art Tour",
    host: "Rohan",
    duration: "3.5 hours",
    groupSize: "Up to 10 guests", 
    price: 2200,
    rating: 4.7,
    reviews: 94,
    image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=400&h=300&fit=crop",
    location: "Mumbai",
    description: "Explore Mumbai's vibrant street art and graffiti culture"
  },
  {
    id: "exp5",
    title: "Kerala Backwater Cruise",
    host: "Suresh",
    duration: "6 hours",
    groupSize: "Up to 15 guests",
    price: 4500,
    rating: 4.8,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&h=300&fit=crop",
    location: "Alleppey",
    description: "Peaceful cruise through Kerala's famous backwaters"
  },
  {
    id: "exp6",
    title: "Goa Spice Plantation Tour",
    host: "Maria",
    duration: "5 hours",
    groupSize: "Up to 12 guests",
    price: 3800,
    rating: 4.6,
    reviews: 78,
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=300&fit=crop",
    location: "Goa",
    description: "Discover exotic spices and enjoy traditional Goan lunch"
  }
];

const ExperienceCard = ({ experience }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    // For demo purposes, just show an alert
    alert(`Experience "${experience.title}" selected! This would navigate to the experience details page.`);
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

      <div className="p-4 space-y-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="font-semibold text-foreground line-clamp-2">{experience.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">Hosted by {experience.host}</p>
          </div>
          <div className="flex items-center gap-1 ml-2">
            <Star className="h-4 w-4 fill-foreground text-foreground" />
            <span className="text-sm font-medium">{experience.rating}</span>
            <span className="text-sm text-muted-foreground">({experience.reviews})</span>
          </div>
        </div>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{experience.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{experience.groupSize}</span>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <MapPin className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">{experience.location}</span>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2">{experience.description}</p>

        <div className="flex items-baseline gap-1 pt-2">
          <span className="font-semibold text-foreground">₹{experience.price.toLocaleString()}</span>
          <span className="text-sm text-muted-foreground">per person</span>
        </div>
      </div>
    </Card>
  );
};

const Experiences = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Experiences" },
    { id: "food", label: "Food & Drink" },
    { id: "culture", label: "Arts & Culture" },
    { id: "nature", label: "Nature & Outdoors" },
    { id: "wellness", label: "Wellness" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="max-w-screen-2xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Unforgettable experiences</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover unique activities led by local hosts. From cooking classes to adventure tours,
            create memories that will last a lifetime.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="rounded-full"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Show more experiences
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Experiences;
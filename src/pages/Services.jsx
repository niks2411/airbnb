import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Star, Clock, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const services = [
  {
    id: "srv1",
    title: "Professional Photography",
    provider: "PhotoPro Studios",
    category: "Photography",
    duration: "2-4 hours",
    price: 8500,
    rating: 4.9,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1554048612-b6a482b224b8?w=400&h=300&fit=crop",
    description: "Professional vacation photography to capture your perfect moments",
    features: ["High-resolution photos", "Same-day editing", "Online gallery", "Print options"]
  },
  {
    id: "srv2",
    title: "Airport Transfer Service",
    provider: "SafeRide Transport",
    category: "Transportation", 
    duration: "As needed",
    price: 1200,
    rating: 4.8,
    reviews: 567,
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
    description: "Reliable and comfortable airport transfers with professional drivers",
    features: ["24/7 availability", "Flight tracking", "Meet & greet", "Fixed pricing"]
  },
  {
    id: "srv3",
    title: "Personal Chef Service",
    provider: "Gourmet Chefs Co.",
    category: "Dining",
    duration: "3-6 hours",
    price: 12000,
    rating: 4.9,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
    description: "Private chef service for intimate dining experiences in your accommodation",
    features: ["Custom menu", "Fresh ingredients", "Full service", "Dietary accommodations"]
  },
  {
    id: "srv4",
    title: "Housekeeping Service",
    provider: "CleanPro Services",
    category: "Cleaning",
    duration: "2-3 hours",
    price: 2500,
    rating: 4.7,
    reviews: 892,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    description: "Professional cleaning service to keep your stay comfortable and fresh",
    features: ["Eco-friendly products", "Flexible scheduling", "Trusted staff", "Quality guarantee"]
  },
  {
    id: "srv5",
    title: "Laundry & Dry Cleaning",
    provider: "QuickWash Express",
    category: "Laundry",
    duration: "24-48 hours",
    price: 800,
    rating: 4.6,
    reviews: 445,
    image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=400&h=300&fit=crop",
    description: "Convenient pickup and delivery laundry service for your stay",
    features: ["Pickup & delivery", "Same-day service", "Dry cleaning", "Stain treatment"]
  },
  {
    id: "srv6",
    title: "Grocery Delivery",
    provider: "FreshMart Delivery",
    category: "Grocery",
    duration: "1-2 hours",
    price: 500,
    rating: 4.5,
    reviews: 678,
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=300&fit=crop",
    description: "Fresh groceries delivered to your accommodation for a comfortable stay",
    features: ["Fresh produce", "Local specialties", "Fast delivery", "No minimum order"]
  }
];

const ServiceCard = ({ service }) => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleCardClick = () => {
    toast({
      title: "Service selected!",
      description: `You've selected "${service.title}". Booking functionality coming soon!`,
    });
    // In a real app, this would navigate to: navigate(`/service/${service.id}`);
  };

  const getCategoryColor = (category) => {
    const colors = {
      Photography: "bg-purple-100 text-purple-800",
      Transportation: "bg-blue-100 text-blue-800", 
      Dining: "bg-orange-100 text-orange-800",
      Cleaning: "bg-green-100 text-green-800",
      Laundry: "bg-cyan-100 text-cyan-800",
      Grocery: "bg-yellow-100 text-yellow-800"
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <Card className="group cursor-pointer overflow-hidden" onClick={handleCardClick}>
      <div className="relative">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="absolute top-3 left-3">
          <span className={`px-2 py-1 text-xs font-medium rounded-md ${getCategoryColor(service.category)}`}>
            {service.category}
          </span>
        </div>
        <div className="absolute top-3 right-3 px-2 py-1 bg-background/90 backdrop-blur-sm rounded-md">
          <div className="flex items-center gap-1">
            <Shield className="h-3 w-3 text-green-600" />
            <span className="text-xs font-medium">Verified</span>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="font-semibold text-foreground line-clamp-2">{service.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">by {service.provider}</p>
          </div>
          <div className="flex items-center gap-1 ml-2">
            <Star className="h-4 w-4 fill-foreground text-foreground" />
            <span className="text-sm font-medium">{service.rating}</span>
            <span className="text-sm text-muted-foreground">({service.reviews})</span>
          </div>
        </div>

        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>{service.duration}</span>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2">{service.description}</p>

        <div className="space-y-2">
          <div className="flex flex-wrap gap-1">
            {service.features.slice(0, 2).map((feature, index) => (
              <div key={index} className="flex items-center gap-1">
                <CheckCircle className="h-3 w-3 text-green-600" />
                <span className="text-xs text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
          {service.features.length > 2 && (
            <span className="text-xs text-muted-foreground">
              +{service.features.length - 2} more features
            </span>
          )}
        </div>

        <div className="flex items-baseline gap-1 pt-2">
          <span className="font-semibold text-foreground">₹{service.price.toLocaleString()}</span>
          <span className="text-sm text-muted-foreground">starting price</span>
        </div>
      </div>
    </Card>
  );
};

const Services = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Services" },
    { id: "transportation", label: "Transportation" },
    { id: "dining", label: "Dining" },
    { id: "cleaning", label: "Cleaning" },
    { id: "photography", label: "Photography" },
    { id: "other", label: "Other" }
  ];

  const filteredServices = selectedCategory === "all" 
    ? services 
    : services.filter(service => service.category.toLowerCase() === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="max-w-screen-2xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Premium services for your stay</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Enhance your experience with our curated selection of professional services.
            From transportation to personal chefs, we've got you covered.
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

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Empty State */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No services found in this category.</p>
            <Button 
              variant="outline" 
              onClick={() => setSelectedCategory("all")}
              className="mt-4"
            >
              View all services
            </Button>
          </div>
        )}

        {/* Load More */}
        {filteredServices.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Show more services
            </Button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Services;
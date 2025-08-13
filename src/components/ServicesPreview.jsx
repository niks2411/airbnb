import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, Shield } from "lucide-react";
import professionalPhotography from "@/assets/professional-photography.jpg";
import airportTransfer from "@/assets/airport-transfer.jpg";
import personalChef from "@/assets/personal-chef.jpg";

const featuredServices = [
  {
    id: "srv1",
    title: "Professional Photography",
    provider: "PhotoPro Studios",
    category: "Photography",
    price: 8500,
    rating: 4.9,
    reviews: 234,
    image: professionalPhotography,
    description: "Professional vacation photography to capture your perfect moments"
  },
  {
    id: "srv2",
    title: "Airport Transfer Service",
    provider: "SafeRide Transport",
    category: "Transportation", 
    price: 1200,
    rating: 4.8,
    reviews: 567,
    image: airportTransfer,
    description: "Reliable and comfortable airport transfers with professional drivers"
  },
  {
    id: "srv3",
    title: "Personal Chef Service",
    provider: "Gourmet Chefs Co.",
    category: "Dining",
    price: 12000,
    rating: 4.9,
    reviews: 189,
    image: personalChef,
    description: "Private chef service for intimate dining experiences"
  }
];

const ServicePreviewCard = ({ service }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/services");
  };

  const getCategoryColor = (category) => {
    const colors = {
      Photography: "bg-purple-100 text-purple-800",
      Transportation: "bg-blue-100 text-blue-800", 
      Dining: "bg-orange-100 text-orange-800"
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

      <div className="p-4 space-y-2">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="font-semibold text-foreground line-clamp-2">{service.title}</h3>
            <p className="text-sm text-muted-foreground">by {service.provider}</p>
          </div>
          <div className="flex items-center gap-1 ml-2">
            <Star className="h-4 w-4 fill-foreground text-foreground" />
            <span className="text-sm font-medium">{service.rating}</span>
          </div>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2">{service.description}</p>

        <div className="flex items-baseline gap-1">
          <span className="font-semibold text-foreground">₹{service.price.toLocaleString()}</span>
          <span className="text-sm text-muted-foreground">starting price</span>
        </div>
      </div>
    </Card>
  );
};

const ServicesPreview = () => {
  const navigate = useNavigate();

  return (
    <section className="max-w-screen-2xl mx-auto px-6 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-2">Premium Services</h2>
          <p className="text-muted-foreground">Enhance your stay with professional services</p>
        </div>
        <Button 
          variant="outline"
          onClick={() => navigate("/services")}
          className="px-6"
        >
          View all services
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredServices.map((service) => (
          <ServicePreviewCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default ServicesPreview;
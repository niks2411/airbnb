import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Search, MapPin, Calendar } from "lucide-react";

const CallToAction = () => {
  const navigate = useNavigate();

  const handleExploreAll = () => {
    navigate("/search?location=India");
  };

  const handleExploreExperiences = () => {
    navigate("/experiences");
  };

  const handleExploreServices = () => {
    navigate("/services");
  };

  return (
    <section className="max-w-screen-2xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Ready to explore more?
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover thousands of unique places to stay, amazing experiences, and premium services
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Explore All Properties */}
        <Card className="p-8 text-center hover:shadow-lg transition-shadow duration-300">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Search className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-4">Explore All Properties</h3>
          <p className="text-muted-foreground mb-6">
            Browse through thousands of verified properties across India
          </p>
          <Button 
            onClick={handleExploreAll}
            className="w-full"
          >
            View All Properties
          </Button>
        </Card>

        {/* Discover Experiences */}
        <Card className="p-8 text-center hover:shadow-lg transition-shadow duration-300">
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <MapPin className="h-8 w-8 text-orange-600" />
          </div>
          <h3 className="text-xl font-semibold mb-4">Unique Experiences</h3>
          <p className="text-muted-foreground mb-6">
            Join local hosts for unforgettable activities and cultural experiences
          </p>
          <Button 
            onClick={handleExploreExperiences}
            variant="outline"
            className="w-full"
          >
            Discover Experiences
          </Button>
        </Card>

        {/* Premium Services */}
        <Card className="p-8 text-center hover:shadow-lg transition-shadow duration-300">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Calendar className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold mb-4">Premium Services</h3>
          <p className="text-muted-foreground mb-6">
            Enhance your stay with professional photography, transport, and more
          </p>
          <Button 
            onClick={handleExploreServices}
            variant="outline"
            className="w-full"
          >
            Browse Services
          </Button>
        </Card>
      </div>

      {/* Additional CTA */}
      <div className="text-center mt-16">
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12">
          <h3 className="text-2xl font-bold mb-4">Start your journey today</h3>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Join millions of travelers who trust our platform for their perfect getaway
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={handleExploreAll}
              className="px-8"
            >
              Start Exploring
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => navigate("/login")}
              className="px-8"
            >
              Become a Host
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
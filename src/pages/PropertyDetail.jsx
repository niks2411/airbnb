import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Heart, Star, Share, ArrowLeft, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import { popularHomesGurgaon, gautamBuddhaNagar } from "@/data/properties";
import { useToast } from "@/hooks/use-toast";

const PropertyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);
  const [guests, setGuests] = useState(1);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  // Find property from both arrays
  const allProperties = [...popularHomesGurgaon, ...gautamBuddhaNagar];
  const property = allProperties.find(p => p.id === id);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Property not found</h1>
          <Button onClick={() => navigate("/")}>Back to Home</Button>
        </div>
      </div>
    );
  }

  const { toast } = useToast();

  const handleBooking = () => {
    if (!checkIn || !checkOut) {
      toast({
        title: "Dates required",
        description: "Please select check-in and check-out dates to proceed with booking.",
        variant: "destructive",
      });
      return;
    }
    
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    
    if (checkOutDate <= checkInDate) {
      toast({
        title: "Invalid dates",
        description: "Check-out date must be after check-in date.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Booking confirmed!",
      description: `Your reservation for ${property.title} from ${checkIn} to ${checkOut} for ${guests} guest${guests > 1 ? 's' : ''} has been confirmed.`,
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: property.title,
        text: `Check out this amazing property: ${property.title}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied!",
        description: "Property link has been copied to your clipboard.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Property Actions */}
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
            <Button variant="ghost" onClick={handleShare} className="flex items-center gap-2">
              <Share className="h-4 w-4" />
              Share
            </Button>
            <Button
              variant="ghost"
              onClick={() => setIsFavorite(!isFavorite)}
              className="flex items-center gap-2"
            >
              <Heart className={`h-4 w-4 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
              Save
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Property Info */}
          <div className="lg:col-span-2">
            {/* Property Image */}
            <div className="aspect-video rounded-xl overflow-hidden mb-6">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Property Title and Rating */}
            <div className="mb-6">
              <h1 className="text-3xl font-semibold mb-2">{property.title}</h1>
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-foreground text-foreground" />
                  <span className="font-medium">{property.rating}</span>
                </div>
                <span>•</span>
                <span>{property.location}</span>
              </div>
            </div>

            {/* Property Description */}
            <div className="mb-6 space-y-4">
              <h2 className="text-xl font-semibold">About this place</h2>
              <p className="text-muted-foreground leading-relaxed">
                Experience luxury and comfort in this beautifully designed space. Perfect for travelers
                seeking a memorable stay with modern amenities and stunning views. The property features
                contemporary furnishings, high-speed wifi, and is located in a prime area with easy access
                to local attractions and transportation.
              </p>
            </div>

            {/* Amenities */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">What this place offers</h2>
              <div className="grid grid-cols-2 gap-4">
                {["Free WiFi", "Kitchen", "Air conditioning", "Heating", "TV", "Washing machine"].map((amenity) => (
                  <div key={amenity} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-foreground rounded-full"></div>
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-24">
              <div className="mb-4">
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-2xl font-semibold">₹{property.price.toLocaleString()}</span>
                  <span className="text-muted-foreground">night</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-foreground text-foreground" />
                  <span className="font-medium">{property.rating}</span>
                </div>
              </div>

              <div className="space-y-4">
                {/* Check-in/Check-out */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="border border-border rounded-lg p-3">
                    <label className="text-xs font-semibold text-foreground block mb-1">CHECK-IN</label>
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full text-sm bg-transparent border-none outline-none"
                    />
                  </div>
                  <div className="border border-border rounded-lg p-3">
                    <label className="text-xs font-semibold text-foreground block mb-1">CHECK-OUT</label>
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full text-sm bg-transparent border-none outline-none"
                    />
                  </div>
                </div>

                {/* Guests */}
                <div className="border border-border rounded-lg p-3">
                  <label className="text-xs font-semibold text-foreground block mb-1">GUESTS</label>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">{guests} guest{guests > 1 ? 's' : ''}</span>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => guests > 1 && setGuests(guests - 1)}
                        disabled={guests <= 1}
                      >
                        -
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setGuests(guests + 1)}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Reserve Button */}
                <Button
                  onClick={handleBooking}
                  className="w-full bg-primary hover:bg-primary-hover text-primary-foreground"
                  size="lg"
                >
                  Reserve
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  You won't be charged yet
                </p>

                {/* Price breakdown */}
                <div className="space-y-2 pt-4 border-t">
                  <div className="flex justify-between">
                    <span>₹{property.price.toLocaleString()} x {property.nights} nights</span>
                    <span>₹{(property.price * property.nights).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cleaning fee</span>
                    <span>₹{Math.round(property.price * 0.1).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Service fee</span>
                    <span>₹{Math.round(property.price * 0.05).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between font-semibold pt-2 border-t">
                    <span>Total</span>
                    <span>₹{Math.round(property.price * property.nights * 1.15).toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
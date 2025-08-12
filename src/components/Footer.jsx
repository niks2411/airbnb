import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-background border-t border-border mt-16">
      <div className="max-w-screen-2xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <div className="space-y-2">
              <Button 
                variant="ghost" 
                className="justify-start p-0 h-auto font-normal"
                onClick={() => navigate("/")}
              >
                Home
              </Button>
              <Button 
                variant="ghost" 
                className="justify-start p-0 h-auto font-normal"
                onClick={() => navigate("/experiences")}
              >
                Experiences
              </Button>
              <Button 
                variant="ghost" 
                className="justify-start p-0 h-auto font-normal"
                onClick={() => navigate("/services")}
              >
                Services
              </Button>
              <Button 
                variant="ghost" 
                className="justify-start p-0 h-auto font-normal"
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Help Center</p>
              <p>Safety information</p>
              <p>Cancellation options</p>
              <p>Contact us</p>
            </div>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-semibold mb-4">Community</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Airbnb.org: disaster relief housing</p>
              <p>Combating discrimination</p>
              <p>Supporting people with disabilities</p>
              <p>Promoting diversity & belonging</p>
            </div>
          </div>

          {/* Hosting */}
          <div>
            <h3 className="font-semibold mb-4">Hosting</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Airbnb your home</p>
              <p>AirCover for Hosts</p>
              <p>Hosting resources</p>
              <p>Community forum</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>© 2024 Airbnb Clone</span>
            <span>•</span>
            <span>Privacy</span>
            <span>•</span>
            <span>Terms</span>
            <span>•</span>
            <span>Sitemap</span>
          </div>
          
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Button variant="ghost" size="sm">
              English (US)
            </Button>
            <Button variant="ghost" size="sm">
              ₹ INR
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
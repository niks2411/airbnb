import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Search, Menu, User, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("homes");

  // Update active tab based on current route
  useEffect(() => {
    if (location.pathname === "/") {
      setActiveTab("homes");
    } else if (location.pathname === "/experiences") {
      setActiveTab("experiences");
    } else if (location.pathname === "/services") {
      setActiveTab("services");
    }
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-screen-2xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => navigate("/")}
              className="text-2xl font-bold text-airbnb-red hover:opacity-80 transition-opacity"
            >
              airbnb
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => {
                setActiveTab("homes");
                navigate("/");
              }}
              className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === "homes"
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Homes
              {activeTab === "homes" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground rounded-full" />
              )}
            </button>
            <button
              onClick={() => {
                setActiveTab("experiences");
                navigate("/experiences");
              }}
              className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === "experiences"
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className="flex items-center gap-1">
                Experiences
                <span className="px-1.5 py-0.5 text-xs bg-primary text-primary-foreground rounded-md">
                  NEW
                </span>
              </span>
              {activeTab === "experiences" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground rounded-full" />
              )}
            </button>
            <button
              onClick={() => {
                setActiveTab("services");
                navigate("/services");
              }}
              className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === "services"
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className="flex items-center gap-1">
                Services
                <span className="px-1.5 py-0.5 text-xs bg-primary text-primary-foreground rounded-md">
                  NEW
                </span>
              </span>
              {activeTab === "services" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground rounded-full" />
              )}
            </button>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate("/login")}
              className="hidden md:block text-sm font-medium text-foreground hover:bg-muted px-3 py-2 rounded-full transition-colors"
            >
              Become a host
            </button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Globe className="h-4 w-4" />
            </Button>
            <div
              onClick={() => navigate("/login")}
              className="flex items-center border border-border rounded-full px-2 py-1 hover:shadow-md transition-shadow cursor-pointer"
            >
              <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                <Menu className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                <User className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Home, Search, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="min-h-[80vh] flex items-center justify-center px-6">
        <Card className="max-w-md w-full p-8 text-center">
          <div className="mb-6">
            <div className="text-6xl font-bold text-primary mb-4">404</div>
            <h1 className="text-2xl font-semibold mb-2">Page not found</h1>
            <p className="text-muted-foreground">
              Sorry, we couldn't find the page you're looking for. The page might have been moved, deleted, or you entered the wrong URL.
            </p>
          </div>
          
          <div className="space-y-3">
            <Button 
              onClick={() => navigate('/')}
              className="w-full"
              size="lg"
            >
              <Home className="h-4 w-4 mr-2" />
              Go to Homepage
            </Button>
            
            <Button 
              variant="outline"
              onClick={() => navigate('/search?location=India')}
              className="w-full"
              size="lg"
            >
              <Search className="h-4 w-4 mr-2" />
              Search Properties
            </Button>
            
            <Button 
              variant="ghost"
              onClick={() => navigate(-1)}
              className="w-full"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Go Back
            </Button>
          </div>
          
          <div className="mt-8 pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Need help? <button className="text-primary hover:underline">Contact support</button>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default NotFound;

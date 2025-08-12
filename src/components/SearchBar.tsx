import { useState } from "react";
import { Search, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const SearchBar = () => {
  const [activeField, setActiveField] = useState("");

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <div className="bg-background border border-border rounded-full shadow-search p-2">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
          {/* Where */}
          <div
            className={`p-4 rounded-full cursor-pointer transition-colors ${
              activeField === "where" ? "bg-secondary" : "hover:bg-muted"
            }`}
            onClick={() => setActiveField("where")}
          >
            <div className="text-xs font-semibold text-foreground">Where</div>
            <div className="text-sm text-muted-foreground">Search destinations</div>
          </div>

          {/* Check in */}
          <div
            className={`p-4 rounded-full cursor-pointer transition-colors border-l border-border ${
              activeField === "checkin" ? "bg-secondary" : "hover:bg-muted"
            }`}
            onClick={() => setActiveField("checkin")}
          >
            <div className="text-xs font-semibold text-foreground">Check in</div>
            <div className="text-sm text-muted-foreground">Add dates</div>
          </div>

          {/* Check out */}
          <div
            className={`p-4 rounded-full cursor-pointer transition-colors border-l border-border ${
              activeField === "checkout" ? "bg-secondary" : "hover:bg-muted"
            }`}
            onClick={() => setActiveField("checkout")}
          >
            <div className="text-xs font-semibold text-foreground">Check out</div>
            <div className="text-sm text-muted-foreground">Add dates</div>
          </div>

          {/* Who */}
          <div
            className={`p-4 rounded-full cursor-pointer transition-colors border-l border-border flex items-center justify-between ${
              activeField === "who" ? "bg-secondary" : "hover:bg-muted"
            }`}
            onClick={() => setActiveField("who")}
          >
            <div>
              <div className="text-xs font-semibold text-foreground">Who</div>
              <div className="text-sm text-muted-foreground">Add guests</div>
            </div>
            <Button
              size="icon"
              className="bg-primary hover:bg-primary-hover text-primary-foreground rounded-full h-12 w-12 ml-2"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
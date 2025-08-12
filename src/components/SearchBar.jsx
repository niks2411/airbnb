import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const SearchBar = () => {
  const navigate = useNavigate();
  const [activeField, setActiveField] = useState("");
  const [searchData, setSearchData] = useState({
    location: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

  const { toast } = useToast();

  const handleSearch = () => {
    if (!searchData.location) {
      toast({
        title: "Destination required",
        description: "Please enter a destination to search for properties.",
        variant: "destructive",
      });
      return;
    }
    
    const params = new URLSearchParams({
      location: searchData.location,
      checkIn: searchData.checkIn,
      checkOut: searchData.checkOut,
      guests: searchData.guests.toString(),
    });
    
    navigate(`/search?${params.toString()}`);
  };

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
            <input
              type="text"
              placeholder="Search destinations"
              value={searchData.location}
              onChange={(e) => setSearchData({...searchData, location: e.target.value})}
              className="text-sm text-muted-foreground bg-transparent border-none outline-none w-full placeholder:text-muted-foreground"
            />
          </div>

          {/* Check in */}
          <div
            className={`p-4 rounded-full cursor-pointer transition-colors border-l border-border ${
              activeField === "checkin" ? "bg-secondary" : "hover:bg-muted"
            }`}
            onClick={() => setActiveField("checkin")}
          >
            <div className="text-xs font-semibold text-foreground">Check in</div>
            <input
              type="date"
              value={searchData.checkIn}
              onChange={(e) => setSearchData({...searchData, checkIn: e.target.value})}
              className="text-sm text-muted-foreground bg-transparent border-none outline-none w-full"
              placeholder="Add dates"
            />
          </div>

          {/* Check out */}
          <div
            className={`p-4 rounded-full cursor-pointer transition-colors border-l border-border ${
              activeField === "checkout" ? "bg-secondary" : "hover:bg-muted"
            }`}
            onClick={() => setActiveField("checkout")}
          >
            <div className="text-xs font-semibold text-foreground">Check out</div>
            <input
              type="date"
              value={searchData.checkOut}
              onChange={(e) => setSearchData({...searchData, checkOut: e.target.value})}
              className="text-sm text-muted-foreground bg-transparent border-none outline-none w-full"
              placeholder="Add dates"
            />
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
              <div className="text-sm text-muted-foreground">
                {searchData.guests > 0 ? `${searchData.guests} guest${searchData.guests > 1 ? 's' : ''}` : 'Add guests'}
              </div>
              {activeField === "who" && (
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      searchData.guests > 1 && setSearchData({...searchData, guests: searchData.guests - 1});
                    }}
                    className="px-2 py-1 border rounded text-xs"
                    disabled={searchData.guests <= 1}
                  >
                    -
                  </button>
                  <span className="text-xs">{searchData.guests}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSearchData({...searchData, guests: searchData.guests + 1});
                    }}
                    className="px-2 py-1 border rounded text-xs"
                  >
                    +
                  </button>
                </div>
              )}
            </div>
            <Button
              onClick={(e) => {
                e.stopPropagation();
                handleSearch();
              }}
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
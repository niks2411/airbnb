import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import PropertySection from "@/components/PropertySection";
import { popularHomesGurgaon, gautamBuddhaNagar } from "@/data/properties";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SearchBar />
      
      <div className="space-y-12 pb-16">
        <PropertySection
          title="Popular homes in Gurgaon District"
          properties={popularHomesGurgaon}
        />
        
        <PropertySection
          title="Available in Gautam Buddha Nagar this weekend"
          properties={gautamBuddhaNagar}
        />
      </div>
    </div>
  );
};

export default Index;

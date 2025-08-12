import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import CategorySection from "@/components/CategorySection";
import PropertySection from "@/components/PropertySection";
import ExperiencePreview from "@/components/ExperiencePreview";
import ServicesPreview from "@/components/ServicesPreview";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import { popularHomesGurgaon, gautamBuddhaNagar } from "@/data/properties";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SearchBar />
      
      <div className="space-y-16 pb-16">
        {/* Browse by Category */}
        <CategorySection />
        
        {/* Popular Properties */}
        <PropertySection
          title="Popular homes in Gurgaon District"
          properties={popularHomesGurgaon}
        />
        
        {/* Experience Preview */}
        <ExperiencePreview />
        
        {/* More Properties */}
        <PropertySection
          title="Available in Gautam Buddha Nagar this weekend"
          properties={gautamBuddhaNagar}
        />
        
        {/* Services Preview */}
        <ServicesPreview />
        
        {/* Call to Action */}
        <CallToAction />
      </div>
      <Footer />
    </div>
  );
};

export default Index;

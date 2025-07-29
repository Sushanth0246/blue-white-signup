import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-muted flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-hero bg-clip-text text-transparent">
          Welcome to Playure
        </h1>
        <p className="text-xl text-muted-foreground">Your sports platform awaits!</p>
        <Link to="/signup">
          <Button className="bg-gradient-to-r from-primary to-hero hover:from-primary/90 hover:to-hero/90 text-white font-medium h-12 px-8">
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;

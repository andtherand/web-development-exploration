
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

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
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground p-4">
      <div className="text-center max-w-md animate-fade-in">
        <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center rounded-full bg-primary/10">
          <span className="text-5xl font-bold text-primary">404</span>
        </div>
        <h1 className="text-3xl font-bold mb-4">Seite nicht gefunden</h1>
        <p className="text-muted-foreground mb-8">
          Die angeforderte Seite existiert leider nicht. Kehren Sie zur Präsentation zurück.
        </p>
        <Button 
          onClick={() => navigate('/')} 
          className="inline-flex items-center"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Zurück zur Präsentation
        </Button>
      </div>
    </div>
  );
};

export default NotFound;

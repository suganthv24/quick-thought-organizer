import { useState } from "react";
import NotesGrid from "@/components/NotesGrid";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import NoteEditor from "@/components/NoteEditor";
import LandingHero from "@/components/LandingHero";
import FeatureCards from "@/components/FeatureCards";
import HowItWorks from "@/components/HowItWorks";
import CallToAction from "@/components/CallToAction";
import { useNavigate } from "react-router-dom";

const Index = () => {
  // On landing page, if already logged in, redirect to dashboard
  const navigate = useNavigate();
  const [editorOpen, setEditorOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    typeof window !== "undefined" ? localStorage.getItem("isLoggedIn") === "true" : false
  );

  // If logged in, redirect to dashboard
  if (isLoggedIn) {
    navigate("/dashboard", { replace: true });
    return null;
  }

  // Landing page view for non-logged in users
  return (
    <div className="min-h-screen bg-[#F5F6FA] font-sans">
      <div className="container mx-auto p-4 max-w-6xl">
        <header className="py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <h1 className="text-3xl font-semibold text-[#202124] tracking-tight">NoteGenius+</h1>
          <div className="flex gap-4">
            <Button
              variant="outline"
              onClick={() => navigate("/login")}
              className="min-w-[100px]"
            >
              Log In
            </Button>
            <Button
              onClick={() => navigate("/signup")}
              className="min-w-[100px]"
            >
              Sign Up
            </Button>
          </div>
        </header>
        <LandingHero />
        <FeatureCards />
        <HowItWorks />
        <CallToAction />
      </div>
    </div>
  );
};

export default Index;

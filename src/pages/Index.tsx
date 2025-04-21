
import { useState } from "react";
import NotesGrid from "@/components/NotesGrid";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import NoteEditor from "@/components/NoteEditor";
import LandingHero from "@/components/LandingHero";
import FeatureCards from "@/components/FeatureCards";
import HowItWorks from "@/components/HowItWorks";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  const [editorOpen, setEditorOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // This would come from auth context in a real app

  // Landing page view for non-logged in users
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#F5F6FA] font-sans">
        <div className="container mx-auto p-4 max-w-6xl">
          <header className="py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <h1 className="text-3xl font-semibold text-[#202124] tracking-tight">NoteGenius+</h1>
            <div className="flex gap-4">
              <Button 
                variant="outline" 
                onClick={() => setIsLoggedIn(true)}
                className="min-w-[100px]"
              >
                Log In
              </Button>
              <Button 
                onClick={() => setIsLoggedIn(true)}
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
  }

  // Dashboard view for logged in users
  return (
    <div className="min-h-screen bg-[#F5F6FA] font-sans">
      <div className="container mx-auto p-4 max-w-6xl">
        <header className="py-6 mb-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <h1 className="text-3xl font-semibold text-[#202124] tracking-tight">NoteGenius+</h1>
          <div className="flex gap-4">
            <Button
              onClick={() => setEditorOpen(true)}
              className="btn-pleasant"
            >
              <PlusIcon className="h-5 w-5 mr-2" />
              New Note
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setIsLoggedIn(false)}
            >
              Log Out
            </Button>
          </div>
        </header>

        <NotesGrid />

        <NoteEditor
          isOpen={editorOpen}
          onClose={() => setEditorOpen(false)}
        />
      </div>
    </div>
  );
};

export default Index;

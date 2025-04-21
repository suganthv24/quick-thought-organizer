
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const LandingHero = () => {
  return (
    <div className="py-12 md:py-24 lg:py-32 flex flex-col items-center text-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Take notes. Get smarter. Automatically.
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mb-10 text-gray-700">
        NoteGenius+ helps you transform ordinary notes into structured knowledge, quizzes, and professional exports.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button className="text-base px-8 py-6">
          Start Free
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        <Button variant="outline" className="text-base px-8 py-6">
          Try a Demo
        </Button>
      </div>
    </div>
  );
};

export default LandingHero;

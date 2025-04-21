
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <div className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center rounded-3xl mx-auto my-12 max-w-6xl">
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">Ready to transform your notes?</h2>
      <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
        Join thousands of students and professionals who are studying smarter, not harder.
      </p>
      <Button className="bg-white text-blue-700 hover:bg-blue-50 text-lg px-8 py-6">
        Get Started Free
      </Button>
    </div>
  );
};

export default CallToAction;

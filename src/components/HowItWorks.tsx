
import { Check } from "lucide-react";

const steps = [
  {
    title: "Upload your content",
    description: "Drag & drop your PDFs, Word docs, or text files - or create notes from scratch.",
  },
  {
    title: "Let NoteGenius+ work its magic",
    description: "Our AI automatically structures, summarizes, and transforms your content.",
  },
  {
    title: "Quiz yourself & learn faster",
    description: "Generate interactive quizzes to test your knowledge and improve retention.",
  },
  {
    title: "Export professionally",
    description: "Turn your notes into polished documents, slides, or PDFs with one click.",
  },
];

const HowItWorks = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-blue-50 to-transparent">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12">How NoteGenius+ Works</h2>
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-4 fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="bg-blue-100 rounded-full p-2 mt-1 text-blue-700">
                <Check className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;

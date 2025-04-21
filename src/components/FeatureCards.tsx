
import { Card, CardContent } from "@/components/ui/card";
import { FileText, BookOpen, FileExport } from "lucide-react";

const features = [
  {
    title: "Upload & View Notes Instantly",
    description: "Import documents, PDFs, and text for instant structured notes with auto-formatting and organization.",
    icon: FileText,
    color: "bg-accent-blue",
  },
  {
    title: "Auto-Quiz & Summaries",
    description: "Turn your notes into interactive quizzes and concise summaries to reinforce learning and retention.",
    icon: BookOpen,
    color: "bg-accent-purple",
  },
  {
    title: "Export to Word, PPT, or PDF",
    description: "Convert your notes to professional documents, presentations, or PDFs with a single click.",
    icon: FileExport,
    color: "bg-accent-green",
  },
];

const FeatureCards = () => {
  return (
    <div className="py-16 px-4">
      <h2 className="text-3xl font-semibold text-center mb-12">Transform how you learn and study</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <Card key={index} className="overflow-hidden hover-scale transition-all duration-300 border-0 card-shadow">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className={`w-16 h-16 rounded-full ${feature.color} flex items-center justify-center mb-5`}>
                <feature.icon className="h-8 w-8 text-blue-800" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;

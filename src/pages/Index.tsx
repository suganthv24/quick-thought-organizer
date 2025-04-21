
import { useState } from "react";
import NotesGrid from "@/components/NotesGrid";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import NoteEditor from "@/components/NoteEditor";

const Index = () => {
  const [editorOpen, setEditorOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <div className="container mx-auto p-4 max-w-6xl">
        <header className="py-6 mb-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <h1 className="text-3xl font-semibold text-[#202124]">QuickNotes</h1>
          <Button 
            onClick={() => setEditorOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            <PlusIcon className="h-4 w-4 mr-2" />
            New Note
          </Button>
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

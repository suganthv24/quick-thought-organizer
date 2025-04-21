
import { useState } from "react";
import NotesGrid from "@/components/NotesGrid";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import NoteEditor from "@/components/NoteEditor";

const Index = () => {
  const [editorOpen, setEditorOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F5F6FA] font-sans">
      <div className="container mx-auto p-4 max-w-6xl">
        <header className="py-6 mb-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <h1 className="text-3xl font-semibold text-[#202124] tracking-tight">QuickNotes</h1>
          <Button
            onClick={() => setEditorOpen(true)}
            className="btn-pleasant"
          >
            <PlusIcon className="h-5 w-5 mr-2" />
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

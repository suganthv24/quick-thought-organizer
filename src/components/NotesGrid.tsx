
import { useState, useEffect } from "react";
import NoteCard from "./NoteCard";
import { Note } from "@/types/note";
import { getNotes, saveNote, deleteNote, searchNotes } from "@/services/noteService";
import NoteEditor from "./NoteEditor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, X } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const NotesGrid = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [editorOpen, setEditorOpen] = useState(false);
  const [currentNote, setCurrentNote] = useState<Note | undefined>(undefined);
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    loadNotes();
  }, [searchQuery]);

  const loadNotes = () => {
    const loadedNotes = searchQuery ? searchNotes(searchQuery) : getNotes();
    setNotes(loadedNotes.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()));
  };

  const handleCreateNote = () => {
    setCurrentNote(undefined);
    setEditorOpen(true);
  };

  const handleEditNote = (note: Note) => {
    setCurrentNote(note);
    setEditorOpen(true);
  };

  const handleSaveNote = (note: Note) => {
    saveNote(note);
    loadNotes();
    toast({
      title: currentNote ? "Note updated" : "Note created",
      description: currentNote ? "Your note has been updated" : "Your new note has been saved",
    });
  };

  const handleDeleteNote = (id: string) => {
    deleteNote(id);
    loadNotes();
    toast({
      title: "Note deleted",
      description: "Your note has been deleted",
    });
  };

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          type="text"
          placeholder="Search notes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 pr-10 rounded-xl text-base bg-white bg-opacity-90 border border-gray-200 focus:border-blue-300 transition-colors"
        />
        {searchQuery && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8"
            onClick={handleClearSearch}
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {notes.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 mb-4 text-lg">
            {searchQuery ? "No notes match your search" : "You don't have any notes yet"}
          </p>
          {!searchQuery && (
            <Button onClick={handleCreateNote}>
              <Plus className="h-4 w-4 mr-2" />
              Create your first note
            </Button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              onEdit={handleEditNote}
              onDelete={handleDeleteNote}
            />
          ))}
        </div>
      )}

      <NoteEditor
        note={currentNote}
        isOpen={editorOpen}
        onClose={() => setEditorOpen(false)}
        onSave={handleSaveNote}
      />
    </div>
  );
};

export default NotesGrid;

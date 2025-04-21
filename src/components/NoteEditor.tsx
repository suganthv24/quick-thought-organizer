
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Note } from "@/types/note";

interface NoteEditorProps {
  note?: Note;
  isOpen: boolean;
  onClose: () => void;
  onSave: (note: Note) => void;
}

const NoteEditor = ({ note, isOpen, onClose, onSave }: NoteEditorProps) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const isEditing = !!note;

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
    } else {
      setTitle("");
      setContent("");
    }
  }, [note, isOpen]);

  const handleSave = () => {
    if (!title.trim()) return;
    
    const now = new Date().toISOString();
    const updatedNote: Note = {
      id: note ? note.id : crypto.randomUUID(),
      title: title.trim(),
      content: content.trim(),
      createdAt: note ? note.createdAt : now,
      updatedAt: now,
    };
    
    onSave(updatedNote);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{isEditing ? "Edit Note" : "Create Note"}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 pt-4">
          <div className="space-y-2">
            <Input
              placeholder="Note title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <Textarea
              placeholder="Start typing..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full min-h-[200px] resize-none"
            />
          </div>
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handleSave} disabled={!title.trim()}>
              Save
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NoteEditor;

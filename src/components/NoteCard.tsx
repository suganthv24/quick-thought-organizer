
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2, Edit } from "lucide-react";
import { Note } from "@/types/note";
import { formatDistanceToNow } from "date-fns";

interface NoteCardProps {
  note: Note;
  onEdit: (note: Note) => void;
  onDelete: (id: string) => void;
}

const NoteCard = ({ note, onEdit, onDelete }: NoteCardProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const timeAgo = formatDistanceToNow(new Date(note.updatedAt), { addSuffix: true });

  return (
    <Card 
      className="h-full transition-all duration-200 hover:shadow-md"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <CardHeader className="p-4 pb-2">
        <h3 className="text-xl font-semibold truncate">{note.title}</h3>
      </CardHeader>
      <CardContent className="p-4 pt-2 pb-2">
        <p className="text-sm text-gray-600 line-clamp-4">{note.content}</p>
      </CardContent>
      <CardFooter className="p-4 pt-2 flex justify-between items-center text-xs text-gray-500">
        <span>{timeAgo}</span>
        <div className={`flex gap-2 transition-opacity duration-200 ${isHovering ? 'opacity-100' : 'opacity-0'}`}>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => onEdit(note)}
            className="h-8 w-8"
          >
            <Edit className="h-4 w-4" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => onDelete(note.id)}
            className="h-8 w-8 text-destructive hover:text-destructive"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default NoteCard;

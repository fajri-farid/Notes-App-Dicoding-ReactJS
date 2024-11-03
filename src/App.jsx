import { useState } from "react";
import { Header } from "./component/Header";
import { CreateNotes } from "./component/CreateNotes";
import { NotesList } from "./component/NoteList";
import { ArchivedNotesList } from "./component/ArchivedNotesList";
import mockedData from "./utils/mockedData";
import { Toaster, toast } from "react-hot-toast";

function App() {
  const [notes, setNotes] = useState(mockedData);
  const [archivedNotes, setArchivedNotes] = useState([]);
  const [nextId, setNextId] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const addNote = (title, body) => {
    const newNote = {
      id: nextId,
      title: title,
      body: body,
      archived: false,
      createdAt: new Date().toISOString(),
    };

    setNotes([...notes, newNote]);
    setNextId(nextId + 1);
  };

  console.log(notes);
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
    setArchivedNotes(archivedNotes.filter((note) => note.id !== id));
    toast.success("Catatan berhasil dihapus!");
  };

  const archiveNote = (id) => {
    const noteToArchive = notes.find((note) => note.id === id);
    if (noteToArchive) {
      setArchivedNotes([
        ...archivedNotes,
        { ...noteToArchive, archived: true },
      ]);
      setNotes(notes.filter((note) => note.id !== id));
      toast.success("Catatan berhasil diarsipkan!");
    }
  };

  const moveToMain = (id) => {
    const noteToMove = archivedNotes.find((note) => note.id === id);
    if (noteToMove) {
      setNotes([...notes, { ...noteToMove, archived: false }]);
      setArchivedNotes(archivedNotes.filter((note) => note.id !== id));
      toast.success("Catatan berhasil dipindahkan ke catatan!");
    }
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div>
        <Toaster position="top-right" reverseOrder={true} />
      </div>
      <Header
        searchQuery={searchQuery}
        onSearchChange={(e) => setSearchQuery(e.target.value)}
      />
      <CreateNotes addNote={addNote} />
      <NotesList
        notes={filteredNotes.filter((note) => !note.archived)}
        onDelete={deleteNote}
        onArchive={archiveNote}
      />
      <ArchivedNotesList
        notes={archivedNotes}
        onDelete={deleteNote}
        onMoveToMain={moveToMain}
      />
    </>
  );
}

export default App;

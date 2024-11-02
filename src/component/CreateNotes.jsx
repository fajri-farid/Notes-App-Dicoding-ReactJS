import { useState } from "react";
import { Button } from "./atoms/Button";
import { Input } from "./atoms/Input";

export const CreateNotes = ({ addNote }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const maxTitleLength = 50;

  const handleCreateNote = () => {
    if (title.trim() !== "" && body.trim() !== "") {
      addNote(title, body);
      setTitle("");
      setBody("");
    } else {
      alert("Judul dan isi catatan tidak boleh kosong!");
    }
  };

  return (
    <div className="p-10 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Buat Catatan</h2>
      <div className="flex flex-col items-center justify-center mt-4 w-full max-w-2xl">
        <div className="text-gray-500 mb-2">
          Sisa karakter judul: {maxTitleLength - title.length}
        </div>
        <Input
          className="m-2 p-4 w-full border-2 border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          placeholder="Judul"
          value={title}
          onChange={(e) => {
            if (e.target.value.length <= maxTitleLength) {
              setTitle(e.target.value);
            }
          }}
        />
        <textarea
          className="m-2 p-4 w-full h-40 border-2 border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          placeholder="Isi catatan..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <Button
          className="mt-4 w-full bg-blue-500 text-white hover:bg-blue-600"
          onClick={handleCreateNote}
        >
          Buat
        </Button>
      </div>
    </div>
  );
};

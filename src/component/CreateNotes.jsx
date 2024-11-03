import { useState } from "react";
import { Button } from "./atoms/Button";
import { Input } from "./atoms/Input";
import { toast } from "react-hot-toast";

export const CreateNotes = (props) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const maxTitleLength = props.maxTitleLength || 50;

  const handleCreateNote = () => {
    if (title.trim() !== "" && body.trim() !== "") {
      props.addNote(title, body);
      setTitle("");
      setBody("");
      toast.success("Buat catatan berhasil!");
    } else {
      toast.error("Harap isi semua form!");
    }
  };

  return (
    <div className={`p-10 flex flex-col items-center ${props.className}`}>
      <h2 className="text-2xl font-bold mb-4">
        {props.title || "Buat Catatan"}
      </h2>
      <div className="flex flex-col items-center justify-center mt-4 w-full max-w-2xl">
        <div className="text-gray-500 mb-2">
          {props.titleLengthMessage || "Sisa karakter judul:"}{" "}
          {maxTitleLength - title.length}
        </div>
        <Input
          className={`m-2 p-4 w-full border-2 border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 ${props.inputClassName}`}
          placeholder={props.placeholderTitle || "Judul"}
          value={title}
          onChange={(e) => {
            if (e.target.value.length <= maxTitleLength) {
              setTitle(e.target.value);
            }
          }}
        />
        <textarea
          className={`m-2 p-4 w-full h-40 border-2 border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 ${props.textareaClassName}`}
          placeholder={props.placeholderBody || "Isi catatan..."}
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <Button
          className={`mt-4 w-full bg-blue-500 text-white hover:bg-blue-600 ${props.buttonClassName}`}
          onClick={handleCreateNote}
        >
          {props.buttonText || "Buat"}
        </Button>
      </div>
    </div>
  );
};

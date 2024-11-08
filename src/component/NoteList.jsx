import { formatDate } from "../utils/formatDate";
import { Button } from "./atoms/Button";

export const NotesList = (props) => (
  <div className="p-6 md:p-10">
    <h2 className="text-2xl font-bold mb-6">Catatan</h2>
    <div className="flex flex-wrap justify-normal">
      {props.notes.length === 0 ? (
        <p className="text-gray-500">Tidak ada catatan.</p>
      ) : (
        props.notes.map((note) => (
          <div
            key={note.id}
            className="border p-6 m-2 w-full sm:w-5/12 lg:w-[30%] min-h-[22rem] flex flex-col justify-between rounded-lg shadow-lg"
          >
            <div>
              <h3 className="font-bold text-xl mb-2">{note.title}</h3>
              <p className="text-gray-500 mb-4">{formatDate(note.createdAt)}</p>
              <p className="flex-grow text-gray-700">{note.body}</p>
            </div>
            <div className="mt-4 flex justify-between">
              <Button
                onClick={() => props.onArchive(note.id)}
                className="bg-blue-500 text-white hover:bg-blue-600 w-5/12 py-2 text-sm md:text-md"
              >
                Arsipkan
              </Button>
              <Button
                onClick={() => props.onDelete(note.id)}
                className="text-red-500 hover:underline w-5/12 py-2 text-sm md:text-md"
              >
                Hapus
              </Button>
            </div>
          </div>
        ))
      )}
    </div>
  </div>
);

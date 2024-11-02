import { Input } from "./atoms/Input";

export const Header = ({ searchQuery, onSearchChange }) => {
  return (
    <div className="flex justify-between items-center p-4 border-b-2 ">
      <div className="font-bold text-lg align-middle">
        <h1>NotesApp</h1>
      </div>
      <div>
        <Input
          placeholder="search"
          className="m-2 py-2 px-4"
          value={searchQuery}
          onChange={onSearchChange} 
        />
      </div>
    </div>
  );
};

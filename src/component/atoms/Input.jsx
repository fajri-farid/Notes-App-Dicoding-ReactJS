export const Input = (props) => {
  return (
    <input
      type="text"
      className={`border-2 focus:border-black outline-none rounded-md ${props.className}`}
      placeholder={props.placeholder}
      value={props.value} // Menambahkan value untuk mengikat nilai
      onChange={props.onChange} // Menambahkan onChange untuk menangani perubahan input
    />
  );
};

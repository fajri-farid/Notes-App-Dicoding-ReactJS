export const Button = (props) => {
  return (
    <button
      type={props.type || "button"} 
      onClick={props.onClick}
      className={`text-black border-black border-2 font-semibold py-2 px-4 rounded-md  ${props.className}`}
    >
      {props.children}
    </button>
  );
};

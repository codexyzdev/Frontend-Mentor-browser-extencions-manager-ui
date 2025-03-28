import { useContext } from "react";
import { AppContext } from "./AppContext";
export default function Remove({ id }) {
  const { removeItem } = useContext(AppContext);

  return (
    <button
      onClick={() => removeItem(id)}
      className='py-1 px-3 border rounded-full font-medium hover:bg-red-700 hover:text-neutral-0 transition-colors duration-300 ease-in-out cursor-pointer'
    >
      Remove
    </button>
  );
}

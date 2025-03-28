import { useContext } from "react";
import { AppContext } from "./AppContext";

function ExtensionFilter() {
  const { filtered, setFiltered } = useContext(AppContext);

  return (
    <div className='flex gap-2'>
      <button
        className="py-1 px-3 border rounded-full font-medium hover:bg-red-700  transition-colors duration-300 ease-in-out cursor-pointer'"
        onClick={() => setFiltered("all")}
        style={{
          backgroundColor: filtered === "all" ? "red" : "white",
          color: filtered === "all" ? "white" : "black",
        }}
      >
        All
      </button>
      <button
        className="py-1 px-3 border rounded-full font-medium hover:bg-red-700  transition-colors duration-300 ease-in-out cursor-pointer'"
        onClick={() => setFiltered("active")}
        style={{
          backgroundColor: filtered === "active" ? "red" : "white",
          color: filtered === "active" ? "white" : "black",
        }}
      >
        Active
      </button>
      <button
        className="py-1 px-3 border rounded-full font-medium hover:bg-red-700 transition-colors duration-300 ease-in-out cursor-pointer'"
        onClick={() => setFiltered("inactive")}
        style={{
          backgroundColor: filtered === "inactive" ? "red" : "white",
          color: filtered === "inactive" ? "white" : "black",
        }}
      >
        Inactive
      </button>
    </div>
  );
}

export default ExtensionFilter;

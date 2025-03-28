import { useContext } from "react";
import { AppContext } from "./AppContext";
import Extension from "./Extension";
export default function Extensions() {
  const { appState, filtered } = useContext(AppContext);

  const filteredExtensions = appState?.filter((extension) => {
    if (filtered === "all") return true;
    if (filtered === "active") return extension.isActive;
    if (filtered === "inactive") return !extension.isActive;
    return true;
  });

  return (
    <ul className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4'>
      {filteredExtensions &&
        filteredExtensions.map((data) => (
          <Extension key={data.name} {...data} />
        ))}
    </ul>
  );
}

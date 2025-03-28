import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [appState, setAppState] = useState();
  const [filtered, setFiltered] = useState("all");

  const removeItem = (id) => {
    setAppState(prevItems => prevItems.filter(item => item.name !== id));
  };

  const toggleItemActive = (id) => {
    setAppState(appState =>
      appState.map(item =>
        item.name === id ? { ...item, isActive: !item.isActive } : item
      )
    );
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./data.json"); // Reemplaza con tu URL
        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }
        const jsonData = await response.json();
        setAppState(jsonData);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ appState, setAppState, filtered, setFiltered,removeItem,toggleItemActive }}>
      {children}
    </AppContext.Provider>
  );
};

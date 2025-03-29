import {
  createContext,
  useEffect,
  useState,
  useMemo,
  useCallback,
} from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [appState, setAppState] = useState([]);
  const [filtered, setFiltered] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch("./data.json");
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }
        const jsonData = await response.json();
        setAppState(jsonData);
      } catch (err) {
        console.error("Error al obtener los datos:", err);
        setError(err.message || "Ocurrió un error al cargar los datos.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const removeItem = useCallback((id) => {
    setAppState((prevItems) => prevItems.filter((item) => item.name !== id));
  }, []);

  const toggleItemActive = useCallback((id) => {
    setAppState((prevItems) =>
      prevItems.map((item) =>
        item.name === id ? { ...item, isActive: !item.isActive } : item
      )
    );
  }, []);

  const contextValue = useMemo(
    () => ({
      appState,
      setAppState,
      filtered,
      setFiltered,
      removeItem,
      toggleItemActive,
      isLoading,
      error,
    }),
    [appState, filtered, removeItem, toggleItemActive, isLoading, error]
  );

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

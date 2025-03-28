import { AppProvider } from "./AppContext";
import Header from "./Header";
import Main from "./Main";
export default function App() {
  return (
    <>
      <AppProvider>
        <div className=' max-w-6xl mx-auto px-4 min-h-screen'>
          <Header />
          <Main />
        </div>
      </AppProvider>
    </>
  );
}

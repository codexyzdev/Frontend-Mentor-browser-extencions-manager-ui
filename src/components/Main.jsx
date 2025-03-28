import ExtensionFilter from "./ExtensionFilter";
import Extension from "./Extensions";
export default function Main() {
  return (
    <main className='mt-4 pb-4'>
      <div className='flex justify-between items-center mb-4'>
        <h1>Extensions List</h1>
        <ExtensionFilter />
      </div>
      <Extension />
    </main>
  );
}

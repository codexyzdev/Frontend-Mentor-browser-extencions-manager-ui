import Slider from "./Slider";
import Remove from "./Remove";
export default function Extension({ name, logo, description, isActive }) {
  return (
    <li
      key={name}
      className=' p-4 bg-neutral-0 dark:bg-neutral-800 rounded-lg shadow-xs flex flex-col justify-between gap-8'
    >
      <div className='flex gap-4'>
        <img
          className='size-12 object-cover rounded-lg'
          src={logo}
          alt={name}
        />
        <div>
          <p className='dark:text-neutral-100 text-neutral-700 text-xl font-bold'>
            {name}
          </p>
          <p className='text-xs '>{description}</p>
        </div>
      </div>
      <div className='flex gap-4 items-center justify-between'>
        <Remove id={name} />
        <Slider isActive={isActive} id={name} />
      </div>
    </li>
  );
}

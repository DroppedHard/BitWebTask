import './App.css'
import { Link, Outlet } from 'react-router-dom';


function App() {
  return (
    <>
    <header className='bg-primary-700 px-4 py-4'>
      <div className='flex flex-wrap justify-around items-center mx-auto max-w-screen-xl'>
        <Link to={"/"} className='flex items-center'>
          <img src='/icon.png' alt='Nobel icon' className='mr-3 h-9 sm:h-16'></img>
          <span className='text-3xl font-bold whitespace-nowrap'>Nobel awards</span>
        </Link>
        <h1 className='text-2xl'>Check out all the nobel prizes in selected year!</h1>
      </div>
    </header>
    <div className='h-[85vh]'>
      <Outlet />
    </div>
    </>
  )
}

export default App

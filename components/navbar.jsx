import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Link from 'next/link'

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (

    <div className='flex justify-between items-center h-15 mx-auto px-4 text-blue-500  m-5 sticky'>
      
      <h1 id='nav_name'className='w-full text-4xl font-bold text-blue-500 cursor-pointer md:hover:text-black md:duration-500 ml-[2rem]'>KELSY</h1>

      <ul className='hidden text:sm md:flex md:w-full  md:justify-end xl:text-lg xl:px-4'>

        <li className='mx-5 hover:text-black duration-500 md:border-b-2 md:border-b-blue-500 cursor-pointer text-2xl font-600'>
          <Link href='#home'>
            Home
          </Link>
        </li>

        <li className='mx-5 hover:text-black duration-500 cursor-pointer text-2xl font-600'>
          <Link href='#aboutme'>
            About Me
          </Link>
        </li>

        <li className='mx-5 hover:text-black duration-500 cursor-pointer text-2xl font-600'>
          <Link href='#whysovtech'>
            Why SovTech?
          </Link>
        </li>

      </ul>

      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>

      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>

        <h1 className='w-full text-3xl font-bold text-blue-500 m-4'>KELSY</h1>

          <li className='p-4 border-b border-gray-600 hover:text-black duration-500 cursor-pointer text-2xl'>          
            <Link href='home'>
              Home
            </Link>
          </li>

          <li className='p-4 border-b border-gray-600 hover:text-bblack duration-500 cursor-pointer text-2xl'>       
            <Link href='aboutme'>
              About Me
            </Link>
          </li>

          <li className='p-4 border-b border-gray-600 hover:text-black duration-500 cursor-pointer text-2xl'>
            <Link href='whysovtech'>
            Why SovTech?
          </Link></li>
      </ul>
    </div>
  );
};

export default Navbar
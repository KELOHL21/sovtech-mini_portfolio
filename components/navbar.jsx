import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (

    <div className='flex justify-between items-center h-24 mx-auto px-4 text-white border-b-inherit border-b-white md:border-b-2 '>
      <h1 className='w-full text-3xl md:text-[2xl] font-bold text-blue-500 cursor-pointer md:hover:text-white md:duration-500'>KELSY</h1>
      <ul className='hidden text:sm md:flex md:w-full  md:justify-end xl:text-lg xl:px-4'>
        <li className='mx-5 hover:text-blue-500 duration-500 md:border-b-2 md:border-b-blue-500 cursor-pointer'>Home</li>
        <li className='mx-5 hover:text-blue-500 duration-500 cursor-pointer'>About me</li>
        <li className='mx-5 hover:text-blue-500 duration-500 cursor-pointer'>Why SovTech</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-blue-500 m-4'>KELSY</h1>
          <li className='p-4 border-b border-gray-600 hover:text-blue-500 duration-500 cursor-pointer'>Home</li>
          <li className='p-4 border-b border-gray-600 hover:text-blue-500 duration-500 cursor-pointer'>About Me</li>
          <li className='p-4 border-b border-gray-600 hover:text-blue-500 duration-500 cursor-pointer'>Why SovTech</li>
      </ul>
    </div>
  );
};

export default Navbar
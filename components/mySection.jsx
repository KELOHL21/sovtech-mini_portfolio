import Skills from './skills'
import Image from 'next/image'
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai'
import { SiIndeed } from 'react-icons/si'

const Me = () => {
   return(

      <div className='flex flex-col justify-center'>

         <div className='flex flex-col justify-center items-center h-[50vh]'>

            {/* Image */}
            <Image
               alt="My_image"
               src='/assets/me.jpg'
               className='myImg'
               width='300'
               height='300'
             />
            
            <div className='p-5 text-xl drop-shadow-md text-center cursor-pointer'>
               {/* small intro */}
               <ul>

                  <li className=' hover:text-blue-500 hover:transition-500 file:text-600 text-xl m-5'>
                     <h2>Jr. Frontend Developer</h2>
                  <hr className='h-[2px] items-center  w-[12rem] rounded m-auto bg-blue-500'></hr>
                  </li>

                  <li className='hover:text-blue-500 hover:transition-500 text-600 text-xl m-5'>
                     <h2>Software Development Student</h2>
                     <hr className='h-[2px] items-center  w-[12rem] rounded m-auto bg-blue-500'></hr>
                  </li>

                  <li className='hover:text-blue-500 hover:transition-500 text-600 text-xl m-5'>
                     <h2>Aspiring Female Developer</h2>
                     <hr className='h-[2px] items-center  w-[12rem] rounded m-auto bg-blue-500'></hr>
                     </li>
               </ul>
            </div>

            <p id='sm_desc' className='text-[25px] text-blue-500 text-center items-center m-1 font-500 p-5 leading-leading w-full'>
               I am just an ambitious creative female trying to break into the Tech World
            </p>

            <div className='flex p-5 justify-evenly '>
               <AiFillGithub className='m-5 cursor-pointer ' size={45} />
               <AiFillLinkedin className='m-5 cursor-pointer' size={45} />
               <AiFillFacebook className='m-5 cursor-pointer' size={45} />
               <SiIndeed className='m-5 cursor-pointer' size={45}/>
            </div>

         </div>

         {/* Skills bars */}
         <div>
            <Skills />
         </div>

      </div>
   )
}

export default Me
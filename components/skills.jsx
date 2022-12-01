import {AiFillHtml5} from 'react-icons/ai'
import { DiCss3} from 'react-icons/di'
import {SiJavascript, SiNextdotjs,SiTailwindcss} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'



const Skills = () => {

   return(
      <div className='container'>

         <h1 className='text-center items-center text-3xl bg-blue-500 text-white w-full p-5  font-medium shadow-xl h-[4rem]'>My Skills</h1>

         {/* HTML */}
         <div className='m-6 shadow-xl'>

            <h3 className='text-gray-900 flex flex-row text-xl'>

            <AiFillHtml5  className='react_icons' size={25}/>

               HTML

            </h3>

            <div className="w-full h-5 bg-gray-900 ">

               <div className="text-right pt-[-10px] px-2 pb-[5px] text-black w-[90%] h-5 bg-blue-500">

                  <p className='text-[15px] pb-3'>90%</p>

               </div>

            </div>

         </div>


         {/* CSS */}

         <div className='m-6 shadow-xl'>    

            <h3 className='text-gray-900 flex flex-row text-xl'>

            <DiCss3 className='react_icons' size={25}/>
               CSS

            </h3>

            <div className="w-full h-5 bg-gray-900">

               <div className="text-right pt-[-10px] px-2 pb-[5] text-black w-[90%] h-5 bg-red-500">
                  
                  <p className='text-[15px] pb-3 '>75%</p>

               </div>

            </div>

         </div>

         {/* JAVASCRIPT */}

         <div className='m-6 shadow-xl'>   

            <h3 className='text-gray-900 flex flex-row text-xl'>
               
            <SiJavascript className='react_icons' size={25}/>

               JAVASCRIPT
               
            </h3>

            <div className="w-full h-5 bg-gray-900">

               <div className="text-right pt-[-10px] px-2 pb-[5px] text-black w-[59%] h-5 bg-purple-500">

                  <p className='text-[15px] pb-3 '>59%</p>

               </div>

            </div>

         </div>

         {/* REACT.JS */}

         <div className='m-6 shadow-xl'>   

            <h3 className='text-gray-900 flex flex-row text-xl'>
               
            <FaReact className='react_icons' size={25}/>

               REACT.JS
               
            </h3>

            <div className="w-full h-5 bg-gray-900">

               <div className="text-right pt-[-10px] px-2 pb-[5px] text-black w-[55%] h-5 bg-orange-500">

                  <p className='text-[15px] pb-3 '>55%</p>

               </div>

            </div>

         </div>

         {/* Next.js */}

         <div className='m-6 shadow-xl'>  

            <h3 className='text-gray-900 flex flex-row text-xl mt-[25px]'>
               
            <SiNextdotjs className='react_icons' size={25}/>

               NEXT.JS
               
            </h3>

            <div className="w-full h-5 bg-gray-900">

               <div className="text-right pt-[-10px] px-2 pb-[5px] text-black w-[65%] h-5 bg-green-500">

                  <p className='text-[15px] pb-3 '>65%</p>

               </div>
            </div>
         </div>

         {/* Tailwind */}
         <div className='m-6 shadow-xl '>      

            <h3 className='text-gray-900 flex flex-row text-xl'>
               
            <SiTailwindcss className='react_icons' size={25}/>

               TAILWIND
               
            </h3>

            <div className="w-full h-5 bg-gray-900 ">

               <div className="text-right  pt-[-10px] px-2 pb-[5px] text-black w-[50%] h-5 bg-yellow-400">

                  <p className='text-[15px] pb-3 '>50%</p>

               </div>

            </div>

         </div>

      </div>
   )
  
}
 
export default Skills;
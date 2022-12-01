import Skills from './skills'
import Image from 'next/image'
import { Margin } from '@mui/icons-material'

const Me = () => {
   return(

      <div className='flex flex-col justify-center mb-[6rem]'>

         <div className='flex flex-col justify-center items-center'>

            {/* Image */}
         <div style={{ position: 'relative', width: '100%', height: '20vh' }}>
               <Image
               alt="Mountains"
               src='/assets/me2.jfif'
               fill
               sizes="100vw"
               style={{
                  objectFit: 'none',
                  marginTop:'2rem',
               }}
   
         />
      </div>
            

            <span className='p-5 m-5  text-xl drop-shadow-md text-justify'>
               {/* small intro */}
               <ul className='mt-9'>
                  <li className='list-disc'><h2>Software Development Student</h2></li>
                  <li className='list-disc'><h2>Jr. Frontend Developer</h2></li>
                  <li className='list-disc'><h2>Aspiring Female Developer</h2></li>
               </ul>
            </span>

         </div>

         {/* Skills bars */}
         <div>
            <Skills />
         </div>

      </div>
   )
}

export default Me
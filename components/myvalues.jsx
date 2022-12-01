import Image from 'next/image'

const MyValues = () => {
   return ( 
      <div className=' cursor-pointer pt-7 '>

            <div className='text-center mb-8'>
               <h1 className='text-2xl'>My Values</h1>
               <span className='inline-flex h-1 w-40 rounded bg-blue-500 mt-1'></span>
            </div>  

            <div className='flex justify-between items-center '>

               <div className='flex flex-col items-center justify-center'>
                  <Image src='/assets/communication.jpg' alt='/' width={100} height={100} className='values' />
                  <span className='font-300'>Communication</span>
               </div>

               <div className='flex flex-col items-center justify-center'>
                  <Image src='/assets/respect.jpg' alt='/' width={100} height={100} className='values'/>
                  <span className='font-300'>Respect</span>
               </div>

               <div className='flex flex-col items-center justify-center'>
                  <Image src='/assets/growth.jpg' alt='/' width={100} height={100} className='values'/>
                  <span className='font-300'>Growth</span>
               </div>

               <div className='flex flex-col items-center justify-center'>
                  <Image src='/assets/determination.jpg' alt='/' width={100} height={100} className='values'/>
                  <span className='font-300'>Determination</span>
               </div>

            </div>
      </div>
    );
}
 
export default MyValues;
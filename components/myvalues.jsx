import Image from 'next/image'

const MyValues = () => {
   return ( 
      <div >
            <h2 className='text-2xl text-center m-5'>My Values:</h2>
                  
            <div className='flex justify-between items-center'>
               <Image src='/assets/communication.jpg' alt='/' width={100} height={100} className='values' />

               <Image src='/assets/respect.jpg' alt='/' width={100} height={100} className='values'/>

               <Image src='/assets/growth.jpg' alt='/' width={100} height={100} className='values'/>

               <Image src='/assets/determination.png' alt='/' width={100} height={100} className='values'/>

            </div>
      </div>
    );
}
 
export default MyValues;
import Image from 'next/image'



const Testimonial = () => {
   return ( 
      <div className='container mx-auto m-3 cursor-pointer'>
            <div className='text-center mb-5'>
               <h1 className='text-2xl'>Testimonials</h1>
               <span className='inline-flex h-1 w-40 rounded bg-blue-500 mt-1'></span>
            </div>

            <div className='flex px-2 '>

               <div className='  px-4 text-center hover:bg-blue-600 hover:transition-500'>
                  <Image className='testimonial_imgs' src='/assets/etischool.jpg' alt='/' width={65} height={65}/>
                  <p className='leading-relaxed py-[15px]'> “ SovTech has been extremely efficient right from the start. The team is friendly, helpful and knowledgeable. I have been more than pleased with the service. ”</p>
                  <span className='inline-flex h-1 w-14 rounded bg-blue-500 mt-4 '></span>
                  <h2 className='title-font font-medium text-sm tracking-wider '>-Etischool</h2>
               </div>

               <div className=' px-4 text-center hover:bg-blue-600 hover:transition-500'>
                  <Image className='testimonial_imgs' src='/assets/Baotree.jpg' alt='/' width={60} height={60}/>
                  <p className='leading-relaxed  py-[13px]'>“One word to sum it all up: Determination. It`s been such a pleasure moving through teams who have the same determination to get us up and running, tested and deployed. ”</p>
                  <span className='inline-flex h-1 w-14 rounded bg-blue-500 mt-4 '></span>
                  <h2 className='title-font font-medium text-sm tracking-wider '>-Baotree</h2>
               </div>

               <div className='text-center px-4 hover:bg-blue-600 hover:transition-500'>
                  <Image className='testimonial_imgs' src='/assets/vortex_systems.jpeg' alt='/' width={60} height={60}/>
                  <p className='leading-relaxed py-[13px]'>“My project planning was straight forward, and all deliverables were discussed and planned out properly. I will be moving forward to engage SovTech for projects.”</p>
                  <span className='inline-flex h-1 w-14 rounded bg-blue-500 mt-4 '></span>
                  <h2 className='title-font font-medium text-sm tracking-wider '>-Votex Systems</h2>
               </div>

            </div>

      </div>

    )
}
 
export default Testimonial;

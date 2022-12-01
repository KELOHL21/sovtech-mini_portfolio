import Testimonial from './sovtech_testimonials'

const SovtechSection = () => {
   return ( 

      <div className="w-full bg-gray-900 text-white flex flex-col pt-[5rem] ">

         <h1 id='whysovtech'className="text-center text-4xl pb-3">

            Why SovTech?

         </h1>

         <span className="text-xl p-2 text-justify w-11/12 mx-5 justify-self-center leading-8 pb-[2rem]">

         I was inspired by SovTech`s tale when browsing their website. A company founded in a garage has grown to over 300 of the top engineering experts, offering a world-class platform. SovTech is committed to their values. As well as their ambitions. All of those successful qualities resonated with me. And encouraged me to choose SovTech. This company, I believe, has the skills and expertise to push me to become not only a better Developer, but also a better person. Being one of Africa`s finest custom software development companies simplifies the decision to work with. I still have a lot to learn, but if given the chance, I am confident that I can benefit greatly from every single individual at Sovtech and do amazing things.

         </span>
            
            <Testimonial />

      </div>
    );
}
 
export default SovtechSection;
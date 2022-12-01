import MyValues from "./myvalues";


const ABoutMe = () => {
   return ( 
      <div  id="aboutme" className="text-white bg-gray-900  w-full flex flex-col ">

         <h1 className="m-7 text-center text-4xl font-400"> About Me </h1>

         <span className=" w-11/12 mx-5 justify-self-center text-xl leading-8">

            <p className='text-justify'>
            
            Since graduating from high school in 2018, I have held several positions such as “Cleaner”, “Administrative Assistant”, “Cashier”, and many more. However, I have discovered a job title that is in line with my soul and that is software developer/frontend developer. I have climbed many mountains to get to this point in my life, and I am ready to climb many more to find the pleasure that awaits me not just in my personal life, but also in my profession. Despite having just recently begun to develop, I have entirely lost myself in coding. I am determined and give my all to any assignment assigned to me all I require in return is patience and guidance.

            </p>

            <MyValues />

         </span>

      </div>
    );
}
 
export default ABoutMe;
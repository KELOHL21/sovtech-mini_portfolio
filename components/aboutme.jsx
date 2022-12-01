import MyValues from "./myvalues";


const ABoutMe = () => {
   return ( 
      <div className="text-white bg-gray-900 h-[40vh] w-full flex flex-col ">
         <h1 className="m-10 text-center text-4xl font-400"> About Me </h1>
         <span className="text-justify w-11/12 mx-5 justify-self-center text-lg">
            <p className='text-justify'>
               Since I graduated from High school in 2018 I`ve had many titles uch as `Cleaner`,`Administrative Assistant`,`Cashier`. However i have found that fits with my soul and that is Software Developer / Frontend Developer.I have climbed many mountains to get to this point in my life and I`ve prepare to climb many more and reach the happiness that awaits me from in my life and in my career. I`m determined and i give my all in every task that is given to me,all i ask in return is patience and guidance.
            </p>

            <MyValues />

         </span>
      </div>
    );
}
 
export default ABoutMe;
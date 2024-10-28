import logo from './Images/logo.png'
import cbse from './Images/cbse.avif'
export default function Education(){
    return(<div id="education" className="px-4 m-2">
        <h1 className="mt-20 mb-10 text-center text-5xl font-bold">Education</h1>
        <h2 className="text-2xl text-center">My education has been a journey of self-discovery and growth.My educational details are as follows.</h2>
        <div className="my_education mt-20 mb-5 flex flex-col">
       
        <div className='lg:w-1/2 border-2 bg-zinc-900 border-purple-600 p-3  rounded-lg my-10  '>
            <div className="details flex justify-between mb-5 ">
                <div>
                <img className='w-full h-40 rounded-md' src={logo}></img>
                </div>
                <div className='ml-5'>
                <p className='text-3xl mb-2'>CHITKARA UNIVERSITY</p>
                <p className='text-2xl mb-2'>Bachelor of Computer Application</p>
                <p className='text-xl mb-2'>2022-2025</p>
                </div> 
            </div>
            <h2 className='p-2 text-xl ml-0.5'>
                Grade: 9.06 CGPA
            </h2>
            <p className='text-xl p-2'>
            A Final Year student at Chitkara University enrolled in Bachelor's of Computer Application with a CGPA of 9.06
            </p>
        </div>

<div className='flex justify-end'>
        <div className='lg:w-1/2 border-2 bg-zinc-900 border-purple-600 p-3  rounded-lg  '>
            <div className="details flex justify-between mb-5 ">
                <div>
                <img className='w-full h-40 rounded-md' src={cbse}></img>
                </div>
                <div>
                <p className='text-2xl mb-2'>CBSE(12th)</p>
                <p className='text-xl mb-2'>2021-2022</p>
                </div> 
            </div>
            <h2 className='p-2 text-xl ml-0.5'>
                Grade:85%
            </h2>
            <p className='text-xl p-2'>
            Completed 12Th Class from CBSE in Commerce with a percentage of 85
            </p>
        </div>
        </div>

             
        
                </div>
        </div>)
}
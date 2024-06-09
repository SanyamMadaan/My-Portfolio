import logo from './Images/logo.png'
import cbse from './Images/cbse.avif'
export default function Education(){
    return(<div id="education" className="px-4 m-2">
        <h1 className="mt-20 mb-10 text-center text-4xl font-medium">Education</h1>
        <h2 className="text-xl text-center">My education has been a journey of self-discovery and growth.My educational details are as follows.</h2>
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
                Grade: 9.1 CGPA
            </h2>
            <p className='text-xl p-2'>
            I am currently pursuing a Bachelor's degree in Computer Application at Chitkara University. I have completed 4 semesters and have a CGPA of 9.1 . I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems.
            </p>
        </div>

<div className='flex justify-end'>
        <div className='lg:w-1/2 border-2 bg-zinc-900 border-purple-600 p-3  rounded-lg  '>
            <div className="details flex justify-between mb-5 ">
                <div>
                <img className='w-full h-40 rounded-md' src={cbse}></img>
                </div>
                <div className='ml-5'>
                <p className='text-3xl mb-2'>SpringDales Public School</p>
                <p className='text-2xl mb-2'>CBSE(12th)</p>
                <p className='text-xl mb-2'>2021-2022</p>
                </div> 
            </div>
            <h2 className='p-2 text-xl ml-0.5'>
                Grade:85%
            </h2>
            <p className='text-xl p-2'>
            I have completed my 12th class from CBSE boards and scored 85 percentage
            </p>
        </div>
        </div>

             
        
                </div>
        </div>)
}
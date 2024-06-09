import Navbar from "./Navbar";
import About from "./About";
import Contact from "./Contact";
import Skills from "./Skills";
import Projects from "./Projects";
import Education from "./Education";
const Home=()=>{
    return(
        <>
        <div className=" bg-gray-950 text-white w-full h-full">
            <Navbar/>
            <About/>
            <Skills/>
            <Projects/>
            <Education/>
            <Contact/>
        </div>
        </>
    )
}

export default Home;
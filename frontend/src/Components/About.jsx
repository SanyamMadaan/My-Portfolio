import pic from '../Image/pic.jpg'

const About = () => {
    return (
        <>
            <div className="mt-24 ml-10 lg:mr-10 flex flex-col-reverse lg:flex-row justify-between items-center">
                <div className="w-full lg:w-1/2 mt-2 mb-10 lg:mb-0">
                    <h1 className="mt-5 font-bold text-3xl text-center lg:text-left">Hi, I am <br /> Sanyam Madaan</h1>
                    <br />
                    <p className="text-white text-xl lg:text-left">
                        I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning, I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.
                    </p>
                    <br />
                    <div className="flex justify-center lg:justify-start">
                        <a target="_blank" href="https://drive.google.com/file/d/157UdGclSg0KrLUdXELS8iQj1prNcPTOh/view?usp=drivesdk">
                            <button className="bg-gradient-to-r from-pink-500 to-indigo-600 border-2 border-white p-2 rounded-md mb-2">Check Resume</button>
                        </a>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 flex justify-center items-center mt-1 mb-3 lg:mt-0">
                    <img className="border-2 rounded-full border-purple-500 p-1 w-60 h-60 sm:w-80 sm:h-80 object-cover" src={pic} alt="Profile" />
                </div>
            </div>
        </>
    );
}

export default About;

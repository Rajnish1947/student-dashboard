
import {  useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";
import { BiLike } from "react-icons/bi";

export default function IndexPage() {
  const [events, setEvents] = useState([]);

  //! Fetch events from the server ---------------------------------------------------------------

  return (
    <>
      <main className="flex flex-col md:flex-row items-center h-[calc(100vh-72px)] mx-6 md:mx-16">
        <div className="text-center md:text-left">
          <h1 className=" text-4xl md:text-[108px] leading-tight font-bold">
            Empower Your Future with the Best Education
          </h1>
          <p className="font-semibold text-gray-600 mr-0 md:mr-36 text-lg md:text-xl">
            At the heart of every successful journey is a commitment to growth,
            learning, and discovery. As a student, you hold the power to shape
            your future, armed with the tools, knowledge, and resources that
            will guide you toward your goals. 
            today.
          </p>
          <div className="flex gap-5">
          <a href="/register" className="bg-blue-600 mt-4 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg text-lg transition duration-300">
            Get Started
          </a>
          
        </div>
        </div>
      </main>
    </>
  );
}

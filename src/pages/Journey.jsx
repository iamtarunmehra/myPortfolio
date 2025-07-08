import React from "react";
import { FaBookOpen } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";


const journeySteps = [
  {
    year: "2024-2026",
    title: "Pursuing Bachelor of Arts",
    description:
      "Studying in B.A. Second Year.",
  },
  {
    year: "2025",
    title: "Completed Full Stack Development Course",
    description:
      "Enrolled in a comprehensive MERN stack full-stack development course at WS Cube Tech. Gained solid foundations in HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB.",
  },
  {
    year: "2022-2023",
    title: "Senior Secondary Education",
    description:
      "Completed Sr. Sec. Education (12th) from Govt. Sr. Sec. School Jodhpur.",
  },
  {
    year: "2021-2022",
    title: "Secondary Education",
    description:
      "Completed Sr. Sec. Education (10th) from Shree Mahesh Sr. Sec. School Jodhpur.",
  },
];

export default function Journey() {
  return (
    <div className="min-h-screen overflow-hidden bg-black px-6 py-20 text-white flex flex-col items-center">
      <h1 className="text-5xl font-extrabold mb-16 text-center max-w-4xl">
        Educational Journey
      </h1>

      <div className="relative border-l-4 border-orange-600 w-full max-w-4xl">
        {journeySteps.map(({ year, title, description }, index) => (
          <div
            key={index}
            className="mb-16 ml-10 relative group cursor-default transition-shadow hover:shadow-lg p-6 rounded-lg bg-gray-900/20"
          >
            {/* Circle */}
            <div className="absolute -left-14 top-7 text-orange-500 w-8 h-8 text-[28px]"><FaBookOpen /></div>


            <p className="text-orange-400 font-semibold text-[22px] tracking-[3px] mb-1">
              {year}
            </p>
            <h3 className="text-2xl font-semibold mb-3">{title}</h3>
            <p className="text-gray-300 leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

'use client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const headingRef = useRef();
  const skillsRef = useRef();
  const careerRef = useRef();

  const techStack = [
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS12SMucV1yoXW-nEEb70ZXugC-RC7VM43xFg&s' },
    { name: 'Tailwind CSS', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX5Lhy3AVi5gO_JJOeywcjfSHyfvLHMPPgxw&s' },
    { name: 'Bootstrap', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDDeFWiJwV70GxgegCr1OR-cnD1ZsrrH4-vg&s' },
    { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'Node.js', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_qHDDov_tiwRvpLXXHm__w4rbWBsxoD3E1A&s' },
    { name: 'Express.js', icon: 'https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Mongoose', icon: 'https://miro.medium.com/v2/resize:fit:1400/1*Wdqpcm8EeHlbfjza-qOgew.png' }, // SVG version
    { name: 'Redux Toolkit', icon: 'https://repository-images.githubusercontent.com/347723622/92065800-865a-11eb-9626-dff3cb7fef55' },
    { name: 'Git', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGp2RKrzqJF2Cu3dxnk2RGK_F7SSloJG-Wyw&s' },
    { name: 'GitHub', icon: 'https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png' },
    { name: 'Vercel', icon: 'https://camo.githubusercontent.com/e40cb80a2b7078aaa29e48190c4d665cdfb0a56a0dc871638c7f81efbe230fdb/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313538383830353835382f7265706f7369746f726965732f76657263656c2f6c6f676f2e706e67' },
    { name: 'Render', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYCNbIA-i212X-rroiqrhtFpzIfDAD-2zo7g&s' },
    {name :'UptimeRobot',icon : 'https://play-lh.googleusercontent.com/cUrv0t00FYQ1GKLuOTvv8qjo1lSDjqZC16IOp3Fb6ijew6Br5m4o16HhDp0GBu_Bw8Y=w240-h480-rw'}
  ];


  useEffect(() => {
    // Heading Animation
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power4.out',
      }
    );

    // Skills Animation (from right)
    gsap.fromTo(
      skillsRef.current,
      { x: 1200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: skillsRef.current,
          start: 'top 85%',
          once: true,
        },
      }
    );

    // Career Animation (from left)
    gsap.fromTo(
      careerRef.current,
      { x: -1200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: careerRef.current,
          start: 'top 85%',
          once: true,
        },
      }
    );
  }, []);


  return (
    <main className="min-h-screen bg-black text-white lg:py-18 lg:pt-35 md:px-24 py-5 flex flex-col justify-center lg:gap-18 gap-10">
      {/* ===== INTRODUCTION SECTION ===== */}
      <section className="text-center lg:space-y-12 space-y-4 px-2">
        <h1 ref={headingRef} className="text-5xl mx-auto md:text-7xl font-extrabold leading-tight">
          Hi, I'm <span className="text-[#ff5111]">Tarun Mehra</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300">
          MERN Stack Developer | Problem Solver | Lifelong Learner
        </p>
        <p className="text-md lg:text-center md:text-lg text-gray-400 leading-relaxed">
          I build performant, scalable, and responsive web applications that provide seamless user
          experiences. Passionate about turning ideas into reality through code, I'm constantly exploring
          new technologies and best practices.
        </p>
        <div className="mt-6 flex justify-center gap-8 flex-wrap">
          <Link
            href="https://github.com/iamtarunmehra"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ff5111] text-white px-10 py-3 rounded-[5px] shadow-lg hover:bg-orange-600 hover:rounded-3xl transition-all duration-500 font-semibold"
          >
            Visit GitHub
          </Link>
          <Link
            download
            href="/TarunResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-orange-500 text-orange-500 px-10 py-3 rounded-full hover:bg-orange-100 hover:rounded-3xl transition-all duration-500 font-semibold"
          >
            Download Resume
          </Link>
        </div>
      </section>

      {/* ===== TECH STACK SECTION ===== */}
      <section ref={skillsRef} className="px-2">
        <h2 className="text-4xl border-b-2 border-orange-500 rounded-b-[50%] pb-5 font-semibold text-orange-400 mb-10 text-center tracking-wider">
          Technical Skills & Tools
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 place-items-center text-center">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-full max-w-[140px] gap-3  duration-200 rounded-[15px] p-4"
            >
              <div className="w-24 h-24 bg-white/5 border border-gray-700 rounded-2xl flex items-center justify-center shadow-sm hover:animate-pulse  hover:shadow-orange-500 transition-shadow duration-300">
                <img
                  className="w-14 h-14 object-contain"
                  src={tech.icon}
                  alt={tech.name}
                />
              </div>
              <span className="text-sm md:text-[15px] tracking-[1.5px]">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>


      {/* ===== CAREER GOAL SECTION ===== */}
      <section ref={careerRef} className="text-center px-4 space-y-6">
        <h2 className="text-4xl border-b-2 border-orange-500 rounded-b-[50%] pb-5 font-semibold text-orange-400 mb-8 tracking-wider">
          Career Aspirations
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Currently seeking internship or full-time roles in frontend or full-stack development. I aim to
          collaborate with dynamic teams to build innovative web solutions that make a positive impact.
        </p>
        <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
          Always eager to learn, grow, and contribute to projects where my skills and creativity can shine.
          Let's create something great together!
        </p>
      </section>
    </main>
  );
}

'use client'
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-black text-gray-400 py-10 border-t border-gray-800">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
                {/* Left - Name & Tagline */}
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <h3 className="text-white text-xl font-semibold">Tarun Mehra</h3>
                    <p className="text-sm mt-1">MERN Stack Developer | Jodhpur, India</p>
                </div>

                {/* Middle - Social Icons */}
                <div className="flex gap-5 text-2xl">
                    <Link
                        href="https://github.com/iamtarunmehra"
                        target="_blank"
                        className="hover:text-white transition-all duration-300"
                    >
                        <FaGithub />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/tarun-mehra-059561322/"
                        target="_blank"
                        className="hover:text-[#0A66C2] transition-all duration-300"
                    >
                        <FaLinkedin />
                    </Link>
                    <Link
                        href="mailto:tarunmehra80790@gmail.com"
                        className="hover:text-orange-500 transition-all duration-300"
                    >
                        <FaEnvelope />
                    </Link>
                </div>
            </div>

            {/* Bottom - Copyright */}
            <div className="text-center text-sm mt-6 text-gray-500">
                © {new Date().getFullYear()} Tarun Mehra. All rights reserved.
            </div>
        </footer>
    );
}

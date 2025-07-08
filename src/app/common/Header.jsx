'use client'
import Contact from '@/pages/Contact'
import Home from '@/pages/Home'
import Journey from '@/pages/Journey'
import Projects from '@/pages/Projects'
import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

export default function Header() {

    let [activeTab, setActiveTab] = useState('home')

    return (
        <>
            <header className={`w-full sticky top-0 lg:py-8 py-6 shadow-lg bg-black z-50 shadow-orange-700 text-white '}`}>
                <div className='max-w-[1320px] mx-auto flex sm:flex-row flex-col px-3 gap-y-5 items-center justify-between'>
                    <h2 className="logo text-[25px] animate-pulse text-gray-300 flex items-end gap-[4px] font-bold font-[Poppins]">
                        <span className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-orange-600  text-white lg:text-[30px] text-[25px] font-bold">
                            T
                        </span>
                        arun Mehra
                    </h2>


                    <div className='flex px-2 gap-4 items-center'>

                        <div className='grid grid-cols-4 justify-between bg-[#101010] rounded overflow-hidden'>
                            {['home', 'projects', 'journey', 'contact'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`${activeTab === tab ? 'bg-[#ff5111] ' : 'bg-[#101010] '} uppercase font-semibold cursor-pointer lg:text-[15px] text-[12px] duration-500 transition-all ease-linear lg:px-[8px] lg:w-[120px] lg:py-[10px] px-3 py-3`}
                                >
                                    {tab.replace(/-/g, ' ')}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </header>

            <main className={`w-full overflow-hidden min-h-screen bg-black '}`}>

                <div className='max-w-[1320px] mx-auto'>
                    {activeTab === 'home' && <Home />}
                    {activeTab === 'projects' && <Projects />}
                    {activeTab === 'journey' && <Journey />}
                    {activeTab === 'contact' && <Contact />}
                </div>
            </main>
        </>
    )
}

"use client";
import React, { useState, useEffect } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-xl py-4 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
            <div className="flex-shrink-0">
                <span className="text-xl font-black tracking-tighter text-[#1a237e]">
                CML.REPLAN<span className="text-indigo-600">.</span>
                </span>
            </div>

            <div className="hidden md:block">
                <div className="ml-10 flex items-center space-x-10">
                {navLinks.map((link) => (
                    <a
                    key={link.name}
                    href={link.href}
                    className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 hover:text-indigo-600 transition-colors"
                    >
                    {link.name}
                    </a>
                ))}
                <a href="https://drive.google.com/file/d/11JhOYnqKX3ZCKSDjS1PzXMLQqOnTFnY1/view?" className="text-[10px] font-black uppercase tracking-[0.2em] bg-[#1a237e] text-white px-5 py-2.5 hover:bg-indigo-600 transition-all">
                    RESUME
                </a>
                </div>
            </div>

            <div className="md:hidden">
                <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-[#1a237e]"
                >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
                </button>
            </div>
            </div>
        </div>

        {isMenuOpen && (
            <div className="md:hidden bg-white h-screen fixed inset-0 z-40 flex flex-col items-center justify-center space-y-8">
            {navLinks.map((link) => (
                <a
                key={link.name}
                href={link.href}
                className="text-3xl font-black text-[#1a237e] uppercase tracking-tighter"
                onClick={() => setIsMenuOpen(false)}
                >
                {link.name}
                </a>
            ))}
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-6 p-4">
                <svg className="h-8 w-8 text-[#1a237e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            </div>
        )}
        </nav>
    );
};

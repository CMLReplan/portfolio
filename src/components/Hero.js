
import React from 'react';
import { NAME, ROLE, BIO } from '@/lib/constants';

export default function Hero() {
    return (
        <section id="about" className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-[#fafafa]">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#1a237e] hidden lg:block -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

            <div className="flex-1 text-left order-2 lg:order-1">
                <div className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-[0.2em] text-indigo-600 uppercase border-l-4 border-indigo-600">
                Available for New Opportunities
                </div>
                <h1 className="text-6xl md:text-8xl font-black text-[#1a237e] leading-[0.9] tracking-tighter mb-8">
                {NAME.split(' ').map((word, i) => (
                    <span key={i} className="block">{word}</span>
                ))}
                </h1>
                <div className="h-1 w-24 bg-indigo-600 mb-8"></div>
                <p className="text-xl md:text-2xl font-medium text-gray-500 mb-4">{ROLE}</p>
                <p className="text-lg text-gray-600 max-w-xl mb-10 leading-relaxed font-light">
                {BIO}
                </p>

                <div className="flex flex-wrap gap-6">
                <a href="#projects" className="group relative px-8 py-4 bg-[#1a237e] text-white rounded-none font-bold overflow-hidden transition-all">
                    <span className="relative z-10">VIEW WORK</span>
                    <div className="absolute inset-0 bg-indigo-500 transform translate-y-full group-hover:translate-y-0 transition-transform"></div>
                </a>
                <a href="#contact" className="px-8 py-4 bg-transparent text-[#1a237e] border-2 border-[#1a237e] rounded-none font-bold hover:bg-[#1a237e] hover:text-white transition-all">
                    CONTACT ME
                </a>
                </div>
            </div>

            <div className="relative flex-shrink-0 order-1 lg:order-2">
                <div className="relative w-72 h-96 md:w-[400px] md:h-[500px]">
                {/* Unique framing */}
                <div className="absolute top-8 -left-8 w-full h-full border-4 border-[#1a237e] -z-10"></div>
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-indigo-100 -z-10 rounded-full blur-2xl"></div>

                <img
                    src="assets/photo1.jpg"
                    alt={NAME}
                    className="w-full h-full object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                />

                <div className="absolute bottom-0 left-0 bg-[#1a237e] text-white p-6 -translate-x-12 translate-y-12 hidden md:block">
                    <p className="text-4xl font-black">BS CpE</p>
                    <p className="text-xs tracking-widest uppercase opacity-70">Computer Engineer</p>
                </div>
                </div>
            </div>

            </div>
        </div>
        </section>
    );
};
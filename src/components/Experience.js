
import React from 'react';
import { EXPERIENCE } from "@/lib/constants";

export default function Experience() {
    return (
        <section id="experience" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/3">
                <h2 className="text-4xl font-black text-[#1a237e] mb-6">WORK HISTORY</h2>
                <div className="h-1 w-16 bg-indigo-600 mb-6"></div>
                <p className="text-gray-500 leading-relaxed font-light">
                A timeline of my professional journey in backend engineering, CMS management, and ICT support across government and private sectors.
                </p>
            </div>

            <div className="md:w-2/3 space-y-12">
                {EXPERIENCE.map((exp, idx) => (
                <div key={idx} className="relative pl-8 border-l border-gray-100 group">
                    <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 bg-gray-200 group-hover:bg-indigo-600 rounded-full transition-colors"></div>
                    <div className="mb-2 flex flex-col md:flex-row md:items-baseline md:justify-between">
                    <h3 className="text-xl font-bold text-gray-900 uppercase tracking-tight">{exp.role}</h3>
                    <span className="text-sm font-bold text-indigo-600">{exp.period}</span>
                    </div>
                    <p className="text-indigo-400 text-sm font-bold mb-4 uppercase tracking-widest">{exp.company}</p>
                    <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-600 flex items-start text-sm">
                        <span className="mr-3 text-indigo-300">•</span>
                        {item}
                        </li>
                    ))}
                    </ul>
                </div>
                ))}
            </div>
            </div>
        </div>
        </section>
    );
};

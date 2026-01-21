
import React from 'react';
import { SKILLS } from '@/lib/constants';

export default function Skills() {
    const categories = Array.from(new Set(SKILLS.map(s => s.category)));

    return (
        <section id="skills" className="py-24 bg-[#1a237e] text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none overflow-hidden">
            <div className="text-[20rem] font-black absolute -bottom-20 -left-20">TECH</div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20">
            <h2 className="text-4xl font-black tracking-tighter sm:text-5xl uppercase">Technical Stack</h2>
            <p className="mt-4 text-indigo-200 font-light max-w-2xl mx-auto">
                My foundation lies in Computer Engineering, evolved through years of PHP backend work and modern React frontend practices.
            </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {categories.map((category) => (
                <div key={category} className="space-y-6">
                <h3 className="text-sm font-black text-indigo-400 uppercase tracking-[0.3em] border-b border-indigo-500 pb-2">
                    {category}
                </h3>
                <div className="flex flex-wrap gap-3">
                    {SKILLS.filter(s => s.category === category).map((skill) => (
                    <div key={skill.name} className="group relative">
                        <div className="px-4 py-2 bg-white/10 hover:bg-white text-white hover:text-[#1a237e] text-xs font-bold uppercase tracking-wider transition-all duration-300">
                        {skill.name}
                        </div>
                    </div>
                    ))}
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
};

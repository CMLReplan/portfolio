
import React from 'react';
import { PROJECTS } from '@/lib/constants';

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Featured Projects</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Hands-on applications built during work and personal learning journey.
            </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
                <div key={project.id} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative aspect-video overflow-hidden">
                    <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div className="flex gap-4">
                        {project.github && (
                        <a href={project.github} className="text-white hover:text-indigo-200 font-medium text-sm">GitHub</a>
                        )}
                        <a href={project.link} className="text-white hover:text-indigo-200 font-medium text-sm">Live Demo</a>
                    </div>
                    </div>
                </div>
                <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 rounded-md">
                        {tag}
                        </span>
                    ))}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                    </p>
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
};

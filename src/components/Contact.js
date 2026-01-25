"use client";
import React from "react";
import {HiOutlineBadgeCheck} from "react-icons/hi";
import { CERTIFICATES } from "@/lib/constants";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            {/* Certifications */}
            <div className="mb-12">
              <h3 className="text-sm font-black text-indigo-300 uppercase tracking-[0.3em] mb-6">
                Certifications
              </h3>

              <div className="space-y-6">
                {CERTIFICATES.map((cert) => (
                  <div
                    key={`${cert.name}-${cert.date}`}
                    className="group relative pl-10"
                  >
                    {/* Timeline line */}
                    <div className="absolute left-[18px] top-0 bottom-0 w-px bg-indigo-400/30" />

                    {/* Icon */}
                    <div className="absolute left-0 top-1 w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg transition-shadow group-hover:shadow-indigo-500/40">
                      <HiOutlineBadgeCheck className="w-5 h-5 text-white" />
                    </div>

                    {/* Card */}
                    <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-5 hover:bg-white/15 transition-all">
                      <p className="font-bold text-white leading-snug">
                        {cert.name}
                      </p>
                      <p className="text-indigo-200 text-sm mt-1">
                        {cert.issuer} • {cert.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>


            <h2 className="text-4xl font-extrabold mb-6">
              Let&apos;s build something{" "}
              <span className="text-indigo-300">extraordinary</span> together.
            </h2>

            <p className="text-indigo-100 text-lg mb-8">
              I&apos;m currently looking for new opportunities and collaborations.
              Whether you have a question or just want to say hi, my inbox is
              always open!
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-indigo-800 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <span>mattreplan@gmail.com</span>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-indigo-800 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <span>Remote</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-2xl text-gray-900">
            <form
              action="https://formspree.io/f/xojjyqjb"
              method="POST"
              className="space-y-6"
            >
              {/* Formspree helpers */}
              <input
                type="hidden"
                name="_subject"
                value="New Portfolio Message"
              />
              <input
                type="hidden"
                name="_next"
                value="https://portfolio-ruby-two-icrt7lpso8.vercel.app/thank-you"
              />

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Your Name
                </label>
                <input
                  name="name"
                  required
                  type="text"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Email Address
                </label>
                <input
                  name="email"
                  required
                  type="email"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                  placeholder="How can I help you?"
                />
              </div>

              <button
                className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg flex items-center justify-center disabled:opacity-50"
                type="submit"
              >
                Send Message
              </button>

              <p className="text-xs text-gray-500 pt-2">
                Prefer email? Write me at{" "}
                <a
                  className="text-indigo-600 font-semibold hover:underline"
                  href="mailto:mattreplan@gmail.com"
                >
                  mattreplan@gmail.com
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

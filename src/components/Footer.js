import React from "react";
import { YEAR } from "@/lib/constants";
import { SiGithub, SiLinkedin, SiFacebook } from "react-icons/si";

export default function Footer() {

    return (
        <footer className="bg-[#0f172a] text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <p className="text-sm">
                    © {YEAR} Carl Mathew L. Replan. All rights reserved.
                </p>

                <div className="flex items-center gap-6">
                    <SocialIcon
                    href="https://github.com/CMLReplan"
                    label="GitHub"
                    Icon={SiGithub}
                    />
                    <SocialIcon
                    href="https://www.linkedin.com/in/carl-mathew-replan-b76327204/"
                    label="LinkedIn"
                    Icon={SiLinkedin}
                    />
                    <SocialIcon
                    href="https://www.facebook.com/mattyreplan/"
                    label="Facebook"
                    Icon={SiFacebook}
                    />
                </div>
            </div>
        </div>
        </footer>
    );
}

function SocialIcon({ href, label, Icon }) {
    return (
        <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        title={label}
        className={[
            "group inline-flex items-center justify-center",
            "w-11 h-11 rounded-full",
            "bg-white/5 border border-white/10",
            "text-gray-300",
            "transition-all duration-200",
            "hover:text-white hover:bg-white/10 hover:border-white/20",
            "hover:-translate-y-1 hover:scale-110",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/60",
        ].join(" ")}
        >
        <Icon className="w-5 h-5 transition-transform duration-200 group-hover:rotate-[-8deg]" />
        </a>
    );
}

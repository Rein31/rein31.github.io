"use client"

import { montserrat } from "@/lib/font";

const About = () => {
    return (
        <div className={`${montserrat.className} min-h-screen max-h-full bg-white text-black w-full flex`}>
            <div className="flex flex-col mt-20 w-[80%] mx-10 gap-8">
                <div className="flex flex-col gap-1">
                    <p className={`text-3xl font-semibold`}>About Me</p>
                    <p className={`text-lg font-medium`}>
                        My goal is to become a full stack developer. But as for now I'm focusing
                        as a frontend developer first. And i realize i still lacking a lot in many aspects, 
                        that's why I'm willing to learn so i could grow to be better.
                    </p>
                </div>
                <div className="flex flex-col gap-1">
                    <p className={`text-xl font-medium`}>Technical</p>
                    <p className={`text-base font-normal`}>
                        The tech that i mainly used right now is Nextjs with typescript and the css is tailwind.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;
"use client"

import { montserrat } from "@/lib/font"
import { useRef } from "react";
import emailjs from '@emailjs/browser';

const ContactMe = () => {

    const form = useRef<any>();

    const sendEmail = (e: any) => {
        e.preventDefault();

        emailjs
        .sendForm('service_vp4g8ae', 'template_lu1jyik', form.current, {
            publicKey: 'ULXivuD0v2KraGJmp',
        })
        .then(
            () => {
            console.log('SUCCESS!');
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
        );
    };

    return (
        <form
            ref={form}
            onSubmit={sendEmail}
            className="w-full"
        >
            <div className={`${montserrat.className} min-h-screen max-h-full bg-white text-black w-full flex`}>
                <div className="flex flex-col mt-20 w-[80%] mx-10 gap-8">
                    <p className={`text-3xl font-semibold`}>Contact Me</p>
                    <div className="flex flex-col gap-5 w-[70%]">
                        <div className="flex flex-col gap-2">
                            <p className="text-lg font-medium">Your Name</p>
                            <input 
                                type="text" 
                                id="default-input" 
                                name="user_name"
                                className="bg-slate-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-0 focus:outline-none block w-full p-2.5" 
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-lg font-medium">Your Email</p>
                            <input 
                                type="email" 
                                id="default-input" 
                                name="user_email"
                                className="bg-slate-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-0 focus:outline-none block w-full p-2.5" 
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-lg font-medium">Message</p>
                            <textarea
                                name="message"
                                rows={6} 
                                className="bg-slate-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-0 focus:outline-none block w-full p-2.5"
                            />
                        </div>
                        <button 
                            type="submit"
                            className={`border rounded-xl font-medium w-full p-4 mt-5 transition ease-in-out delay-75 bg-black text-white hover:bg-white hover:text-black duration-100`}>
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default ContactMe;
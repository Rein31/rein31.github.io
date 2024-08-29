"use client"

import { montserrat } from "@/lib/font";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";
import About from "@/components/about";
import ListProject from "@/components/list-project";
import ContactMe from "@/components/contact-me";
import MyPicture from "@/components/my-picture";
import Modal from "@/components/modal";
import { ProjectList } from "@/lib/project-list";
import { IoClose } from "react-icons/io5";
import emailjs from '@emailjs/browser';

export default function Home() {
  const [activeSplit, setActiveSplit] = useState<boolean>(true);
  const [showPicture, setShowPicture] = useState<boolean>(false);
  const [showClose, setShowClose] = useState<boolean>(false);
  const [showBack, setShowBack] = useState<boolean>(false);
  const [showNext, setShowNext] = useState<boolean>(false);
  const [showPrev, setShowPrev] = useState<boolean>(false);
  const [showNextComponent, setShowNextComponent] = useState<boolean>(false);
  const [currentComponentIndex, setCurrentComponentIndex] = useState(-1);
  const [showModal, setShowModal] = useState<boolean>(false)
  const [selectedProject, setSelectedProject] = useState<any>(null)
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

  const handleShowModal = (data:any) => {
      setShowModal(true);
      setSelectedProject(data)
  }

  const handleCloseModal = () => {
      setShowModal(false);
      setSelectedProject(null)
  }

  const handleActiveSplit = () => {
    setActiveSplit(!activeSplit);

    if (activeSplit == false) {
      setShowPicture(false);
      setShowClose(false);
      setShowBack(false);
      setShowNext(false);
      setShowPrev(false);
      setShowNextComponent(false);
    }
  }

  const handleClose = () => {
    setActiveSplit(false);
    setShowPicture(false);
    setShowClose(false);
    setShowBack(false);
    setShowNext(false);
    setShowPrev(false);
    setShowNextComponent(false);
    setCurrentComponentIndex(-1);
  }

  useEffect(() => {
    if (activeSplit) {
      const timer = setTimeout(() => {
        setShowPicture(true);
      }, 1000); // Wait for the text to be fully visible before showing the picture

      return () => clearTimeout(timer);
    } else {
      setShowPicture(false);
    }
  }, [activeSplit]);

  useEffect(() => {
    if (showPicture) {
      const timer = setTimeout(() => {
        setShowNext(true);
        setShowClose(true);
      }, 1000);

      return () => clearTimeout(timer);
    } else {
      setShowNext(false);
      setShowClose(false);
    }
  }, [showPicture]);

  const components = [
    // <MyPicture />,
    <About />,
    <ListProject />,
    <ContactMe />,
  ]

  // const handleNextClick = () => {
  //   setShowNextComponent(false); // Hide the current component first
  //   setTimeout(() => {
  //     setCurrentComponentIndex((prevIndex) => {
  //       const nextIndex = Math.min(prevIndex + 1, components.length - 1);
  //       setShowNextComponent(true); // Show the next component
  //       setShowPrev(true);
  //       return nextIndex;
  //     });
  //   }, 500)

  //   if (currentComponentIndex == components.length - 2) {
  //     setShowNext(false)
  //     setShowPrev(true)
  //   }
  // };

  // const handlePrevClick = () => {
  //   setShowNextComponent(false); // Hide the current component first
  //   setTimeout(() => {
  //     setCurrentComponentIndex((prevIndex) => {
  //       const nextIndex = Math.max(prevIndex - 1, 0);
  //       setShowNextComponent(true); // Show the previous component
  //       return nextIndex;
  //     });
  //   }, 500)

  //   if (currentComponentIndex == 1) {
  //     setShowPrev(false)
  //     setShowNext(true)
  //   } else {
  //     setShowPrev(true)
  //     setShowNext(true)
  //   }
  // };

  return (
    <main className={`${montserrat.className} text-white min-h-screen max-h-full flex flex-row bg-black gap-5`}>
      <div className={`w-full flex xl:flex-row justify-center relative`}>
        <motion.div
          className="flex justify-center relative"
          initial={{ width: '100%' }}
          animate={{ width: activeSplit ? '50%' : '100%' }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="flex flex-col gap-3 fixed"
            initial={{ width: '600px' }}
            transition={{ duration: 0.5 }}
            style={{
              left: activeSplit ? '25%' : '50%', // Change position based on activeSplit
              top: '50%', // Keep vertical centering consistent
              transform: activeSplit ? 'translate(-50%, -50%)' : 'translate(-50%, -50%)', // Keep centered or shift left
            }}
          >
            <h1 className={`text-4xl font-semibold`}>
              Hello.I&apos;m a Frontend Developer
            </h1>
            <p className="text-xl font-medium">
              My name&apos;s Reinaldi. I create user interface using modern frontend web tecnologies
            </p>
            {/* <button 
              onClick={handleActiveSplit}
              className={`border rounded-xl font-medium w-fit p-4 mt-5 transition ease-in-out delay-75 hover:bg-white hover:text-black duration-100`}
            >
              Find out more about me!
            </button> */}
            <div className="flex flex-col gap-1 w-fit mt-40">
              <p className="text-base">
                Find me at {" "}
                <Link href={`https://www.linkedin.com/in/reinaldi-oembaran-216b52172/`} passHref legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer">
                    <span className="underline font-semibold">Linkedin</span>
                  </a>
                </Link>
                .
              </p>
              <p className="tex-base">
                Download {" "}
                <span className="underline font-semibold">my resume</span>
                {" "} (PDF XXXkb)
              </p>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: activeSplit ? '50%' : '0%' }}
          transition={{ duration: 1 }}
          className="bg-white h-full overflow-hidden relative"
        >
        {/* {!showPicture && (
          <motion.div
            className="flex w-full h-full justify-center items-center flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: activeSplit ? 1 : 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <div className="w-[55%]">
              <p className="text-4xl text-black">
                If you are wondering how I look, here&apos;s a picture of me
              </p>
            </div>
          </motion.div>
        )} */}
        {showPicture && (
          <motion.div
            className="w-full h-full relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* <div className={`bg-[url(/images/Berkas_Photo_1.jpg)] w-full h-full bg-no-repeat bg-cover relative`} /> */}
            <div className={`${montserrat.className} min-h-screen max-h-full bg-white text-black w-full flex flex-col`}>
              <div className="flex flex-col mt-20 w-[80%] mx-10 gap-8">
                {/* about me */}
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

                {/* list project */}
                <div className={`${montserrat.className} bg-white text-black w-full flex`}>
                  <div className="flex flex-col mt-20 w-[80%] mx-10 gap-8">
                    <p className={`text-3xl font-semibold`}>List Project</p>
                    <div className="grid grid-cols-2 gap-4">
                    {ProjectList?.data?.map((data: any, index: number) => {
                      return (
                        <div  key={`projectList${index}`} >
                          <div 
                            onClick={() => handleShowModal(data)}
                            className="border rounded-[10px] border-[#131313] p-2 hover:bg-slate-300 cursor-pointer"
                          >
                            <p>{data?.title}</p>
                          </div>
                            {/* Show modal detail of project */}
                            <Modal isOpen={showModal} onClose={handleCloseModal} isPadding={"md:p-0 p-6"}>
                              <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none shadow-lg w-full focus:outline-none">
                                <div className="flex flex-col bg-white w-[700px] rounded-lg gap-y-4 px-12 py-12 relative">
                                  <div 
                                    onClick={handleCloseModal}
                                    className="absolute top-4 right-4 cursor-pointer"
                                  >
                                    <IoClose 
                                        color="red"
                                        size={28}
                                    />
                                  </div>
                                  <p className={`text-2xl font-semibold`}>{selectedProject?.title}</p>
                                  <p className={`text-lg font-normal`}>{selectedProject?.tech}</p>
                                  <p className={`text-lg font-normal`}>{selectedProject?.description}</p>
                                </div> 
                              </div>
                            </Modal>
                          </div>
                        )
                    })}
                  </div>
                </div>
              </div>

              {/* contact me */}
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
            </div>

          </motion.div>
        )}
        {/* {showNextComponent && (
          <motion.div
            key={currentComponentIndex} // Add the key here
            className="absolute inset-0 bg-white flex items-center justify-center"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            {components[currentComponentIndex]}
          </motion.div>
        )} */}
        {showClose && (
          <motion.div
            className="absolute top-5 right-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <button
              onClick={handleClose}
            >
              <IoCloseCircleOutline  
                size={30}
                color="red"
              />
            </button>
          </motion.div>
        )}
        {showBack && (
          <motion.div
            className="absolute top-5 left-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <IoMdArrowRoundBack 
              size={30}
              color="blue"
            />
          </motion.div>
        )}
        {/* {showNext && (
          <motion.div
            className="absolute bottom-5 right-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <button
              onClick={handleNextClick}
              className={`border rounded-xl w-fit py-2 px-4 mt-5 transition ease-in-out delay-75 bg-black text-white hover:bg-white hover:text-black duration-100`}
            >
              Next
            </button>
          </motion.div>
        )} */}
        {/* {showPrev && (
          <motion.div
            className="absolute bottom-5 left-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <button 
              onClick={handlePrevClick}
              className={`border rounded-xl w-fit py-2 px-4 mt-5 transition ease-in-out delay-75 bg-black text-white hover:bg-white hover:text-black duration-100`}
            >
              Prev
            </button>
          </motion.div>
        )} */}
      </motion.div>
      </div>
    </main>
  );
}

"use client"

import { montserrat } from "@/lib/font";
import { ProjectList } from "@/lib/project-list";
import Modal from "./modal";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const ListProject = () => {
    const [showModal, setShowModal] = useState<boolean>(false)
    const [selectedProject, setSelectedProject] = useState<any>(null)

    const handleShowModal = (data:any) => {
        setShowModal(true);
        setSelectedProject(data)
    }

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedProject(null)
    }

    return (
        <div className={`${montserrat.className} min-h-screen max-h-full bg-white text-black w-full flex`}>
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
    )
}

export default ListProject;
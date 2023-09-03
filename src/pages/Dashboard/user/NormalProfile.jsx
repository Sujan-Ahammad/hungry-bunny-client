import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { AiOutlineMail, AiOutlinePhone, AiFillFacebook, AiFillInstagram, AiFillGithub } from "react-icons/ai";
import useUserSecure from '../../../hooks/useUserSecure';
import { useAuth } from '../../../hooks/useAuth';

const NormalProfile = () => {
    const { user: firebaseUser } = useAuth();
    const [user] = useUserSecure(firebaseUser?.email);
    console.log(user)


    return (
        <>
            {/* New Profile */}
            <div className='mb-10'>
                <div className='mt-20'>
                    <h1 className='text-2xl font-bold mb-5'>My Profile</h1>
                </div>

                <div className='w-full rounded-xl  bg-clip-border text-gray-700 shadow-md'>
                    <h1 className='text-center text-3xl p-5'>Personal Information</h1>
                    <div className="flex justify-between w-full rounded-xl  bg-clip-border text-gray-700 shadow-md">
                        <div className=" w-50 shrink-0 overflow-hidden rounded-2xl text-start bg-clip-border text-gray-700 flex justify-between">
                            <img className='h-[180px] w-[180px] rounded-full  text-start  p-2' src={user?.photo} alt="" />

                            <div className="p-6 max-w-[25rem]">
                                <h6 className="mb-4 border-b-2 block font-sans text-2xl font-semibold uppercase leading-relaxed tracking-normal text-black antialiased">
                                    {user?.name}
                                </h6>
                                <h6 className="mb-4 border-b-2 block font-sans text-lg font-semibold leading-relaxed tracking-normal text-black antialiased">
                                    Web developer (Mern-stack)
                                </h6>
                                <div className='flex justify-between max-w-3xl'>
                                    <div className="flex items-center">
                                        <FaMapMarkedAlt className='text-lg mr-2 mb-3' />
                                        <h6 className="mb-4 font-sans text-md font-semibold leading-relaxed tracking-normal text-black antialiased">
                                            Address
                                        </h6>
                                    </div>
                                    <div className="flex items-center">
                                        <FaMapMarkerAlt className='text-lg mr-2 mb-3' />
                                        <h6 className="mb-4 font-sans text-md font-semibold leading-relaxed tracking-normal text-black antialiased">
                                            Location
                                        </h6>
                                    </div>
                                </div>
                                <div className='flex justify-evenly'>
                                    <span className='text-center'>
                                        <h1 className='text-3xl mt-16'>113</h1> <br />
                                        <p className='text-md'>Projects</p>
                                    </span>
                                    <span className='text-center'>
                                        <h1 className='text-3xl mt-16'>12.2k</h1> <br />
                                        <p className='text-md'>Followers</p>
                                    </span>
                                    <span className='text-center'>
                                        <h1 className='text-3xl mt-16'>128</h1> <br />
                                        <p className='text-md'>Following</p>
                                    </span>
                                </div>
                            </div>

                        </div>
                        <div className='p-5'>

                            <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded p-2 ms-2 flex items-center'><FaPlus className='text-md mr-2' />  Follow</button>
                        </div>
                    </div>
                </div>

                <div className='my-10'>
                    <h1><span className='text-2xl font-bold'>Links:</span> <br />
                        <a target='_blank' href="https://hungry-bunny-web.web.app/" rel="noreferrer">https://hungry-bunny-web.web.app</a> <br />
                        <a target='_blank' href="https://hungry-bunny-web.web.app/" rel="noreferrer">https://hungry-bunny-web.web.app</a>
                    </h1>
                </div>
                <div className='my-10'>
                    <h1><span className='text-2xl font-bold'>Contact Information:</span> <br />

                    </h1>
                    <div className="flex items-center">
                        <AiOutlineMail className='text-md mr-2 mb-3' />
                        <h6 className="mb-4 font-sans text-md font-semibold leading-relaxed tracking-normal text-black antialiased">
                            hanryrobart@gmail.com
                        </h6>
                    </div>
                    <div className="flex items-center">
                        <AiOutlinePhone className='text-lg mr-2 mb-3' />
                        <h6 className="mb-4 font-sans text-md font-semibold leading-relaxed tracking-normal text-black antialiased">
                            +(555) 555-1234
                        </h6>
                    </div>
                    <div className="flex items-center">
                        <FaMapMarkerAlt className='text-lg mr-2 mb-3' />
                        <h6 className="mb-4 font-sans text-md font-semibold leading-relaxed tracking-normal text-black antialiased">
                            Location
                        </h6>
                    </div>
                </div>
                <div className='my-10'>
                    <h1><span className='text-2xl font-bold'>Social Networks:</span>

                    </h1>
                    <div className='flex justify-evenly max-w-[10rem] my-5'>
                        <span><AiFillFacebook className='text-2xl' /></span>
                        <span><AiFillGithub className='text-2xl' /></span>
                        <span><AiFillInstagram className='text-2xl' /></span>
                    </div>

                </div>
            </div>

        </>
    );
};

export default NormalProfile;
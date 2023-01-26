import type { NextPage } from "next";
// import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import img from "../public/banner.svg";
import { BiChevronDown } from "react-icons/bi"
import  toast, {Toaster}  from "react-hot-toast";

const QrConfirmed = () => {
    const clientName=[
        {
            name:"Srinivas",
            address:"India",
        },
    ];
    const [user, setUser]=useState("");
    const handleSubmit=()=>{
        return <h1>{user}</h1>;
    }
    const icon = () =>{
        return <BiChevronDown size={30} color={"blue"} className="" />;
    }
    const notify=()=>{
        toast.success("Please wait! Submitting...")
    }
    return (
        
        <div className="flex min-h-screen flex-row">
            <div className=" flex flex-col w-[631px] h-[1024px] bg-[#F0F5FF]">
                <h2 className="text-blue-700 text-[23px] font-[800px] mt-[57px] mx-[65px]"><Link href="/"><strong>Quick</strong><span className="text-black font-[400px]">Docs</span></Link></h2>
                <Image src={img} className="flex items-center mx-[150px] mt-[160px]" width="269" height="548.83"  alt="image"></Image>
            </div>
            <div className="flex flex-col w-[809px] h-[1024px] ">
                {clientName.map((value, index)=>{
                    return <h2 className="mt-[121px] mx-4 font-[800px] text-black text-[32px] leading-[47.04px]">Thanks, {value.name}</h2>;
                })}
                <p  className="mx-4 mt-4 text-black text-[20px] font-[400px] leading-[29.4px]">Set of QR code is sent to your mailing address depending on the available service area</p>
                <p className="mx-4 text-gray-500 text-[15px] font-[400px] leading-[22.04px]">Note: Not all the cities are covered right now. We will be there soon.</p>
                <h1 className="mt-8 mx-4  text-black text-[16px] font-[700px] leading-[23.52px]"><b>Mailing Address</b></h1>
                <form className="mt-4 mx-2" onSubmit={handleSubmit}>
                {/* <div className="flex flex-row"> */}
                    <span className="mx-2 my-4">
                    
                    
                       
                    <input type="text"  placeholder="Select City" className="mx-2 w-[300px] h-[69px] text-xl border rounded border-blue-700 pointer-events-auto px-8 focus:outline-none  hover:border-blue-700 hover:shadow-lg" />
                    {/* <BiChevronDown size={30} color={"blue"} className="" /> */}
                    
                    
                    <input type="text" placeholder="Zip" className="mx-2 w-[285px] h-[69px] text-xl border rounded border-blue-700 pointer-events-auto px-8 focus:outline-none  hover:border-blue-700 hover:shadow-lg" />

                    </span>
                    {/* </div> */}
                    <span className="mx-2 my-4">
                    <input type="text" placeholder="Door no" className="mx-2 mt-2 w-[300px] h-[69px] text-xl border rounded border-blue-700 pointer-events-auto px-8 focus:outline-none hover:border-blue-700 hover:shadow-lg"    />
                    <input type="text" placeholder="Street" className="mx-2 mt-2 w-[285px] h-[69px] text-xl border rounded border-blue-700 pointer-events-auto px-8 focus:outline-none  hover:border-blue-700 hover:shadow-lg" />
                    </span>
                    <input type="text" placeholder="Address Line" className="mt-4 mx-4 w-[599px] h-[69px] text-xl border rounded border-blue-700 pointer-events-auto px-8 focus:outline-none  hover:border-blue-700 hover:shadow-lg" />
                    <input type="text" placeholder="Contact no" className="mt-4 mx-4 w-[404px] h-[69px] text-xl border rounded border-blue-700 pointer-events-auto px-8 focus:outline-none  hover:border-blue-700 hover:shadow-lg" />
                    <br />
                    <button type="submit" onClick={notify} className="mt-[41px] mx-4 text-center w-[412px] h-[53px] rounded    bg-blue-800 py-1.5 px-2 text-sm font-medium text-white hover:bg-indigo-900  focus:ring-1 focus:ring-indigo-500 focus:ring-offset-2">Submit</button>
                </form>
            </div>
                <Toaster position="top-center" />
        </div>

    )
}
export default QrConfirmed;
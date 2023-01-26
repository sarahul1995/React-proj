import type { NextPage } from "next";
// import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import img from "../public/banner.svg";
import img1 from "../public/ok.png";

const QrMailed = () => {
    const clientName = [
        {
            name: "Srinivas",
            address: "13/4, 1st cross, Annayappa Garden, Jaraganahalli,JP Nagar, Bengaluru - 560078"
        },
    ];
    const [user, setUser] = useState("");
    const handleSubmit = () => {
        return <h1>{user}</h1>;
    }
    return (

        <div className="flex min-h-screen flex-row">
            <div className=" flex flex-col w-[631px] h-[1024px] bg-[#F0F5FF]">
                <h2 className="text-blue-700 text-[23px] font-[800px] mt-[57px] mx-[65px]"><Link href="/"><strong>Quick</strong><span className="text-black font-[400px]">Docs</span></Link></h2>
                <Image src={img} className="flex items-center mx-[150px] mt-[160px]" width="269" height="548.83" alt="image"></Image>
            </div>
            <div className="flex flex-col w-[809px] h-[1024px] ">
                <div className="mt-[200px]">
                        
                        {clientName.map((value, index) => {
                            return <span><Image src={img1} className="ml-4"  alt="img1"></Image><h1 className=" mx-[158px] text-black font-[800px] text-[32px] leading-[47.04px]"><b>Thanks, {value.name}</b></h1></span>
                        })}
                    
                </div>
                <p className="mx-[158px] text-black font-[500px] text-[20px] leading-[29.4px]">On boarding kit will be sent to your mailing address.</p>
                <p className="mx-[158px] mt-[66px] text-gray-500 font-[300px] text-[20px] leading-[29.4px]">Your mailing address:</p>
                {clientName.map((value, index) => {
                    return <h3 className="mx-[158px] text-black font-[500px] text-[20px] leading-[29.4px]">{value.address}</h3>
                })}
                <p className="mx-[158px] mt-[150px] text-gray-500 font-[300px] text-[20px] leading-[29.4px]"><Link href="/">Return to homepage</Link></p>
            </div>

        </div>

    )
}
export default QrMailed
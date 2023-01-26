import type { NextPage } from "next";
import Link from "next/link";

const Footer = () => {
    return(
        <div className="">
            <h3 className="ml-12 text-blue-600 font-[400px]">Quick<span className="font-normal text-black text-[200px]">Docs</span></h3>
            <span className="mt-10 ml-20 text-black text-sm">
                <Link href={"/"}>Contact us</Link>
                <Link href={"/"}>About us</Link>
                <h4 className="text-black">&copy2022 Copyright Quickdocs. All rights reserved.</h4>
            </span>
        </div>
    )
}

export default Footer
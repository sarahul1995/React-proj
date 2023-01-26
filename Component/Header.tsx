import type { NextPage } from "next";
import Link from "next/link";

const Header = () => {
    return (
        <div className="">
            <h3 className="ml-12 text-blue-600 font-[400px]">Quick<span className="font-normal text-black text-[200px]">Docs</span></h3>
            <span className="mt-10 ml-20 text-black text-sm">
                <Link href={"/"}>Pricing</Link>
                <Link href={"/"}>How it works</Link>
                <Link href={"/"}>Download  App</Link>
                <Link href={"/"}>Login</Link>
            </span>
        </div>
    )
}
export default Header
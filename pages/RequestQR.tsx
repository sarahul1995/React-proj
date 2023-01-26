import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import img from "../public/banner.svg"


const RequestQR = () => {
  return (

    <div className="flex min-h-screen flex-row justify-center my-0">
      <Head>
      </Head>

      <div className="flex-auto flex-col w-[631px] h-[1024px] bg-[#F0F5FF]">


        <h3 className="ml-[65px] mt-[57px]  text-lg font-[800] leading-[27.14px] text-blue-900"><Link href={""}>Quick<span className="font-[400] leading-[27.14px] text-gray-900">Docs</span></Link></h3>
        <div className=" flex-1 flex-shrink flex-wrap "></div>
        <div className="item-center justify-between space-x-12"></div>
        <div><Image src={img} height="551" width="269" className="ml-[120px] mt-[120px]" alt='image' /></div>


      </div>


      <div className="flex-auto flex-col flex-shrink w-[809px] mt-10 ml-10 sm:mt-0">

        <div className="px-4 sm:px-0">
          <h1 className="mt-[154px] text-2xl font-extrabold leading-6 text-gray-900">Request for QR Code</h1>
          <p className="mt-2 mb-[18px] font-[400px] leading-[23.6px] text-black">New way of accessing your Documents, anywhere.</p>
        </div>
        <div className="md:col-span-2 md:mt-0">
          <form action="#" method="POST">
            <div className=" shadow sm:">
              <div className="bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-rows-5 gap-4">
                  <div className="row-auto">
                    <input type="text" name="full-name" id="full-name" placeholder="Full Name" className="mt-[14px] block w-[310px] h-[50px]  placeholder:text-gray-700 placeholder:text-sm  pointer-events-auto px-8 border focus:outline-none focus:border-blue-500  border-indigo-700 lg:text-xl hover:border-blue-600 hover:shadow-lg ">
                    </input>
                  </div>

                  <div className="row-auto">
                    <input type="text" name="email-address" id="email-address" placeholder="Email or Mobile Number" className="mt-[14px] block w-[310px] h-[50px] placeholder:text-gray-700 placeholder:text-sm pointer-events-auto px-8 border focus:outline-none   border-indigo-700 sm:text-lg  hover:border-blue-600 hover:shadow-lg">
                    </input>
                  </div>



                  <div className="row-auto">
                    <input type="text" name="OTP" id="OTP" placeholder="Enter OTP" className="mt-[14px] block w-[310px] h-[50px] placeholder:text-gray-700 placeholder:text-sm pointer-events-auto px-8 border  border-indigo-700 sm:text-lg focus:outline-none  hover:border-blue-600 hover:shadow-lg">
                    </input>
                  </div>

                  <div className="row-auto">
                    <label htmlFor="Marketing-Manager-ID" className="block text-sm font-medium text-gray-700">Optional</label>
                    <input type="text" name="Marketing-Manager-ID" placeholder="Marketing-Manager-ID" id="Marketing-Manager-ID" className="mt-1 block w-[310px] h-[50px] placeholder:text-gray-700  placeholder:text-sm pointer-events-auto px-8 border focus:outline-none  border-indigo-700 sm:text-lg  hover:border-blue-600 hover:shadow-lg">
                    </input>
                  </div>

                  <div className="row-auto">
                    <button type="submit" className="mt-[31px] text-center w-[310px] h-[50px]   border border-transparent bg-blue-800 py-1.5 px-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Next</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <p className="mt-[50px] ml-5 text-sm text-black">If already registered? <span className='text-blue-800'><link href='Sign in' /><Link href={""}>Sign in</Link></span> here.</p>

        </div>


      </div>



    </div>


  )
}


export default RequestQR;

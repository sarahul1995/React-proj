// import type { NextPage } from "next";
// import Layout from "../components/Layout";
// import { useEffect } from "react";
// import Button from "../components/Button";
// import useWindowDimensions from "../hooks/useWindowDimension";
// import BannerImage from "../assets/images/homepage-mobile.svg";
// import Image from "next/image";
// import { useRouter } from "next/router";

// const Landing: NextPage = () => {
//   const router = useRouter();
//   const { height = 0 } = useWindowDimensions();
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       console.log(height);
//     }
//   }, []);
//   return (
//     <Layout>
//       <div
//         className={`flex justify-between items-center `}
//         style={{ height: `${height - 202}px` }}
//       >
//         <div className="flex flex-col md:pl-8 w-1/1 md:w-1/2 h-2/3 justify-around">
//           <h1 className="text-2xl text-center md:text-3xl">
//             Scan the qr code, upload and view your documents instantly,
//             <b className="text-blue-800"> anywhere</b>.
//           </h1>
//           <div className="flex flex-col md:flex-row md:justify-around">
//             <Button
//               title="Request for QR Code"
//               variant="solid"
//               className="px-6 py-2 w-full h-[60px]"
//               onClick={() => router.push("/request")}
//             />
//             <Button
//               title="See how it works"
//               variant="outline"
//               className="mr-3 px-4 py-2 w-full font-bold mt-2 md:mt-0"
//             />
//           </div>
//         </div>
//         <div className="hidden md:flex w-1/2 items-center justify-center">
//           <Image src={BannerImage}></Image>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Landing;

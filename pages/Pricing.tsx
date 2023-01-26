// // import type { NextPage } from "next";
// // // import Layout from "../../components/Layout";
// // import { useEffect } from "react";
// // // import Button from "../../components/Button";
// // // import useWindowDimensions from "../../hooks/useWindowDimension";
// // import { useRouter } from "next/router";

// // const PaymentGateway = () => {
// //   // const router = useRouter();
// // //   const { height = 0 } = useWindowDimensions();
// // //   useEffect(() => {
// // //     if (typeof window !== "undefined") {
// // //       console.log(height);
// // //     }
// // //   }, []);

// //   const cardContent = [
// //     {
// //       title: { name: "Free", color: "color-pink" },
// //       size: "100MB",
// //       details: [
// //         "Downloadable QR Code",
// //         "Save Images and PDF",
// //         "Quick Access Files",
// //         "Private and Public Folders only",
// //       ],
// //       btnTitle: "Sign up",
// //       shadowColor: "rgba(148, 45, 165, 0.08)",
// //     },
// //     {
// //       title: { name: "₹249/yr", color: "color-purple" },
// //       tag: { name: "Popular", color: "color-purple-tag", bg: "bg-purple-tag" },
// //       size: "1 GB",
// //       details: [
// //         "Downloadable QR Code",
// //         "Save Images and PDF",
// //         "Save Videos (Max 50MB)",
// //         "Quick Access Files",
// //         "Unlimited Folders",
// //       ],
// //       btnTitle: "Buy It",
// //       shadowColor: "rgba(67, 28, 178, 0.1)",
// //     },
// //     {
// //       title: { name: "₹599/yr", color: "color-green" },
// //       size: "5 GB",
// //       details: [
// //         "Downloadable QR Code",
// //         "Save Images and PDF",
// //         "Save Videos (Max 100MB)",
// //         "Quick Access Files",
// //         "Unlimited Folders",
// //       ],
// //       btnTitle: "Buy It",
// //       shadowColor: "rgba(35, 138, 82, 0.07)",
// //     },
// //   ];

// //   return (
// //     <>
// //       <div className="mt-24 mb-28">
// //         <div className="pgway__header">
// //           <h2 className="text-[40px] leading-[59px] font-bold mb-2">
// //             Get started now, and pick a plan later
// //           </h2>
// //           <h3 className="text-4xl leading-[53px] text-[#1B34B8]">
// //             Plan for every usage
// //           </h3>
// //         </div>
// //         <div className="pgway__body">
// //           <p className="text-xl mt-10 mb-4 text-right">
// //             All the plans are yearly*
// //           </p>
// //           <div className="flex justify-between space-x-7">
// //             {cardContent.map(function (value, key) {
// //               return (
// //                 <div
// //                   className="flex-1 flex flex-col bg-[#FFFFFF80] pt-8 pr-6 pb-9 pl-14"
// //                   style={{ boxShadow: `0px 4px 150px ${value.shadowColor}` }}
// //                 >
// //                   <h3
// //                     className={`text-4xl font-bold mb-4 flex items-center leading-[53px] ${value.title.color}`}
// //                   >
// //                     {value.title.name}
// //                     {value.tag ? (
// //                       <span
// //                         className={`inline-flex items-center text-xs font-bold ${value.tag.color} ${value.tag.bg} px-4 py-0.5 ml-5 h-[24px] rounded-3xl`}
// //                       >
// //                         {value.tag.name}
// //                       </span>
// //                     ) : null}
// //                   </h3>
// //                   <p className="text-xl">
// //                     <strong>{value.size}</strong> storage Limit
// //                   </p>
// //                   <div className="border-b border-solid border-white h-[1px] mt-8 mb-9 -ml-14 -mr-6"></div>
// //                   <div className="space-y-5 text-xl mb-16">
// //                     {value.details.map(function (item, i) {
// //                       return <p>{item}</p>;
// //                     })}
// //                   </div>
// //                   <button
// //                     title={value.btnTitle}
// //                     // variant="solid"
// //                     className="font-bold px-6 py-2 w-[150px] h-[38px] rounded-[3px] title:text-white bg-slate-600 mt-auto mx-auto"
// //                   />
// //                 </div>
// //               );
// //             })}
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default PaymentGateway;
// // import { validateHeaderValue } from "http";
// import type { NextPage } from "next"
// import Link from "next/link"
// import Footer from "../Component/Footer";
// import Header from "../Component/Header";



// const PaymentGateway = () => {

//   const cardContent = [
//     {
//       title: { name: "Free", color: "color-pink" },
//       size: "100MB",
//       details: [
//         "Downloadable QR Code",
//         "Save Images and PDF",
//         "Quick Access Files",
//         "Private and Public Folders Only",
//       ],
//       btnTitle: { name: "", color: "" },
      
//     },
//     {
//       title: { name: "रु249/yr", color: "color-pink" },
//       size: "100MB",
//       details: [
//         "Downloadable QR Code",
//         "Save Images and PDF",
//         "Quick Access Files",
//         "Private and Public Folders Only",
//       ],
//       btnTitle: { name: "", color: "" },
//       shadowBox: { color: "", opacity: "" }
//     },
//     {
//       title: { name: "रु599/yr", color: "color-pink" },
//       size: "100MB",
//       details: [
//         "Downloadable QR Code",
//         "Save Images and PDF",
//         "Quick Access Files",
//         "Private and Public Folders Only",
//       ],
//       btnTitle: { name: "", color: "" },
//       shadowBox: { color: "", opacity: "" }
//     },
//   ];
//   return (
//     <div className="flex min-h-screen flex-col mt-4 ml-2 bg-emerald-500">
//       <Header />
//       <div className="mt-16 ml-2">
//         <h1 className="mt-6 ml-2 font-extrabold">Get started now, and pick plan later</h1>
//         <p className="mt-6 ml-2 text-blue-500">Plan for every usage</p>
//       </div>
//       <p className="text-slate-700 text-left">All the plans are yearly*</p>
//       <div className="flex-1 flex-col w-[405px] h-[565px]">
//         {cardContent.map(function (value, index) {
//           return (
          
//           <h2>{value.title.name}</h2>
          
//           <p className=""><strong>{value.size}</strong>storage Limit</p>
//        <div>
//           {value.details.map(function(item,i){
//             return 
//               <p>
//               {item}
//               </p>;
            
//           })}
//           </div>

      
      

      
  
//           <button title="{value.btnTitle}"
//                   className="">{value.btnTitle}
//                   />
        
//        );
//       })}
//       </div>
//       <Footer />
//     </div>

//       );
// };
//       export default PaymentGateway;
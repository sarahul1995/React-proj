// import { FolderIcon, XMarkIcon } from "@heroicons/react/20/solid";
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
// import toast, { Toaster } from "react-hot-toast";
// import { FILE_UPLOAD_SIZE } from "../../services/constants";
// import UserService from "../../services/user-service";
// import { useUserStore } from "../../store/userStore";
// import Loader from "../../components/loader";
// import DashboardHeader from "../../components/dashboard/Header";
// import Button from "../../components/Button";
// import FolderList from "../../components/dashboard/FolderList";
// import QuickAccessPin from "../../components/dashboard/QuickAccessPin";
// import CreateFolderModal from "../../components/dashboard/CreateFolder";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { useFolderStore } from "../../store/folderStore";

// const Dashboard = () => {
//   const router = useRouter();
//   const [modalOpen, setModalOpen] = useState(false);
//   const [createFolderModal, setCreateFolderModal] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [currentFolders, setCurrentFolders] = useState([]);
//   const [searchValue, setSearchValue] = useState("");
//   const { userFiles, getUserDetails, userDetails, addUserFiles } = useUserStore(
//     (state: any) => state
//   );

//   const { fetchAllFolders, folders, searchFolders } = useFolderStore(
//     (state: any) => state
//   );

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   const handleSearchResult = (e: any) => {
//     e.preventDefault();
//     const searchResult = folders.filter((value: any) =>
//       value.name.toLowerCase().includes(searchValue.toLowerCase())
//     );
//     setCurrentFolders(searchResult);
//     // console.log(searchFolders);
//   };

//   const clearSearch = () => {
//     setSearchValue("");
//     setCurrentFolders(folders);
//   };

//   useEffect(() => {
//     // async function getUserFiles() {
//     //   await fetchUserFiles();
//     // }

//     async function fetchUserDetails() {
//       await getUserDetails();
//     }

//     async function getUserFolders() {
//       await fetchAllFolders();
//     }

//     fetchUserDetails();
//     // getUserFiles();
//     getUserFolders();
//   }, []);

//   useEffect(() => {
//     setCurrentFolders(folders);
//   }, [folders]);

//   useEffect(() => {
//     if (Object.keys(userDetails).length > 0) {
//       if (!userDetails.isAddressUpdated) {
//         router.push("/request/address-form");
//       } else {
//         router.push("/dashboard");
//       }
//     }
//   }, [userDetails]);

//   useEffect(() => {
//     if (searchValue === "") {
//       setCurrentFolders(folders);
//     }
//   }, [searchValue]);

//   const handleSelectedFile = (files: any) => {
//     const filesToUpload = Array.from(files).filter((file: any) => {
//       const sizeInMb = parseInt((file.size / (1024 * 1024)).toFixed(2));
//       if (sizeInMb < FILE_UPLOAD_SIZE) {
//         return file;
//       }
//     });
//     uploadFiles(filesToUpload);
//   };

//   const uploadFiles = async (files: any) => {
//     const formData = new FormData();
//     files.forEach((file: File) => {
//       formData.append("files", file);
//     });
//     try {
//       setLoading(true);
//       const response = await UserService.fileUpload(formData);
//       if (response.isSuccess) {
//         toast.success("File upload successful", {
//           duration: 5000,
//           position: "bottom-center",
//         });
//         addUserFiles([...response.data, ...userFiles]);
//       }
//       setLoading(false);
//     } catch (e) {
//       setLoading(false);
//       toast.error("file upload unsuccessful, Try again!", {
//         duration: 5000,
//         position: "bottom-center",
//       });
//     }
//   };

//   const createFolder = () => {
//     setCreateFolderModal(true);
//   };

//   const closeSidebar = () => {};

//   return (
//     <>
//       <DashboardHeader />

//       {!userDetails.isEmailVerified ? (
//         <div className="grid grid-cols-12">
//           <div className="col-start-4 col-end-10 flex justify-between md:justify-start mt-10">
//             <div className="bg-gray-200 w-1/1 text-red-700 px-3 py-2">
//               <p>
//                 An email has been sent to your registered email id{" "}
//                 <span className="text-blue-800">{userDetails.email}</span>,
//                 Please verify.
//               </p>
//               <p>
//                 <small>
//                   To access all the features in Savemydocs, verifying your email
//                   is mandatory.
//                 </small>
//               </p>
//             </div>
//           </div>
//         </div>
//       ) : null}

//       {userDetails.isEmailVerified ? (
//         <>
//           <div className="flex md:hidden text-xs">
//             {loading ? (
//               <div className="absolute h-[85vh] bg-slate-100 z-20 w-1/1 bg-opacity-70">
//                 <p>
//                   <Loader loadingText="Uploading Files..." />
//                 </p>
//               </div>
//             ) : null}
//             {/* <p
//               className={` text-white w-1/2 p-3 cursor-pointer ${
//                 !userDetails.pin
//                   ? "bg-red-200 text-black"
//                   : "bg-slate-500 text-white"
//               }`}
//               onClick={() => setModalOpen(true)}
//             >
//               {!userDetails.pin ? "Set quick access pin" : "Quick access pin"}
//             </p>
//             <label className="bg-slate-600 text-white w-1/2 p-3">
//               <span>Upload files</span>
//               <input
//                 type="file"
//                 className="hidden"
//                 onChange={(e) => handleSelectedFile(e.target.files)}
//                 multiple
//               />
//             </label> */}
//           </div>

//           <div className="hidden h-[300px] bg-gray-100 md:grid grid-cols-12 md:gap-10">
//             <div className="col-start-2 col-end-10 flex items-center">
//               <div className="w-1/1">
//                 <Slider {...settings}>
//                   <div className="h-[200px] bg-gray-300"></div>
//                   <div className="h-[200px] bg-gray-400"></div>
//                 </Slider>
//               </div>
//             </div>
//             <div className="col-start-10 col-end-12 flex items-center">
//               <QuickAccessPin />
//             </div>
//           </div>
//           <div className="grid grid-cols-12 mt-3 md:my-8 md:gap-10">
//             <div className="col-start-2 col-end-12 xl:col-start-4 xl:col-end-10 z-10">
//               <div>
//                 <div className="mb-5 flex justify-between">
//                   <p className="hidden md:flex items-center text-gray-400 text-xs">
//                     <FolderIcon width={15} height={15} />{" "}
//                     <span className="ml-1">All folders</span>
//                   </p>
//                   <div className="flex justify-between">
//                     <form onSubmit={handleSearchResult} className="relative">
//                       <input
//                         className="h-[40px] bg-gray-200 border-none text-xs"
//                         type="text"
//                         placeholder="search"
//                         onChange={(e) => setSearchValue(e.target.value)}
//                         onBlur={(e) => setSearchValue(e.target.value)}
//                         value={searchValue}
//                       ></input>
//                       {searchValue !== "" ? (
//                         <XMarkIcon
//                           width={20}
//                           height={20}
//                           className="absolute top-2 right-3 cursor-pointer"
//                           onClick={clearSearch}
//                         />
//                       ) : null}
//                     </form>
//                     <Button
//                       title="+"
//                       className="md:hidden w-[80px] ml-2"
//                       onClick={() => createFolder()}
//                     />
//                     <Button
//                       title="+ Create Folder"
//                       className="hidden md:block w-[250px] ml-2 text-xs"
//                       onClick={() => createFolder()}
//                     />
//                   </div>
//                 </div>
//                 {}
//                 <ul>
//                   <FolderList data={currentFolders} />
//                 </ul>
//                 {/* <ul className="pl-10">
//                   <FileListItem files={userFiles} />
//                 </ul> */}
//               </div>
//             </div>
//             <div className="hidden md:block col-start-1 col-end-13 md:col-start-8 md:col-end-12">
//               {/* <Dropzone /> */}
//               <Toaster />
//             </div>
//             <CreateFolderModal
//               isModalOpen={createFolderModal}
//               closeModal={() => setCreateFolderModal(false)}
//             />
//           </div>
//         </>
//       ) : null}
//     </>
//   );
// };

// export default Dashboard;

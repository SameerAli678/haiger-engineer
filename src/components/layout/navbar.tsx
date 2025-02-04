// "use client";
// import Image from "next/image";
// import React from "react";
// import haiger from "@/../public/images/haiger (1) crop.jpg";
// import { Pages } from "@/constants/pageListData";
// import Link from "next/link";
// import Button from "../buttons/button";
// import { FiPhoneCall } from "react-icons/fi";
// import { MdLocationOn } from "react-icons/md";
// import { MdEmail } from "react-icons/md";

const Navbar = () => {
  return (
    <div>Navbar</div>
    // <div className="relative">
    //   {/* logo  */}
    //   <div className="  flex absolute ">
    //     <Image
    //       src={haiger}
    //       width={120}
    //       height={50}
    //       alt="haiger "
    //       className="rounded-br-3xl"
    //     />
    //   </div>

    //   <div className="hidden md:flex flex-col">
    //     {/* header  */}
    //     <div className="flex  w-full h-8 bg-Primary  justify-between items-center xl:px-32 text-white">
    //       <div>
    //         {/* <MdLocationOn /> */}
    //         59 Street, Chicago, New york City
    //       </div>
    //       <div className="flex gap-x-7">
    //         <div>
    //           {/* <FiPhoneCall /> */}
    //           (+245) 592 1125
    //         </div>
    //         <div>
    //           {/* <MdEmail /> */}
    //           Info@ribuild.com
    //         </div>
    //       </div>
    //     </div>
    //     {/* pages  */}

    //     <div className="flex w-full h-24 text-lg bg-black justify-evenly items-center  ">
    //       <div className="flex  lg:gap-x-10 text-lg justify-around">
    //         {Pages.map((page, index) => (
    //           <li key={index}>
    //             {/* <p className="flex text-white ">{page.text}</p> */}
    //             <Link href={page.link} className="text-white hover:underline">
    //               {page.text}
    //             </Link>
    //           </li>
    //         ))}
    //       </div>

    //       <div className="flex ">
    //         <Button text="Download" />
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // Side bar

    //    <div className="relative">
    //    {/* logo  */}
    //    <div className="  flex absolute">
    //      <Image src={haiger} width={200} height={50} alt="haiger " />
    //    </div>

    //    <div className=" md:hidden flex flex-col">
    //      {/* header  */}
    //      <div className="flex flex-col w-full h-fit
    //       bg-Primary  justify-between items-center  text-white">
    //        <div>
    //          {/* <MdLocationOn /> */}
    //          59 Street, Chicago, New york City
    //        </div>
    //        <div className="flex gap-x-7">
    //          <div>
    //            {/* <FiPhoneCall /> */}
    //            (+245) 592 1125
    //          </div>
    //          <div>
    //            {/* <MdEmail /> */}
    //            Info@ribuild.com
    //          </div>
    //        </div>
    //      </div>
    //      {/* pages  */}

    //      <div className="flex  flex-col gap-3 w-full h-fit  text-lg bg-Primary justify-center items-center  py-5">
    //        <div className="flex flex-col  gap-y-5 text-lg justify-around">
    //          {Pages.map((page, index) => (
    //            <li key={index}>
    //              {/* <p className="flex text-white ">{page.text}</p> */}
    //              <Link href={page.link} className="text-white hover:underline">
    //                {page.text}
    //              </Link>
    //            </li>
    //          ))}
    //        </div>

    //        <div className="flex ">
    //          <Button text="Download" />
    //        </div>
    //      </div>
    //    </div>
    //  </div>
  );
};

export default Navbar;

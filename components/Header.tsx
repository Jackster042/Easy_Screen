import React from "react";
import Image from "next/image";
import Link from "next/link";
import DropDownList from "@/components/DropDownlist";


const Header = ({
    subHeader,
    title,
    userImg
                }: SharedHeaderProps) => {
    return (
        <header className={"header"}>
            <section className={"header-container"}>

               {/* LEFT SIDE - USER IMAGE & SUB HEADER*/}
               <div className="details">
                   {
                       userImg && (
                           <Image
                           src={userImg || "/assets/images/dummy.jpg"}
                           alt={"user"}
                           width={66}
                           height={66}
                           className={"rounded-full"}
                           />
                       )
                   }

                   <article>
                       <p>{subHeader}</p>
                        <h1>{title}</h1>
                   </article>
               </div>

            {/* ASIDE  - 2 CTA BUTTONS*/}
               <aside>
                   <Link href="/upload">
                       <Image
                       src={"/assets/icons/upload.svg"}
                       alt={"upload"}
                       width={16}
                       height={16}
                       />
                       <span>Upload a Video</span>
                   </Link>
                   <div className="record">
                       <button className={"primary-btn"}>
                           <Image
                           src={"/assets/icons/record.svg"}
                           alt={"record"}
                           width={16}
                           height={16}
                           />
                           <span>
                               Record a Video
                           </span>
                       </button>
                   </div>
               </aside>
            </section>

        {/* FILTERS*/}
            <section className={"search-filter"}>
                <div className="search">
                    <input type="text" placeholder="Search..." />
                    <Image
                    src={"/assets/icons/search.svg"}
                    alt={"search"}
                    width={16}
                    height={16}
                    />
                </div>

            {/* TODO: DROPDOWN LIST*/}
                <DropDownList />
            </section>

        </header>
    )
}

export default Header;
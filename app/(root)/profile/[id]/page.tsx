import React from "react";
import Header from "@/components/Header";

const Page = async ({params}: ParamsWithSearch) => {

    const { id } = await params;

    return (
        <div className={"wrapper page"}>
            <Header
            subHeader={"dzabammo@gmail.com"}
            title={"Nemanja | SE7"}
            userImg={"/assets/images/dummy.jpg"}
            />
            <h1 className={"font-karla text-2xl"}>


            User ID : { id }
            </h1>
        </div>
    )
}

export default Page;
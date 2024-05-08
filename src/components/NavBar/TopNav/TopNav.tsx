import Image from "next/image"
import NavBar from "../Nav/NavBar"

const TopNav = () => {
    return (
        <>
            <div className="bg-[#B27A32] flex justify-between items-center">
                <div className="">
                    <Image src="/bki-logo.png" alt="logo" width={488} height={83}/>
                </div>

                <div className="flex items-center gap-8 p-8">
                    <h1 className="text-white">KN 3 Ave, Kigali</h1>
                    <p className="text-white font-bold">|</p>

                    <div className="border-2 border-white p-4 space-y-2  rounded-[32px]">
                        <p className="text-white">Any Problem, Call Us On</p>
                        <h2 className="text-white font-bold">(+250) 788 177 400</h2>
                    </div>
                    </div>       
            </div>

           <NavBar />
        </>
    )
}

export default TopNav
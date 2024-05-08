import Image from "next/image";

const HeroSection = () => {
    return (
        <div className="relative mt-8">
            <div className="absolute inset-0">
                <Image src="/slide-3.jpg" alt="slide" width={3590} height={500} />
            </div>

            <div className="absolute inset-0 mt-20">
              
                <div className="px-[40px] py-[20px] mt-20  w-[503px] h-[220px] mx-52 bg-[#014d99] rounded-2xl">
                    <p className="mt-8 font-bold text-white w-[300px]">Take care of yourself, your Business, your properties at </p>

                    <h1 className="mt-4 text-white font-bold text-4xl"> BK Insurance</h1>
                </div>

                <div className="w-[200px] mx-52 mt-8 bg-transparent p-4 rounded-2xl border-2 border-[#014d99]">
                    <button className="text-black">Contact Us</button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;

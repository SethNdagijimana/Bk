import Link from "next/link"

const NavBar = () => {
    return (
        <>
            <div className="flex items-center justify-evenly mt-4">
            <div className="flex items-center gap-4">
                <Link href="/" className="text-[#014d99]">HOME</Link>
                <p className="text-gray-500">|</p>
                <Link href="/" className="text-[#014d99]">ABOUT US</Link>
                <p className="text-gray-500">|</p>
                <Link href="/" className="text-[#014d99]">PRODUCT & SERVICES</Link>
                <p className="text-gray-500">|</p>
                <Link href="/" className="text-[#014d99]">REPORTS</Link>
            </div>

            <div className="flex items-center gap-4">
                <Link  href="/" className="text-[#014d99]">TARIFF</Link>
                <p className="text-gray-500">|</p>
                <Link  href="/" className="text-[#014d99]">FAQ</Link>
                <p className="text-gray-500">|</p>
                <Link  href="/" className="text-[#014d99]">E_PORTAL</Link>
                <p className="text-gray-500">|</p>
                <Link  href="/">
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="#014d99" viewBox="0 0 256 256"><path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z" /></svg>


                </Link>
                <p className="text-gray-500">|</p>
                <Link  href="/">
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="#014d99" viewBox="0 0 256 256"><path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" /></svg>

                </Link>
            </div>
            </div>
        </>
    )
}

export default NavBar
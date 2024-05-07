import { Logo, Navbar } from "../../Components"

const Header =()=> {
    return <header className="fixed w-[100%] border-gray-200 dark:bg-gray-800 dark:border-gray-700 py-[10px] z-10 bg-black">
                <div className="w-[1160px] mx-auto flex justify-between items-center">
                    <Logo />
                    <Navbar />
                </div>
    </header>
}
export default Header;
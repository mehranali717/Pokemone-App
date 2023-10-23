import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Favourites from "../../Sections/Favorites/Favorites";

const Navbar =()=> {
    const navItems = [
        {title:"comparison", icon:"code-compare", url:"/comparison"},
    ]
    return <nav className="w-[400px] ">
                <ul className="flex justify-between">
                    {navItems.map((item, index)=> <li className="font-[600] hover:text-[#F6BD0E] text-[23px] text-[#fff] capitalize" key={index}><Link to={item.url}><FontAwesomeIcon icon={item.icon} className="pe-2"/>{item.title}</Link></li>)}
                    <Favourites />
                </ul>
            </nav>
}
export default Navbar;
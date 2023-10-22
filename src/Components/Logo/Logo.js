import image from "../../Assets/Images/logo.png"
import Image from "../Image/Image";
const Logo = ()=>{
    return <div className="w-[120px] h-[66px]">
        <a href="/"><Image image={image} /></a>
    </div>
}
export default Logo;
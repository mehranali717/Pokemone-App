import { Outlet } from "react-router-dom";
import { Header, Sidebar } from "../../Sections";

const MainLayout =()=> {
    return <>
        <Header />
        <div className="pt-[82px] flex justify-between">
            <Sidebar />
            <div className="ps-[220px] pt-[20px] pe-[20px] pb-[20px]">
            <Outlet />
            </div>
        </div>
    </>
}
export default MainLayout;
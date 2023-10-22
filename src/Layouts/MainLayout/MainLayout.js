import { Outlet } from "react-router-dom";
import { Header } from "../../Sections";

const MainLayout =()=> {
    return <>
        <Header />
        <Outlet />
    </>
}
export default MainLayout;
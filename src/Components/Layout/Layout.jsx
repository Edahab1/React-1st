import style from "./Layout.module.css";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

export default function Layout() {
  
  




  return (
    <>
      <div className="w-[100vw] left-0 absolute">
      <Navbar />
      

      <div className="pt-14">
        <Outlet/>
      </div>
      

      <Footer />
      </div>
    </>
  );
}

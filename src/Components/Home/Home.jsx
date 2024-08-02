import style from "./Home.module.css";
import image from "../../../public/avataaars.svg";

export default function Home() {
  return (
    <>
      <div className="bg-teal-500 text-white min-h-[80vh] py-5">
        <div className="flex justify-center flex-col items-center my-20">
          <div className="w-1/6">
            <img src={image} alt="main-image" className="w-full mb-5" />
          </div>
          <h1 className="text-4xl font-bold">START FRAMEWORK</h1>
          <div className="py-2 flex items-center">
            <div className="line w-20 bg-white h-1"></div>
            <i className="fa fa-star px-4"></i>
            <div className="line w-20 bg-white h-1"></div>
          </div>
          <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    </>
  );
}

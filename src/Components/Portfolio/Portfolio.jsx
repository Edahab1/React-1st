import React, { useState, useEffect } from "react";
import style from "./Portfolio.module.css";
import img1 from "../../../public/port1.png";
import img2 from "../../../public/port2.png";
import img3 from "../../../public/port3.png";

export default function Portfolio() {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <div className="py-6 min-h-[80vh] flex flex-col">
        <h1 className="text-4xl font-bold">PORTFOLIO COMPONENT</h1>
        <div className="py-2 flex items-center justify-center">
          <div className="h-1 w-20 bg-black"></div>
          <i className="fa fa-star px-4"></i>
          <div className="h-1 w-20 bg-black"></div>
        </div>
        <br />

        <div className="container w-11/12 mx-auto">
          <div className="row mb-20">
            <div className="w-1/3 p-3">
              <div className="relative overflow-hidden">
                <img src={img1} alt="" className="rounded-xl" />
                <div className="overlay absolute top-0 bottom-0 left-0 right-0 rounded-xl opacity-0 flex justify-center items-center hover:bg-teal-300 hover:opacity-80">
                  <i className="fas fa-plus fa-5x"></i>
                </div>
              </div>
            </div>
            <div className="w-1/3 p-3">
              <div className="relative overflow-hidden">
                <img src={img2} alt="" className="rounded-xl" />
                <div className="overlay absolute top-0 bottom-0 left-0 right-0 rounded-xl opacity-0 flex justify-center items-center hover:bg-teal-300 hover:opacity-80">
                  <i className="fas fa-plus fa-5x"></i>
                </div>
              </div>
            </div>
            <div className="w-1/3 p-3">
              <div className="relative overflow-hidden">
                <img src={img3} alt="" className="rounded-xl" />
                <div className="overlay absolute top-0 bottom-0 left-0 right-0 rounded-xl opacity-0 flex justify-center items-center hover:bg-teal-300 hover:opacity-80">
                  <i className="fas fa-plus fa-5x"></i>
                </div>
              </div>
            </div>
            <div className="w-1/3 p-3">
              <div className="relative overflow-hidden">
                <img src={img2} alt="" className="rounded-xl" />
                <div className="overlay absolute top-0 bottom-0 left-0 right-0 rounded-xl opacity-0 flex justify-center items-center hover:bg-teal-300 hover:opacity-80">
                  <i className="fas fa-plus fa-5x"></i>
                </div>
              </div>
            </div>
            <div className="w-1/3 p-3">
              <div className="relative overflow-hidden">
                <img src={img3} alt="" className="rounded-xl" />
                <div className="overlay absolute top-0 bottom-0 left-0 right-0 rounded-xl opacity-0 flex justify-center items-center hover:bg-teal-300 hover:opacity-80">
                  <i className="fas fa-plus fa-5x"></i>
                </div>
              </div>
            </div>
            <div className="w-1/3 p-3">
              <div className="relative overflow-hidden">
                <img src={img1} alt="" className="rounded-xl" />
                <div className="overlay absolute top-0 bottom-0 left-0 right-0 rounded-xl opacity-0 flex justify-center items-center hover:bg-teal-300 hover:opacity-80">
                  <i className="fas fa-plus fa-5x"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

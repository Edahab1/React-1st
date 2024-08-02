import React, { useState, useEffect } from "react";
import style from "./Footer.module.css";

export default function Footer() {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <footer>
        <div className="bg-slate-700 fixed-bottom bottom-0 left-0 right-0 text-white">
          <div className="row">
            <div className="w-1/3 my-10">
              <div className="p-6 ">
                <h1 className="font-semibold text-3xl">LOCATION</h1>
                <p className="py-5">2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
            </div>

            <div className="w-1/3 my-10">
              <div className="p-6">
                <h1 className="font-semibold text-3xl">AROUND THE WEB</h1>
                <ul className="flex justify-center mt-2">
                  <li>
                    <i className="fab fa-facebook"></i>
                  </li>
                  <li>
                    <i className="fab fa-twitter"></i>
                  </li>
                  <li>
                    <i className="fab fa-linkedin-in"></i>
                  </li>
                  <li>
                    <i className="fas fa-globe"></i>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-1/3 my-10">
              <div className="p-6">
                <h1 className="font-semibold text-3xl">ABOUT FREELANCER</h1>
                <p className="p-8">
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>
          <div className="bg-slate-900 text-white fixed-bottom bottom-0 left-0 right-0 py-5">
            Copyright © Your Website 2021
          </div>
        </div>
      </footer>
    </>
  );
}

import React, { useState, useEffect } from "react";
import style from './About.module.css'

export default function About() {

  useEffect(() => {
    
  
    return () => {
      
    }
  }, [])
  

  return <>
  <div className="bg-teal-500 text-white  py-5 min-h-[80vh] flex">
        <div className="flex justify-center flex-col items-center m-28">
          <h1 className="text-4xl font-bold">ABOUT COMPONENT</h1>
          <div className="py-2 flex items-center">
            <div className="line w-20 bg-white h-1"></div>
            <i className="fa fa-star px-4"></i>
            <div className="line w-20 bg-white h-1"></div>
          </div>
          <div className="row">
            <div className="w-1/2 px-2">
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
            <div className="w-1/2 px-2">
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
          </div>
        </div>
      </div>
  </>;
}

import * as React from "react";
import Navigation from "./Navigation";
import About from "./about";
import Skills from "./skills";
import MyProject from "./myProject";
import Education from "./education";
import Footer from "./footer";

function MyComponent(props) {
  return (
    <div className=" flex flex-col bg-white text-colour1">
      <div className="fixed w-[100%] z-[999] ">
        <Navigation/>
      </div>

      <div id="about" className=" flex justify-center gradient items-center px-16 py-12 w-full bg-white max-md:px-5 max-md:max-w-full">
        <About/>
      </div>

      <div id="skills">
        <Skills/>
      </div>

      <div id="work">
        <MyProject/>
      </div>
      
      <div id="education">
        <Education/>
      </div>
      
      <div id="contact">
        <Footer/>
      </div>
      
    </div>
  );
}

export default MyComponent;
import { useState } from "react";


function Navigation() {
  const scrollToComponent = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    };

    const  [activenav, setActiveNav] = useState(false);
    
    const changebackground = ()=>{
      if (window.scrollY>20) {
        setActiveNav(true);
      } else {
        setActiveNav(false);
      }
      
    }

    window.addEventListener( 'scroll',changebackground );

    return(
      
        <div className={activenav?" duration-700  flex gap-5 justify-between px-12 py-3 w-full bg-colour2 rounded-b-3xl max-md:flex-wrap max-md:px-5 max-md:max-w-full":" duration-700 flex gap-5 justify-between px-12 py-9 w-full bg-colour2 rounded-b-3xl max-md:flex-wrap max-md:px-5 max-md:max-w-full"}>
          <div className="flex-auto text-3xl font-semibold leading-8">
            Shreyas Katalkar
          </div>
          <div className="flex gap-5 justify-between my-auto text-lg leading-7 whitespace-nowrap">
            <div className="hover:cursor-pointer hover:bg-colour1 hover:text-colour2 p-2 rounded-md transition duration-500 ease-in-out "><a href="#about" onClick={() => scrollToComponent('about')}>
              About
            </a></div>
            <div className="hover:cursor-pointer hover:bg-colour1 hover:text-colour2 p-2 rounded-md  duration-500 ease-in-out "><a href="#work" onClick={() => scrollToComponent('work')}>
              Work
            </a></div>
            <div className="hover:cursor-pointer hover:bg-colour1 hover:text-colour2 p-2 rounded-md transition duration-500 ease-in-out "><a href="#contact" onClick={() => scrollToComponent('contact')}>
              Contact
            </a></div>
          </div>
          
          </div>
      
    )
    
}

export default Navigation;
import { useState, useEffect } from "react";

function Navigation() {
  const [activeNav, setActiveNav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY > 20) {
      setActiveNav(true);
    } else {
      setActiveNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  const scrollToComponent = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`transition duration-700 flex justify-between items-center px-8 py-4 w-full ${activeNav ? 'bg-colour2 shadow-lg' : 'bg-transparent'} rounded-b-3xl`}>
      <div className="text-3xl font-semibold leading-8">
        Shreyas Katalkar
      </div>
      <div className="flex gap-5 text-lg leading-7 whitespace-nowrap">
        <div className="hover:cursor-pointer hover:bg-colour1 hover:text-colour2 p-2 rounded-md transition duration-500 ease-in-out">
          <a href="#about" onClick={() => scrollToComponent('about')}>About</a>
        </div>
        <div className="hover:cursor-pointer hover:bg-colour1 hover:text-colour2 p-2 rounded-md transition duration-500 ease-in-out">
          <a href="#work" onClick={() => scrollToComponent('work')}>Work</a>
        </div>
        <div className="hover:cursor-pointer hover:bg-colour1 hover:text-colour2 p-2 rounded-md transition duration-500 ease-in-out">
          <a href="#contact" onClick={() => scrollToComponent('contact')}>Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Navigation;

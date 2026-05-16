import { animate } from "framer-motion";

export const scrollToSection = (e: React.MouseEvent<HTMLElement>, href: string, setActiveSection?: (section: string) => void) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = -10;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      // Animate scroll using framer-motion for a "springy" premium feel
      animate(window.scrollY, offsetPosition, {
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 1,
        onUpdate: (latest: number) => window.scrollTo(0, latest),
      });
      
      setActiveSection?.(targetId)
    }
  };
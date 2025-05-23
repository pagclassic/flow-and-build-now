import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return <div className={`fixed bottom-8 right-8 z-50 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
      <Button size="icon" variant="outline" onClick={scrollToTop} aria-label="Scroll to top" className="h-12 w-12 rounded-full backdrop-blur-sm shadow-lg hover:shadow-xl border border-gray-200 bg-zinc-950 hover:bg-zinc-800">
        <ArrowUp className="h-5 w-5" />
      </Button>
    </div>;
};
export default ScrollToTop;
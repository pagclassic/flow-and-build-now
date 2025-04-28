
import { useEffect } from "react";
import { Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
  // Set dark mode on component mount
  useEffect(() => {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      className="rounded-full"
      aria-label="Dark mode"
    >
      <Moon className="h-5 w-5" />
    </Button>
  );
};

export default ThemeToggle;


import { useEffect } from "react";
import { Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ThemeToggle = () => {
  const { toast } = useToast();

  // Set dark mode on component mount
  useEffect(() => {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  const handleLightModeClick = () => {
    toast({
      title: "Really? Light Mode? 🤨",
      description: "Are you literally a developer? You want to switch to light mode? Huhh, you failed as a developer!",
      variant: "destructive",
    });
  };

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      className="rounded-full"
      aria-label="Dark mode"
      onClick={handleLightModeClick}
    >
      <Moon className="h-5 w-5" />
    </Button>
  );
};

export default ThemeToggle;


import { useEffect, useState } from "react";
import { Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const ThemeToggle = () => {
  const [showDialog, setShowDialog] = useState(false);

  // Set dark mode on component mount
  useEffect(() => {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  const handleLightModeClick = () => {
    setShowDialog(true);
  };

  const handleDismiss = () => {
    setShowDialog(false);
  };

  return (
    <>
      <Button variant="ghost" size="icon" className="rounded-full" aria-label="Dark mode" onClick={handleLightModeClick}>
        <Moon className="h-5 w-5" />
      </Button>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-md glassmorphism border-border/50">
          <DialogHeader className="text-center pb-4">
            <div className="mx-auto mb-4 w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
              <span className="text-xl">🤨</span>
            </div>
            <DialogTitle className="text-xl font-semibold text-foreground">
              Really? Light Mode?
            </DialogTitle>
            <DialogDescription className="text-muted-foreground mt-2">
              Are you literally a developer? You want to switch to light mode? You failed as a developer!
            </DialogDescription>
          </DialogHeader>
          
          <DialogFooter className="justify-center pt-2">
            <Button 
              onClick={handleDismiss} 
              variant="outline"
              className="font-medium px-6"
            >
              Sorry, I will not do it again
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ThemeToggle;

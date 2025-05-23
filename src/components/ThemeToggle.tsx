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
  return <>
      <Button variant="ghost" size="icon" className="rounded-full" aria-label="Dark mode" onClick={handleLightModeClick}>
        <Moon className="h-5 w-5" />
      </Button>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-md my-0 mx-0 px-[34px] py-[50px]">
          <DialogHeader>
            <DialogTitle className="text-center text-zinc-400">
              Really? Light Mode? 🤨
            </DialogTitle>
            <DialogDescription className="text-center">
              Are you literally a developer? You want to switch to light mode? Huhh, you failed as a developer!
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="justify-center">
            <Button onClick={handleDismiss} variant="outline">
              Sorry, I will not do it again
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>;
};
export default ThemeToggle;

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
        <DialogContent className="sm:max-w-md border-0 bg-gradient-to-br from-gray-900/95 via-slate-800/95 to-gray-900/95 backdrop-blur-xl shadow-2xl rounded-3xl overflow-hidden animate-scale-in">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-orange-500/10 to-red-500/10 animate-pulse" />
          <div className="relative z-10">
            <DialogHeader className="text-center pb-6 pt-4">
              <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <span className="text-2xl">🤨</span>
              </div>
              <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent leading-tight">
                Really? Light Mode?
              </DialogTitle>
              <DialogDescription className="text-gray-200 text-lg font-medium mt-4 leading-relaxed">
                Are you literally a developer? You want to switch to light mode? Huhh, you failed as a developer!
              </DialogDescription>
            </DialogHeader>
            
            <DialogFooter className="justify-center pt-6 pb-4">
              <Button 
                onClick={handleDismiss} 
                variant="outline"
                className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white font-bold py-3 px-8 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 border-2 border-gray-600/50"
              >
                <span className="text-lg">Sorry, I will not do it again</span>
              </Button>
            </DialogFooter>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ThemeToggle;

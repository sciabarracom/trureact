import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

const Index = () => {
  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState<"pomodoro" | "short" | "long">("pomodoro");

  const modes = {
    pomodoro: { label: "Pomodoro", seconds: 25 * 60 },
    short: { label: "Short Break", seconds: 5 * 60 },
    long: { label: "Long Break", seconds: 15 * 60 },
  };

  const setTimerMode = (newMode: typeof mode) => {
    setMode(newMode);
    setTime(modes[newMode].seconds);
    setIsActive(false);
  };

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTime(modes[mode].seconds);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-background to-muted">
      <div className="w-full max-w-md px-6">
        <div className="flex flex-col items-center space-y-8">
          <div className="animate-in fade-in zoom-in duration-500">
            <img
              src="/trustable.png"
              alt="Trustable Logo"
              className="h-24 w-auto"
            />
          </div>

          <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            <div className="rounded-2xl border bg-card p-8 shadow-elegant">
              <h1 className="mb-6 text-2xl font-bold text-foreground">Pomodoro Timer</h1>

              <div className="mb-6 flex justify-center space-x-2">
                {(Object.keys(modes) as typeof mode[]).map((m) => (
                  <Button
                    key={m}
                    variant={mode === m ? "default" : "outline"}
                    onClick={() => setTimerMode(m)}
                  >
                    {modes[m].label}
                  </Button>
                ))}
              </div>

              <div className="mb-8 flex items-center justify-center">
                <span className="text-7xl font-bold text-foreground">{formatTime(time)}</span>
              </div>

              <div className="flex justify-center space-x-4">
                <Button onClick={toggleTimer} size="lg">
                  {isActive ? "Pause" : "Start"}
                </Button>
                <Button onClick={resetTimer} variant="outline" size="lg">
                  Reset
                </Button>
              </div>

              <div className="mt-6 space-y-2">
                <Link to="/about" className="text-sm text-primary hover:underline">
                  About &rarr;
                </Link>
                <Link to="/ip" className="text-sm text-primary hover:underline">
                  Your IP &rarr;
                </Link>
              </div>
            </div>
          </div>

          <p className="animate-in fade-in duration-1000 delay-300 text-center text-sm text-muted-foreground">
            Powered by Trustable
          </p>
        </div>
      </div>
      <Toaster />
      <Sonner />
    </div>
  );
};

export default Index;

import { Link } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

const About = () => {
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
              <h1 className="mb-4 text-2xl font-bold text-foreground">
                About
              </h1>
              <p className="text-base text-foreground">
                I am a Trustable App
              </p>
            </div>
          </div>

          <div className="mt-4">
            <Link to="/" className="text-sm text-primary hover:underline">
              &larr; Back
            </Link>
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

export default About;

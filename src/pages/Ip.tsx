import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const IpPage = () => {
  const [ip, setIp] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchIp = async () => {
      try {
        const response = await fetch("/api/my/v1/get-ip");
        const data = await response.json();
        setIp(data.ip);
      } catch (err) {
        setError("Failed to fetch IP address");
      } finally {
        setLoading(false);
      }
    };

    fetchIp();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-background to-muted">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-background to-muted">
        <div className="w-full max-w-md rounded-xl border bg-card p-8 shadow-elegant">
          <p className="text-red-500">{error}</p>
          <Button className="mt-4" onClick={() => setLoading(true)}>
            Retry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-background to-muted">
      <div className="w-full max-w-md px-6">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="rounded-2xl border bg-card p-8 shadow-elegant">
            <h1 className="mb-6 text-center text-2xl font-bold text-foreground">
              Your IP Address
            </h1>
            <div className="mb-8 text-center text-4xl font-bold text-foreground">
              {ip}
            </div>
            <div className="flex justify-center">
              <Button variant="outline" asChild>
                <Link to="/">← Back Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IpPage;

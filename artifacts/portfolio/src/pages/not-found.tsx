import { Loader2 } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background text-foreground">
      <div className="text-center">
        <h1 className="text-4xl font-serif font-bold mb-4">404</h1>
        <p className="text-muted-foreground mb-6">Page not found</p>
        <a 
          href="/" 
          className="inline-flex items-center justify-center px-4 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:opacity-90 transition-opacity"
        >
          Return Home
        </a>
      </div>
    </div>
  );
}

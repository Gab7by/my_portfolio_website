import { Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";

export function NotFoundPage() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="font-heading text-8xl font-bold text-accent">404</p>
      <h1 className="font-heading text-2xl font-semibold sm:text-3xl">Page not found</h1>
      <p className="max-w-md text-muted-foreground">
        The page you're looking for doesn't exist or may have been moved.
      </p>
      <Button as={Link} to="/" icon={Home} iconPosition="left">
        Back to home
      </Button>
    </main>
  );
}

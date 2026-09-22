import Link from "next/link";
import { Home, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-x py-20 text-center">
        <div aria-hidden="true" className="mx-auto flex h-24 w-24 items-center justify-center rounded-lg border border-dashed border-primary/30 bg-primary/5 text-4xl font-extrabold text-primary">
          404
        </div>
        <h1 className="mt-8 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Page not found
        </h1>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">
          The page you are looking for doesn't exist or has been moved. Explore our products or head
          back to the homepage.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild>
            <Link href="/">
              <Home className="h-4 w-4" aria-hidden="true" />
              Back to Home
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/products">
              <Package className="h-4 w-4" aria-hidden="true" />
              Browse Products
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
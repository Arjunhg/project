import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Auth() {
  return (
    (<div
      className="w-full min-h-screen bg-gradient-to-br from-primary to-secondary">
      <div className="container mx-auto px-4 py-12 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">Rent Your Dream Vehicle</h1>
            <p className="text-lg md:text-xl text-primary-foreground">
              Experience the freedom of the open road with our hassle-free vehicle rental service.
            </p>
          </div>
          <div className="bg-background rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4 text-primary">Sign Up Now</h2>
            <form className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" type="text" placeholder="Enter your name" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Enter your password" />
              </div>
              <Button type="submit" className="w-full">
                Sign Up
              </Button>
            </form>
            <div className="mt-4 text-center text-muted-foreground">
              Already have an account?{" "}
              <Link href="#" className="text-primary hover:underline" prefetch={false}>
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>)
  );
}

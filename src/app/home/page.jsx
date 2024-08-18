import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Landing() {
  return (
    (<div className="flex flex-col min-h-dvh">
      <header className="bg-primary text-primary-foreground py-4 px-4 md:px-6">
        <div className="container flex items-center justify-between">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <CarIcon className="w-6 h-6" />
            <span className="text-lg font-bold">Rent-a-Ride</span>
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
              Home
            </Link>
            <Link href="/vehicle" className="hover:underline underline-offset-4" prefetch={false}>
              Vehicles
            </Link>
          </nav>
          <Link href='/vehicle'>
            <Button variant="secondary" className="hidden md:inline-flex">
              Sprint
            </Button>
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <MenuIcon className="w-6 h-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
              <div className="flex flex-col gap-4">
                <Link href="#" className="flex items-center gap-2" prefetch={false}>
                  <CarIcon className="w-6 h-6" />
                  <span className="text-lg font-bold">Rent-a-Ride</span>
                </Link>
                <nav className="grid gap-2">
                  <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
                    Home
                  </Link>
                  
                </nav>
                <Button variant="secondary" className="w-full">
                  Book Now
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <main className="flex-1">
        <section
          className="bg-[url('/hero-bg.jpg')] bg-cover bg-center py-24 md:py-32 lg:py-40">
          <div className="container px-4 md:px-6">
            <div className="max-w-2xl space-y-4">
              <h1
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Find Your Perfect Ride
              </h1>
              <p className="text-muted-foreground md:text-xl">
                Rent a wide range of vehicles, from cars and trucks to motorcycles, for your next adventure.
              </p>
              <form className="flex gap-2">
                <Input
                  type="text"
                  placeholder="Search by location, date, or vehicle type"
                  className="flex-1" />
                  <Link href='/vehicle'>
                    <Button className="hover:shadow-md">Sign-Up / Log-in</Button>
                  </Link>
              </form>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <Card>
                <img
                  src="/compact.jpg"
                  width={300}
                  height={200}
                  alt="Car"
                  className="rounded-t-lg object-cover aspect-video" />
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold">Compact Car</h3>
                  <p className="text-muted-foreground">Ideal for city driving and small groups.</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-lg font-bold">$50/day</span>
                    <Link href='/vehicle'>
                      <Button variant="secondary" size="sm">
                        Explore
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <img
                  src="/suvv.jpg"
                  width={300}
                  height={200}
                  alt="SUV"
                  className="rounded-t-lg object-cover aspect-video" />
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold">SUV</h3>
                  <p className="text-muted-foreground">Spacious and comfortable for families.</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-lg font-bold">$80/day</span>
                    <Link href='/vehicle'>
                      <Button variant="secondary" size="sm">
                        Explore
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <img
                  src="/trucks.jpg"
                  width={300}
                  height={200}
                  alt="Truck"
                  className="rounded-t-lg object-cover aspect-video" />
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold">Truck</h3>
                  <p className="text-muted-foreground">Ideal for hauling and moving large items.</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-lg font-bold">$100/day</span>
                    <Link href='/vehicle'>
                      <Button variant="secondary" size="sm">
                        Explore
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <img
                  src="/motor.jpg"
                  width={300}
                  height={200}
                  alt="Motorcycle"
                  className="rounded-t-lg object-cover aspect-video" />
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold">Motorcycle</h3>
                  <p className="text-muted-foreground">Experience the thrill of the open road.</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-lg font-bold">$40/day</span>
                    <Link href='/vehicle'>
                      <Button variant="secondary" size="sm">
                        Explore
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Featured Vehicles</h2>
                <p className="text-muted-foreground">Check out our top-rated and most popular rental vehicles.</p>
                <Link
                  href="/vehicle"
                  className="inline-flex items-center gap-2 font-medium hover:underline underline-offset-4"
                  prefetch={false}>
                  View All
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
              <Card>
                <img
                  src="/luxury.jpg"
                  width={400}
                  height={300}
                  alt="Luxury Car"
                  className="rounded-t-lg object-cover aspect-video" />
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold">Luxury Car</h3>
                  <p className="text-muted-foreground">Experience the ultimate in comfort and style.</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-lg font-bold">$150/day</span>
                    <Link href='/vehicle'>
                    <Link href='/vehicle'>
                      <Button variant="secondary" size="sm">
                        Explore
                      </Button>
                    </Link>
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <img
                  src="/lvan.jpg"
                  width={400}
                  height={300}
                  alt="Van"
                  className="rounded-t-lg object-cover aspect-video" />
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold">Van</h3>
                  <p className="text-muted-foreground">Perfect for group trips and moving large items.</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-lg font-bold">$90/day</span>
                    <Link href='/vehicle'>
                      <Button variant="secondary" size="sm">
                        Explore
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Customer Testimonials</h2>
                <p className="text-muted-foreground">
                  Hear from our satisfied customers about their rental experiences.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 font-medium hover:underline underline-offset-4"
                  prefetch={false}>
                  Read More
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12 border">
                      <AvatarImage src="/placeholder-user.jpg" alt="User 1" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-bold">John Doe</h3>
                      <p className="text-muted-foreground">Satisfied Customer</p>
                    </div>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    "I had a great experience renting from Rent-a-Ride. The\n process was smooth, and the vehicle was in
                    excellent\n condition. I would definitely use their services again."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12 border">
                      <AvatarImage src="/placeholder-user.jpg" alt="User 2" />
                      <AvatarFallback>JA</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-bold">Jane Appleseed</h3>
                      <p className="text-muted-foreground">Satisfied Customer</p>
                    </div>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    "Rent-a-Ride made my trip so much easier. The vehicle was\n perfect for my needs, and the staff was
                    incredibly\n helpful. I highly recommend their services."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">How It Works</h2>
                <p className="text-muted-foreground">Learn about our simple and convenient rental process.</p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 font-medium hover:underline underline-offset-4"
                  prefetch={false}>
                  Learn More
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground">
                    <SearchIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Search and Book</h3>
                    <p className="text-muted-foreground">Browse our selection and reserve your vehicle online.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground">
                    <CalendarIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Pick Up and Return</h3>
                    <p className="text-muted-foreground">
                      Conveniently pick up and return your rental at our locations.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground">
                    <ShieldIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Rental Policies</h3>
                    <p className="text-muted-foreground">Review our policies for a hassle-free rental experience.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground">
                    <PowerIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Customer Support</h3>
                    <p className="text-muted-foreground">Our team is here to assist you every step of the way.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary text-primary-foreground py-6 px-4 m" />
    </div>)
  );
}

function ArrowRightIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>)
  );
}


function CalendarIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>)
  );
}


function CarIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>)
  );
}


function MenuIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>)
  );
}


function PowerIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M12 2v10" />
      <path d="M18.4 6.6a9 9 0 1 1-12.77.04" />
    </svg>)
  );
}


function SearchIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>)
  );
}


function ShieldIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>)
  );
}

import { Button } from "@/components/ui/button"

export function Pricing() {
  return (
    <div className="flex flex-col min-h-dvh items-center">
      <section className="w-full pt-12 md:pt-24 lg:pt-32">
        <div className="container space-y-10 xl:space-y-16 px-4 md:px-6 max-w-4xl mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Affordable Vehicle Rentals
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Explore the city in style with our wide selection of vehicles at unbeatable prices.
              </p>
              <p className="text-red-700">
                (Upcoming)
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 md:px-6 max-w-7xl mx-auto justify-center">
          {['Compact Car', 'Midsize Sedan', 'SUV', 'Minivan'].map((car, index) => (
            <div key={index} className="grid gap-4 p-6 bg-background rounded-lg border">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">{car}</h3>
                <div className="text-4xl font-bold">${49 + index * 10}</div>
              </div>
              <div className="text-muted-foreground">
                <p>Per day</p>
                <p>+ Taxes and Fees</p>
              </div>
              <Button size="lg" className="w-full">
                Book Now
              </Button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}


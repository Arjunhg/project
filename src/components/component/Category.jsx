'use client'
{/* eslint-disable react/no-unescaped-entities */}
import { useState } from "react";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Lightbulb } from "lucide-react";
import Image from "next/image";

export function Category() {

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const allVehicles = [
    { name: "Toyota Camry", type: "Car", price: "$25,999", description: "Reliable and comfortable sedan", image: "/camry.jpg" },
    { name: "Honda Civic", type: "Car", price: "$21,499", description: "Compact and fuel-efficient", image: "/civic.jpg" },
    { name: "Ford Mustang", type: "Car", price: "$35,999", description: "Powerful and stylish sports car", image: "/mustang.jpg" },
    { name: "Specialized Turbo Levo", type: "Bike", price: "$5,999", description: "High-performance electric mountain bike", image: "/levo.jpg" },
    { name: "Trek Domane SL 6", type: "Bike", price: "$2,999", description: "Lightweight and responsive road bike", image: "/domane.jpg" },
    { name: "Cannondale CAAD13", type: "Bike", price: "$1,799", description: "Versatile and durable aluminum frame", image: "/cannon.jpg" },
    { name: "Ford Transit", type: "Van", price: "$35,999", description: "Spacious and versatile cargo van", image: "/transit.jpg" },
    { name: "Mercedes-Benz Sprinter", type: "Van", price: "$45,999", description: "Reliable and well-equipped passenger van", image: "/sprinter.jpg" },
    { name: "Dodge Ram ProMaster", type: "Van", price: "$39,999", description: "Versatile and customizable cargo van", image: "/promaster.jpg" },
  ];


  const handleSearch = () => {
    if(searchTerm.trim() === ''){
      setSearchResults([]);
    }else{
      const results = allVehicles.filter(vehicle =>
        vehicle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vehicle.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vehicle.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    }
    
  }
  // setSearchResults([]);

  return (
    (
    <section className="w-full py-12 md:py-24 lg:py-32">
      
      <div className="container grid gap-8 px-4 md:px-6">
        <div className="grid gap-4 md:gap-6">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Explore Our Vehicle Collection</h1>
          <p
            className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Browse through our extensive selection of cars, bikes, and vans to find the perfect vehicle for your needs.
          </p>
          <p className="text-red-600 flex gap-2 items-center">
            <Lightbulb/> 
            Enter or click Search after each search attempt
          </p>
        </div>

        <form className="flex gap-2" onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
          <Input
            type="text"
            placeholder="Search by vehicle type or name...Toyota, Levo, Ford..."
            className="flex-1"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button type="submit" className="hover:shadow-md">Search</Button>
        </form>

        {searchResults.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {searchResults.map((vehicle, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                  <span className="sr-only">View</span>
                </Link>
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  width={500}
                  height={400}
                  className="object-cover w-full h-48"
                  style={{ aspectRatio: "500/400", objectFit: "cover" }}
                />
                <div className="p-4 bg-background">
                  <h3 className="text-xl font-bold">{vehicle.name}</h3>
                  <p className="text-sm text-muted-foreground">{vehicle.description}</p>
                  <h4 className="text-lg font-semibold md:text-xl">{vehicle.price}</h4>
                </div>
              </div>
            ))}
          </div>
        ) : searchTerm && (
          <div className="text-center p-8 bg-red-100 rounded-lg">
            <h2 className="text-2xl font-bold text-red-800 mb-2">No Matches Found</h2>
            <p className="text-red-600">We couldn&apos;t find any vehicles matching your search. Please try a different term.</p>
          </div>
        )}

        <div className="grid gap-6 md:grid-cols-3">
          <Collapsible className="group">
            <CollapsibleTrigger
              className="relative block h-[300px] overflow-hidden rounded-lg bg-muted/20 transition-all group-data-[state=open]:bg-muted/40">
              <Image
                src="/c.jpg"
                alt="Cars"
                width={600}
                height={400}
                className="h-full w-full object-cover object-center transition-all group-data-[state=open]:scale-110"
                style={{ aspectRatio: "600/400", objectFit: "cover" }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-6xl font-bold text-primary-foreground backdrop-blur-lg border">Cars</h2>
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent className="grid gap-4 p-4 md:p-6">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div
                  className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
                  <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                    <span className="sr-only">View</span>
                  </Link>
                  <Image
                    src="/camry.jpg"
                    alt="Car 1"
                    width={500}
                    height={400}
                    className="object-cover w-full h-48"
                    style={{ aspectRatio: "500/400", objectFit: "cover" }} />
                  <div className="p-4 bg-background">
                    <h3 className="text-xl font-bold">Toyota Camry</h3>
                    
                  </div>
                </div>
                <div
                  className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
                  <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                    <span className="sr-only">View</span>
                  </Link>
                  <Image
                    src="/civic.jpg"
                    alt="Car 2"
                    width={500}
                    height={400}
                    className="object-cover w-full h-48"
                    style={{ aspectRatio: "500/400", objectFit: "cover" }} />
                  <div className="p-4 bg-background">
                    <h3 className="text-xl font-bold">Honda Civic</h3>
                    
                  </div>
                </div>
                <div
                  className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
                  <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                    <span className="sr-only">View</span>
                  </Link>
                  <Image
                    src="/mustang.jpg"
                    alt="Car 3"
                    width={500}
                    height={400}
                    className="object-cover w-full h-48"
                    style={{ aspectRatio: "500/400", objectFit: "cover" }} />
                  <div className="p-4 bg-background">
                    <h3 className="text-xl font-bold">Ford Mustang</h3>
                   
                  </div>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className="group">
            <CollapsibleTrigger
              className="relative block h-[300px] overflow-hidden rounded-lg bg-muted/20 transition-all group-data-[state=open]:bg-muted/40">
              <Image
                src="/nbike.jpg"
                alt="Bikes"
                width={600}
                height={400}
                className="h-full w-full object-cover object-center transition-all group-data-[state=open]:scale-110"
                style={{ aspectRatio: "600/400", objectFit: "cover" }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-6xl font-bold text-primary-foreground backdrop-blur-lg border">Bikes</h2>
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent className="grid gap-4 p-4 md:p-6">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div
                  className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
                  <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                    <span className="sr-only">View</span>
                  </Link>
                  <Image
                    src="/levo.jpg"
                    alt="Bike 1"
                    width={500}
                    height={400}
                    className="object-cover w-full h-48"
                    style={{ aspectRatio: "500/400", objectFit: "cover" }} />
                  <div className="p-4 bg-background">
                    <h3 className="text-xl font-bold">Specialized Turbo Levo</h3>
                    
                  </div>
                </div>
                <div
                  className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
                  <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                    <span className="sr-only">View</span>
                  </Link>
                  <Image
                    src="/domane.jpg"
                    alt="Bike 2"
                    width={500}
                    height={400}
                    className="object-cover w-full h-48"
                    style={{ aspectRatio: "500/400", objectFit: "cover" }} />
                  <div className="p-4 bg-background">
                    <h3 className="text-xl font-bold">Trek Domane SL 6</h3>
                   
                  </div>
                </div>
                <div
                  className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
                  <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                    <span className="sr-only">View</span>
                  </Link>
                  <Image
                    src="/cannon.jpg"
                    alt="Bike 3"
                    width={500}
                    height={400}
                    className="object-cover w-full h-48"
                    style={{ aspectRatio: "500/400", objectFit: "cover" }} />
                  <div className="p-4 bg-background">
                    <h3 className="text-xl font-bold">Cannondale CAAD13</h3>
                   
                  </div>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className="group">
            <CollapsibleTrigger
              className="relative block h-[300px] overflow-hidden rounded-lg bg-muted/20 transition-all group-data-[state=open]:bg-muted/40">
              <Image
                src="/v.jpg"
                alt="Vans"
                width={600}
                height={400}
                className="h-full w-full object-cover object-center transition-all group-data-[state=open]:scale-110"
                style={{ aspectRatio: "600/400", objectFit: "cover" }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-6xl font-bold text-primary-foreground backdrop-blur-lg border">Vans</h2>
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent className="grid gap-4 p-4 md:p-6">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div
                  className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
                  <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                    <span className="sr-only">View</span>
                  </Link>
                  <Image
                    src="/transit.jpg"
                    alt="Van 1"
                    width={500}
                    height={400}
                    className="object-cover w-full h-48"
                    style={{ aspectRatio: "500/400", objectFit: "cover" }} />
                  <div className="p-4 bg-background">
                    <h3 className="text-xl font-bold">Ford Transit</h3>
                    
                  </div>
                </div>
                <div
                  className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
                  <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                    <span className="sr-only">View</span>
                  </Link>
                  <Image
                    src="/sprinter.jpg"
                    alt="Van 2"
                    width={500}
                    height={400}
                    className="object-cover w-full h-48"
                    style={{ aspectRatio: "500/400", objectFit: "cover" }} />
                  <div className="p-4 bg-background">
                    <h3 className="text-xl font-bold">Mercedes-Benz Sprinter</h3>
                   
                  </div>
                </div>
                <div
                  className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
                  <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                    <span className="sr-only">View</span>
                  </Link>
                  <Image
                    src="/promaster.jpg"
                    alt="Van 3"
                    width={500}
                    height={400}
                    className="object-cover w-full h-48"
                    style={{ aspectRatio: "500/400", objectFit: "cover" }} />
                  <div className="p-4 bg-background">
                    <h3 className="text-xl font-bold">Dodge Ram ProMaster</h3>
                    
                  </div>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </section>)
  );
}

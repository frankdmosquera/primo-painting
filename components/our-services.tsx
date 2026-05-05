import ServiceSection from "./service-section";
import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { services } from "@/data/serviceData";

export default function OurServices() {
  const categories = [
    { label: "Interior Painting", value: "interior" },
    { label: "Exterior Painting", value: "exterior" },
    { label: "Commercial Painting", value: "commercial" },
    { label: "Popcorn Ceiling Removal", value: "popcorn" },
    { label: "Cabinet Painting", value: "cabinet" },
    { label: "Garage Painting", value: "garage" },
  ];

  return (
    <section className="py-12 text-black overflow-visible">
      <ServiceSection
        title="Our Services"
        description="Transform Your Space  <br />with Our Expert Painting Services"
        buttonText="Explore Our Services"
        href="/services"
      />

      <Tabs defaultValue="interior" className="w-full pt-12">
        <TabsList
          className="
      flex 
    flex-wrap 
    gap-2 
    px-2 
    mb-32 md:mb-16 lg:mb-8
    w-full 
    justify-center 
    whitespace-nowrap
  "
          style={{ scrollBehavior: "smooth", scrollSnapType: "none" }}
        >
          {categories.map((cat) => (
            <TabsTrigger
              key={cat.value}
              value={cat.value}
              className="
        flex-shrink-0
        px-3 py-1
        text-sm text-black
        rounded-md
        cursor-pointer
        bg-white
        data-[state=active]:bg-[#0D378D]
        data-[state=active]:text-white
      "
            >
              {cat.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Cards */}
        {categories.map((cat) => (
          <TabsContent key={cat.value} value={cat.value}>
            <div className="w-full flex justify-center">
              {services
                .filter((s) => s.type === cat.value)
                .map((service) => (
                  <Card
                    key={service.id}
                    className="w-full md:w-2/3 xl:w-1/3  bg-[#f9f9f9] border-none rounded-lg shadow-sm pt-0"
                  >
                    <CardHeader className="p-0 relative h-56 sm:h-72 md:h-80">
                      <Image
                        src={service.imageSrc}
                        alt={service.altText}
                        fill
                        className="object-cover rounded-t-lg"
                      />
                    </CardHeader>
                    <CardContent className="p-4">
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </CardContent>
                    <CardFooter className="py-1 text-center cursor-pointer hover:bg-[#0D378D] hover:text-white border border-black w-36 rounded-[5px] ml-3">
                      <Link href={`/${service.slug}`}>
                        {service.buttonText}
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}

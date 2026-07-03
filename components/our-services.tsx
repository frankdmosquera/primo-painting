import ServiceSection from "./service-section";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { services } from "@/data/serviceData";
import GallerySection from "./gallery/GallerySection";
import ButtonBlue from "./ButtonBlue";

export default function OurServices() {
  const categories = [
    { label: "Walls", value: "walls" },
    { label: "Ceilings", value: "ceilings" },
    { label: "Trim & doors", value: "trim & doors" },
    { label: "Garages", value: "garages" },
    { label: "Cabinets", value: "cabinets" },
    { label: "Railings", value: "railings" },
  ];

  return (
    <section className="py-12  text-black overflow-visible bg-gray-50">
      <ServiceSection
        title="Our Services"
        description="Transform Your Space  <br />with Our Expert Painting Services"
        buttonText="Explore Our Services"
        href="/services"
      />

      <Tabs
        defaultValue={categories[0].value}
        // className="w-full pt-12 bg-[#f9f9f9] shadow-sm"
        className="w-full pt-4  "
      >
        {/* Cards */}
        {categories.map((cat) => (
          <TabsContent
            key={cat.value}
            value={cat.value}
            className="border-none shadow-none"
          >
            <div className="w-full flex justify-center border-none shadow-none">
              {services
                .filter((s) => s.type === cat.value)
                .map((service) => (
                  <Card
                    key={service.id}
                    className="w-full md:w-2/3 xl:w-1/3   border-none shadow-none rounded-lg  pt-0 pb-8"
                  >
                    <CardContent className="p-4">
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                      <p className="text-sm text-muted-foreground leading-relaxed py-2">
                        {service.description}
                      </p>
                      <GallerySection GalleryImages={service.images} />
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
        <TabsList
          className="
      flex 
      flex-wrap 
      gap-2 
      px-2 
      mb-12 md:mb-16 lg:mb-8
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
        <CardFooter className="pt-4">
          <ButtonBlue href={"/booking"} linkText="Book Now!" />
        </CardFooter>
      </Tabs>
    </section>
  );
}

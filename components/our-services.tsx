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
    <section className="w-full   text-black overflow-visible py-8  flex flex-col lg:flex-row   items-center lg:justify-center gap-0 sm:px-20 md:px-40 xl:px-20   xl:gap-10 2xl:px-40   2xl:gap-20">
      {/* left side  */}
      {/* left side  */}
      {/* left side  */}
      <div className=" w-full   xl:w-1/2">
        <ServiceSection
          title="Our Services"
          description="Transform Your Space  <br />with Our Expert Painting Services"
          buttonText="Explore Our Services"
          href="/services"
        />
        <div className="hidden lg:block mt-8">
          <ButtonBlue href={"/booking"} linkText="Book Now!" />
        </div>
      </div>
      {/* right side  */}
      {/* right side  */}
      {/* right side  */}
      <Tabs
        defaultValue={categories[0].value}
        className="w-full   xl:w-1/2 pt-4 "
      >
        {/* Cards */}
        {categories.map((cat) => (
          <TabsContent
            key={cat.value}
            value={cat.value}
            className="w-full  border-none shadow-none "
          >
            <div className=" pb-2 mb-0 w-full flex justify-center border-none shadow-none">
              {services
                .filter((s) => s.type === cat.value)
                .map((service) => (
                  <Card
                    key={service.id}
                    className="py-0    w-full  lg:w-full   border-none shadow-none rounded-lg "
                  >
                    <CardContent className="px-4  w-full">
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
          className=" flex  flex-wrap gap-2 px-2 mb-10 md:mb-14 lg:mb-6
           w-full justify-center whitespace-nowrap"
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
        <CardFooter className="pt-4  lg:w- lg:flex lg:justify-center lg:hidden">
          <ButtonBlue href={"/booking"} linkText="Book Now!" />
        </CardFooter>
      </Tabs>
    </section>
  );
}

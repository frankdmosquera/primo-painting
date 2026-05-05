import ServiceSection from './service-section'
import Image from 'next/image'
import Link from 'next/link'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { services } from '@/data/serviceData'

export default function OurServices() {
  const categories = [
    { label: 'Interior Painting', value: 'interior' },
    { label: 'Exterior Painting', value: 'exterior' },
    { label: 'Commercial Painting', value: 'commercial' },
    { label: 'Popcorn Ceiling Removal', value: 'popcorn' },
    { label: 'Cabinet Painting', value: 'cabinet' },
    { label: 'Garage Painting', value: 'garage' },
  ]

  return (
    <section className='py-12 text-black overflow-visible'>
      <ServiceSection
        title='Our Services'
        description='Transform Your Space  <br />with Our Expert Painting Services'
        buttonText='Explore Our Services'
        href='/services'
      />

      <Tabs defaultValue='interior' className='w-full pt-12'>
        <TabsList className='flex flex-wrap gap-1 mb-24 px-2'>
          {categories.map((cat) => (
            <TabsTrigger
              key={cat.value}
              value={cat.value}
              className='text-black data-[state=active]:text-white data-[state=active]:bg-[#0D378D] inline cursor-pointer text-[.7rem]'>
              {cat.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((cat) => (
          <TabsContent key={cat.value} value={cat.value}>
            <div className='w-full flex justify-center'>
              {services
                .filter((s) => s.type === cat.value)
                .map((service) => (
                  <Card
                    key={service.id}
                    className='w-full md:w-1/2 bg-[#f9f9f9] border-none rounded-lg shadow-sm pt-0'>
                    <CardHeader className='p-0 relative h-56 sm:h-72 md:h-80'>
                      <Image
                        src={service.imageSrc}
                        alt={service.altText}
                        fill
                        className='object-cover rounded-t-lg'
                      />
                    </CardHeader>
                    <CardContent className='p-4'>
                      <CardTitle className='text-lg'>{service.title}</CardTitle>
                      <p className='text-sm text-muted-foreground'>
                        {service.description}
                      </p>
                    </CardContent>
                    <CardFooter className='p-4'>
                      <Link href={`/services/${service.slug}`}>
                        <Button
                          variant='outline'
                          className='cursor-pointer hover:bg-[#0D378D] hover:text-white'>
                          {service.buttonText}
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  )
}

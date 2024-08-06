"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const data = ["sai_1.jpg", "sai_2.jpg",  "sai_1.jpg", "sai_3.jpg", "sai_4.jpg", "sai_5.jpg", "sai_2.jpg",];

const MyCarousel = () => {
  return (
    <Carousel 
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent className="flex items-center justify-center mb-2 lg:p-0">
        {data.map((image, index) => {
          console.log(`Rendering image: ${image}`);
          return (
            <CarouselItem key={index}>
              <div className="relative">
                <Image
                  key={index}
                  src={`/${image}`}
                  height={300}
                  width={300}
                  alt={`Image ${index + 1}`}
                  className="rounded-xl w-full h-full"
                  priority="true"
                  quality={100}
                />
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
};

export default MyCarousel;

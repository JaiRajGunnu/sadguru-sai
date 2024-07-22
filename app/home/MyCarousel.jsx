"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
const data = ["sai_1s.jpg", "sai_2s.jpg", "sai_3s.jpg", "sai_4s.jpg", "sai_5s.jpg"];
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
          return (
            <CarouselItem key={index}>
              <div className="relative rounded-3xl ">
                <Image
                  key={index}
                  src={`/${image}`}
                  height={300}
                  width={300}
                  alt={`Image ${index + 1}`}
                  className="rounded-2xl w-full h-full"
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

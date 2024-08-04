"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Play } from "lucide-react";

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative mt-[-5%] md:mt-0 lg:mt-0">
      <Dialog open={isOpen} onOpenChange={setIsOpen} className="">
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="bg-[#1f1f1f] text-white flex items-center justify-center border-none p-4 hover:bg-black hover:text-white lg:ml-[-35%] lg:mt-1 transition-all duration-200 delay-150  hover:opacity-90">
            {" "}
            <Play size={17} className="mr-2" />
            Special Video
          </Button>
        </DialogTrigger>
        <DialogContent className="text-base lg:max-w-[1000px] bg-[#0f1014] rounded-xl text-white border-none p-8 w-[95%] h-[45%] md:w-[75%] md:h-[75%] md:items-center lg:justify-center lg:items-center lg:w-[100%] lg:h-[80%]">
          <DialogHeader className="w-full h-full flex items-center justify-center md:items-start lg:items-start ">
            <DialogTitle className="text-2xl font-hso font-medium">
              Special Video
            </DialogTitle>
            <DialogDescription className="font-poppins text-xs lg:sm ">
            This is a special video clip promo of Sadguru Sai.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center justify-center rounded-2xl flex-col lg:mt-[-2%] mt-[-10%]">
          <iframe
        title="vimeo-player"
        src="https://player.vimeo.com/video/994453950"
        className="h-[260px] w-[100%] md:h-[380px] lg:w-[825px] lg:h-[500px] lg:p-05"
        allowFullScreen
        allow="fullscreen"
      ></iframe>

    </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

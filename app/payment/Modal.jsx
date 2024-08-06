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
import Link from "next/link";
import { Play } from "lucide-react";


export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="">
      <Dialog open={isOpen} onOpenChange={setIsOpen} className="">
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="bg-[#1f1f1f] text-white flex items-center justify-center border-none p-4 lg:ml-[20%] hover:bg-black hover:text-white transition-all duration-200 delay-150 hover:opacity-90">
            Check Instructions ?
          </Button>
        </DialogTrigger>
        <DialogContent
          className={`text-base lg:max-w-[1000px] bg-[#0f1014] rounded-xl text-white border-none p-8 tracking-wide flex flex-col items-center justify-center w-[95%] md:w-[80%] md:h-[80%] ${
            showVideo ? "lg:h-[80%]" : " lg:h-[60%]"
          }`}
        >
          {showVideo ? (
            <div className="flex justify-center rounded-2xl flex-col">
              <DialogHeader className=" flex items-center md:items-center lg:items-start md:ml-0 lg:ml-[5%]">
                <DialogTitle className="text-2xl font-hso font-medium">
                Watch Video
                </DialogTitle>
                <DialogDescription className=" font-poppins font-extralight text-sm  ">
                The demonstration video for completing the subscription payment.
                </DialogDescription>
              </DialogHeader>
                <iframe
                title="vimeo-player"
                src="https://player.vimeo.com/video/994453004"
                className="h-[250px] w-[375px] md:h-[380px] md:w-[450px] lg:w-[1025px] lg:h-[400px] lg:mt-[2%]"
                allowFullScreen
                allow="fullscreen"
              ></iframe>
              <div className="flex items-center justify-center">
              <Button
                type="button"
                className="bg-[#1f1f1f] mt-8 "
                onClick={() => setShowVideo(false)}
              >
                Back to Instructions
              </Button>
              </div>
            </div>
          ) : (
            <>
              <DialogHeader className="w-full h-full flex items-center justify-center md:items-start lg:items-start">
                <DialogTitle className="text-2xl font-hso font-medium">
                  Instructions
                </DialogTitle>
                <DialogDescription className="font-poppins font-extralight  text-sm">
                  Follow these steps or watch video to make subscription payment:
                </DialogDescription>
              </DialogHeader>
              <ul className="list-disc list-inside font-poppins font-extralight  w-full m-2 space-y-1 flex flex-col items-start justify-start">
                <li>
                  Click on <strong className="font-bold">&quot;Pay ₹ 59&quot;</strong> or{" "}
                  <strong className="font-bold">&quot;Pay ₹ 149&quot;</strong> button or this
                  <Link
                    href="https://amzn.to/4d8hpQ8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 font-bold text-blue-400"
                  >
                    Amazon link
                  </Link>.
                </li>
                <li>
                  Enter the desired amount and select the option{" "}
                  <strong className="font-bold">&quot;Buy now&quot;</strong>.
                </li>
                <li>
                  Complete the payment using a UPI app or any other available
                  method.
                </li>
                <li>
                  After the payment is successful, look for the{" "}
                  <strong className="font-bold">&quot;Share Link&quot;</strong> button.
                </li>
                <li>
                  Copy the link and then return to our website.
                </li>
                <li>
                  Please click on <strong className="font-bold">&quot;Verify Payment&quot;</strong> and submit the details for vertification.
                </li>
                <li>
                  After verification, you will receive the details shortly, and you will be able to access the content.
                </li>
              </ul>
              <Button
                type="button"
                className="bg-[#1f1f1f] mt-4 scale-110"
                onClick={() => setShowVideo(true)}
              >               
               <Play size={17} className="mr-2" />
                Watch Video
              </Button>
              <p className="opacity-50 text-white font-poppins text-center text-[12px] font-light p-03 lg:w-[35%]">( Click the button above to watch the demonstration of the subscription process. )</p>
            </>
          )}

        </DialogContent>
      </Dialog>
    </div>
  );
}

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
          className={`text-base lg:max-w-[1000px] bg-[#0f1014] rounded-xl text-white border-none p-8 tracking-wide flex flex-col items-center justify-center w-[95%] md:w-[75%] ${
            showVideo ? "lg:h-[70%]" : "md:h-[75%] lg:h-[55%]"
          }`}
        >
          {showVideo ? (
            <div className="flex items-center justify-center rounded-2xl flex-col">
              <iframe
                title="vimeo-player"
                src="https://player.vimeo.com/video/994453004"
                className="h-[250px] w-[375px] md:h-[380px] lg:w-[1025px] lg:h-[400px]"
                allowFullScreen
                allow="fullscreen"
              ></iframe>
              <Button
                type="button"
                className="bg-[#1f1f1f] mt-8"
                onClick={() => setShowVideo(false)}
              >
                Back to Instructions
              </Button>
            </div>
          ) : (
            <>
              <DialogHeader className="w-full h-full flex items-center justify-center md:items-start lg:items-start">
                <DialogTitle className="text-2xl font-hso font-medium">
                  Instructions
                </DialogTitle>
                <DialogDescription className="font-poppins text-sm">
                  Follow these steps or watch video to make subscription payment:
                </DialogDescription>
              </DialogHeader>
              <ul className="list-disc list-inside font-poppins w-full m-2 space-y-1 flex flex-col items-start justify-start">
                <li>
                  Click on <strong>&quot;Pay ₹ 59&quot;</strong> or{" "}
                  <strong>&quot;Pay ₹ 149&quot;</strong> button or this
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
                  <strong>&quot;Buy now&quot;</strong>.
                </li>
                <li>
                  Complete the payment using a UPI app or any other available
                  method.
                </li>
                <li>
                  After the payment is successful, look for the{" "}
                  <strong>&quot;Share Link&quot;</strong> button.
                </li>
                <li>Share the link directly via apps or by copying the link.</li>
                <li>
                  Now, please send the generated Amazon link to us via Telegram or
                  Instagram.
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
              <p className="opacity-50 text-white font-poppins text-center text-[12px] p-03 lg:w-[35%]">( Click the button above to watch the demonstration of the subscription process. )</p>
            </>
          )}

        </DialogContent>
      </Dialog>
    </div>
  );
}

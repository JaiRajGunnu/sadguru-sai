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
import { BookOpen } from "lucide-react";

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <Dialog open={isOpen} onOpenChange={setIsOpen} className="">
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="bg-[#1f1f1f] text-white flex items-center justify-center border-none p-4 hover:bg-black hover:text-white lg:ml-[-10%]">
            {" "}
            <BookOpen size={17} className="mr-2" />
            Read Instructions ?
          </Button>
        </DialogTrigger>
        <DialogContent className="text-base lg:max-w-[1000px] bg-[#0f1014] rounded-xl text-white border-none p-8 tracking-wide flex flex-col items-center justify-center w-full h-full md:w-[75%] md:h-[75%] md:items-center lg:justify-center lg:items-center lg:w-[75%] lg:h-[50%]">
          <DialogHeader className="w-full h-full flex items-center justify-center md:items-start lg:items-start">
            <DialogTitle className="text-2xl font-hso font-medium">
              Instructions
            </DialogTitle>
            <DialogDescription className="font-poppins text-sm">
              Follow these steps to make a payment using Amazon:
            </DialogDescription>
          </DialogHeader>
          <ul className="list-disc list-inside font-poppins m-2 space-y-1">
            <li>
              Click on <strong>&quot;Pay ₹99&quot;</strong> or{" "}
              <strong>&quot;Pay ₹249&quot;</strong> button or this
              <Link
                href="https://amzn.to/4d8hpQ8"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 font-bold text-blue-400"
              >
                Amazon link
              </Link>
              .
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

          <DialogFooter className="flex items-center justify-center">
            <Button
              type="button"
              className="bg-[#1f1f1f] "
              onClick={() => setIsOpen(false)}
            >
              Okay, I Understand
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

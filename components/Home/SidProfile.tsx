import React from "react";
import { FaLinkedinIn, FaGithub, FaFacebookF } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
const SidProfile = () => {
  return (
    <Card className="w-full md:w-[300px] py-4">
      <CardContent>
        <Image
          src={"/images/profile.png"}
          className="w-[200px] mx-auto md:w-full rounded-full "
          width={250}
          height={250}
          alt="Profile"
        />
        <CardTitle className="pt-4 text-xl text-center">
          Md Nishath Khandakar
        </CardTitle>
        <p className="mt-4 text-center text-lg font-semibold">
          Full Stack Developer
        </p>
        <p className="mt-5 text-center text-base">nisth.khandakar@gmail.com</p>
        <p className="mt-2 text-center text-base">+8801767-591988</p>
      </CardContent>
      <CardFooter className="flex-col">
        <div className="flex gap-4 justify-center w-full">
          <div className="border rounded-[5px] p-3 duration-200 ease-linear cursor-pointer">
            <FaFacebookF />
          </div>
          <div className="border rounded-[5px] p-3 duration-200 ease-linear cursor-pointer">
            <FaGithub />
          </div>
          <div className="border rounded-[5px] p-3 duration-200 ease-linear cursor-pointer">
            <FaLinkedinIn />
          </div>
        </div>

        <Button className="mt-8 w-full text-xl">Hire Me!</Button>
      </CardFooter>
    </Card>
  );
};

export default SidProfile;

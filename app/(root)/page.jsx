import About from "@/components/Home/About";
import Intro from "@/components/Home/Intro";
import { Card, CardContent } from "@/components/ui/card";
import { Subheading } from "@/components/ui/subheading";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Intro />
      <div className="grid grid-cols-12 mt-4 gap-4">
        <div className="col-span-12 lg:col-span-5 gap-4 flex flex-col">
          <div className="">
            <Link href={"/about"}>
              <Card className="bg-secondary">
                <CardContent className="pt-6">
                  <About />
                </CardContent>
              </Card>
            </Link>
          </div>

          <div className="">
            <Link href={"/services"}>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex gap-10 w-full md:justify-between">
                    <Image
                      src={"/images/react.png"}
                      width={75}
                      height={75}
                      alt="react"
                    />
                    <Image
                      src={"/images/nextjs.png"}
                      width={75}
                      height={75}
                      alt="react"
                    />
                    <Image
                      src={"/images/js.png"}
                      width={75}
                      height={75}
                      alt="react"
                    />
                  </div>
                  <p className="text-base my-3">Specialization</p>
                  <Subheading>Services Offer</Subheading>
                </CardContent>
              </Card>
            </Link>
          </div>
          <div className="">
            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-8 md:justify-between">
                  <div className="text-center">
                    <h3 className="font-bold text-4xl">3+</h3>
                    <p className="text-base my-3">Years of Experience</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold text-4xl">30+</h4>
                    <p className="text-base my-3">Project Completed</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-7 gap-4 flex flex-col">
          <div className="">
            <Link href={"/projects"}>
              <Card>
                <CardContent className="pt-6">
                  <Image
                    src={"/images/project.png"}
                    width={1000}
                    height={600}
                    alt="projects"
                    className="w-full h-[150px]  object-cover"
                    layout=""
                  />
                  <p className="text-base my-3">View all projects</p>
                  <Subheading>Projects</Subheading>
                </CardContent>
              </Card>
            </Link>
          </div>

          <div className="">
            <div className="grid grid-cols-2 gap-4">
              <Link href={"/blog"}>
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-base my-3">Visit Our Blog</p>
                    <Subheading>Blog</Subheading>
                  </CardContent>
                </Card>
              </Link>
              <Link href={"/contact"}>
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-base my-3">Let’s work</p>
                    <Subheading>Contact</Subheading>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
          <div className="">
            <Link href={"/testomonials"}>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-base my-3">What Client Says?</p>
                  <Subheading>Testomonials</Subheading>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Container from "./Container";
import { ModeToggle } from "./ModeToggle";
import { AiOutlineMenu } from "react-icons/ai";
import Logo from "./Logo";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const pathname: string = usePathname();
  // console.log(pathname);
  return (
    <nav className=" border-b py-2">
      <Container>
        <div className="flex items-center justify-between gap-10">
          <Logo />
          <div className="flex items-center gap-3">
            {/* <UserButton /> */}
            <ModeToggle />

            <Sheet>
              <SheetTrigger>
                <AiOutlineMenu className="text-4xl text-primary cursor-pointer" />
              </SheetTrigger>
              <SheetContent className="p-0">
                <SheetHeader className={"border-b"}>
                  <SheetTitle className={" p-4 text-left"}>Menu</SheetTitle>
                </SheetHeader>
                <ul className="p-4 space-y-4 text-muted-foreground">
                  <li>
                    <Link
                      href={"/"}
                      className={`${pathname === "/" ? "text-primary" : ""}`}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      href={"/about"}
                      className={`${
                        pathname === "/about" ? "text-primary" : ""
                      }`}
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/contact"}
                      className={`${
                        pathname === "/contact" ? "text-primary" : ""
                      }`}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;

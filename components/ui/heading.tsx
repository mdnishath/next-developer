import { Heading } from "@/types/developer.types";
export function Heading({ children, className }: Heading) {
  return (
    <h1
      className={`${className} scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-5xl`}
    >
      {children}
    </h1>
  );
}

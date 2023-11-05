import { Heading } from "@/types/developer.types";
export function Subheading({ children, className }: Heading) {
  return (
    <h3
      className={`${className} scroll-m-20 text-lg font-extrabold tracking-tight lg:text-xl`}
    >
      {children}
    </h3>
  );
}

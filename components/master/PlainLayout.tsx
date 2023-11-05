import React from "react";
import Navbar from "@/components/Navbar";

const PlainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default PlainLayout;

import Container from "@/components/Container";
import SidProfile from "@/components/Home/SidProfile";
import PlainLayout from "@/components/master/PlainLayout";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <PlainLayout>
      <Container>
        <div className="flex flex-col md:flex-row w-full py-8 gap-4">
          <div>
            <SidProfile />
          </div>
          <div className="flex-grow">{children}</div>
        </div>
      </Container>
    </PlainLayout>
  );
};

export default layout;

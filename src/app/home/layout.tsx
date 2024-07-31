import { redirect } from "next/navigation";
import Navbar from "../components/Navbar";
import React from "react";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="px-[60px] pb-6">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;

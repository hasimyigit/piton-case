import { redirect } from "next/navigation";
import Navbar from "../components/Navbar";
import React from "react";
import { getSession } from "@/lib/actions";

const Layout = async({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const  session  = await getSession()
  if(!session.isLoggedIn) {
    redirect("/sign-in");
  }
  return (
    <div className="px-[60px] pb-6">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;

import Footer from "@/components/shared/Footer";
import Sidebar from "@/components/ui/Sidebar";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Sidebar>{children}</Sidebar>
      <Footer />
    </>
  );
};

export default DashboardLayout;

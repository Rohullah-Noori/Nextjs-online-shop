import React from "react";
import Navbar from "./Navbar";

interface IlayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: IlayoutProps) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

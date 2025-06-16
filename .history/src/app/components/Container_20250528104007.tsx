import React from "react";
interface IContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: IContainerProps) {
  return <div className="container mx-auto">{children}</div>;
}

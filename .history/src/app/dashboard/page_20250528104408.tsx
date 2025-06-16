import React from "react";
import Container from "../components/Container";

export default function Dashboard() {
  return (
    <div className="bg-gray-400 text-center">
      <Container>
        <div className="">
          <div className="grid grid-cols-3 gap-x-1 mt-2 mb-4 mx-3 ">
            <input type="text" placeholder="title" />
            <input type="text" placeholder="price" />
            <input type="text" placeholder="image" />
          </div>
          <textarea placeholder="description" className="w-full"></textarea>
        </div>
      </Container>
    </div>
  );
}

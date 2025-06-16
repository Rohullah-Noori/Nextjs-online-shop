import React from "react";
import Container from "../components/Container";

export default function Dashboard() {
  return (
    <div className="bg-gray-400 text-center">
      <Container>
        <div className="mx-3">
          <div className="grid grid-cols-3 gap-2 mt-2 mb-4  ">
            <input type="text" placeholder="title" className="bg-white" />
            <input type="text" placeholder="price" />
            <input type="text" placeholder="image" />
          </div>
          <textarea placeholder="description" className="w-full"></textarea>
        </div>
      </Container>
    </div>
  );
}

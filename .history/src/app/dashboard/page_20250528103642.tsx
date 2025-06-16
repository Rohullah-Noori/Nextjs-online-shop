import React from "react";
import Container from "../components/Container";

export default function Dashboard() {
  return (
    <div className="bg-gray-400 h-screen">
      <Container>
        <div>
          <input type="text" placeholder="title" />
          <input type="text" placeholder="price" />
          <input type="text" placeholder="image" />
        </div>
        <textarea placeholder="description"></textarea>
      </Container>
    </div>
  );
}

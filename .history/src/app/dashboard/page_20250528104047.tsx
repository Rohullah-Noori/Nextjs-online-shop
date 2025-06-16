import React from "react";
import Container from "../components/Container";

export default function Dashboard() {
  return (
      <Container>
    <div className="bg-gray-400 text-center">
         <div className="grid grid-cols-3 gap-2 mt-2 mb-4  ">
          <input type="text" placeholder="title" />
          <input type="text" placeholder="price" />
          <input type="text" placeholder="image" />
        </div>
        <textarea placeholder="description"></textarea>
    
       
      </Container>
    </div>
  );
}

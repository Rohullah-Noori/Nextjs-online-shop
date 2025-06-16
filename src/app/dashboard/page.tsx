"use client";
import React, { ChangeEvent, useState } from "react";
import Container from "../components/Container";
import axios from "axios";

export default function Dashboard() {
  const [product, setProduct] = useState({
    title: "",
    price: "",
    image: "",
    description: "",
  });

  const OnChangeProduct = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (
      !product.title ||
      !product.price ||
      !product.image ||
      !product.description
    ) {
      alert("Please fill in all fields.");
      return;
    }

    axios.post("http://localhost:3004/products", {
      id: Math.floor(Math.random() * 10000).toString(),
      ...product,
    });

    alert("Product created!");
    setProduct({ title: "", price: "", image: "", description: "" });
  };

  return (
    <div className="bg-gray-100 min-h-96 py-10">
      <Container>
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
            Create New Product
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <input
              name="title"
              value={product.title}
              onChange={OnChangeProduct}
              type="text"
              placeholder="Title"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              name="price"
              value={product.price}
              onChange={OnChangeProduct}
              type="text"
              placeholder="Price"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              name="image"
              value={product.image}
              onChange={OnChangeProduct}
              type="text"
              placeholder="Image URL (e.g. t3.ftcdn.net/...)"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <textarea
            name="description"
            value={product.description}
            onChange={OnChangeProduct}
            placeholder="Description"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 h-28 mb-4"
          />

          <div className="text-center">
            <button
              onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg transition"
            >
              Create Product
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}

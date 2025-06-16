"use client";

import Link from "next/link";
import Container from "./components/Container";
import image from "../app/assets/shopping.jpg";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="bg-gray-50 min-h-96 flex  items-center">
      <Container>
        <div className="grid md:grid-cols-2 gap-10 items-center pb-10 md:pb-0">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-sky-600 mb-4">
              Welcome to MyShop
            </h1>
            <p className="text-gray-700 text-lg mb-6">
              Discover the latest products with the best prices. From
              electronics to fashion, we have everything you need.
            </p>
            <Link
              href="/store"
              className="inline-block bg-sky-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-sky-600 transition"
            >
              Go to Store
            </Link>
          </div>

          <div className="flex justify-center">
            <Image
              src={image}
              alt="Shopping"
              width={400}
              height={300}
              className="max-w-full h-auto"
              priority
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

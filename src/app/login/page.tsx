"use client";
import React, { useState } from "react";
import Container from "../components/Container";

import Cookie from "js-cookie";
import { useRouter } from "next/navigation";

export default function Login() {
  const [user, setUser] = useState("Rohullah");
  const [password, setPassword] = useState("12345");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = {
        token: "asdasfasfdasdsaafs",
        expire: 7,
      };

      Cookie.set("token", response.token, { expires: response.expire });
      router.push("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please try again.");
    }
  };

  return (
    <div className=" min-h-96 flex items-center justify-center bg-gray-100">
      <Container>
        <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md p-8 w-full">
          <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
            Login
          </h2>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Username or Email"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              onClick={handleLogin}
              disabled={!user || !password}
              className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition disabled:bg-blue-300"
            >
              Login
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}

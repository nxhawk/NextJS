"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import React, { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginInProgress, setLoginInProgress] = useState(false);

  async function handleFormSubmit(e) {
    e.preventDefault();
    setLoginInProgress(true);
    // const { ok } = await fetch("/api/login", {
    //   body: JSON.stringify({ email, password }),
    //   headers: { "Content-Type": "application/json" },
    //   method: "POST",
    // });
    // if (ok) {
    // } else {
    // }
    await signIn("Credentials");

    setLoginInProgress(false);
  }
  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">Login</h1>
      <form className="max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input
          name="email"
          type="email"
          placeholder="email"
          disabled={loginInProgress}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          value={password}
          disabled={loginInProgress}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" disabled={loginInProgress}>
          Login
        </button>
        <div className="my-4 text-center text-gray-500">
          or login with provider
        </div>
        <button className="flex gap-4 items-center justify-center">
          <Image src={"/google.png"} alt={""} width={24} height={24} />
          Login with google
        </button>
      </form>
    </section>
  );
};

export default LoginPage;

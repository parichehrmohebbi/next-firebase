"use client";
import React from "react";
import signIn from "@firebase/auth/signIn";
import { useRouter } from "next/navigation";

function SignIn() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  const handleForm = async (event) => {
    event.preventDefault();

    const { result, error } = await signIn(email, password);

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
    return router.push("/");
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center text-gray-dark">
        <h1 className="p-24 ">
          <span className="font-bold">firebase sign in</span> with email and
          password
        </h1>
        <form onSubmit={handleForm} className="flex flex-col">
          <label htmlFor="email" className="pb-6">
            <p>Email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              name="email"
              id="email"
              placeholder=" example@mail.com"
              className="rounded-lg w-[20rem] h-10 pl-4"
            />
          </label>
          <label htmlFor="password">
            <p>Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              name="password"
              id="password"
              placeholder="password"
              className="rounded-lg w-[20rem] h-10 pl-4"
            />
          </label>
          <button className="rounded-lg bg-orange h-10 mt-10" type="submit">
            Sign in
          </button>
          <button
            className="rounded-lg border-gray-dark border h-10 mt-4"
            onClick={() => router.push("/auth/signUp")}
          >
            Sign up
          </button>
        </form>
      </div>
    </>
  );
}

export default SignIn;

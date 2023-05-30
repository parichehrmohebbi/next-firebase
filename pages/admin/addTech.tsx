"use client";

import React, { useEffect, useState } from "react";
import { useAuthContext } from "@context/AuthContext";
import addData from "@firebase/firestore/addData";

import { useRouter } from "next/navigation";
function AddTech() {
  const { user } = useAuthContext();
  console.log("firebase user", user);
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  React.useEffect(() => {
    if (user == null) router.push("/auth/signIn");
  }, [user]);

  const handleSumbit = async () => {
    const data = {
      title: title,
      description: description,
    };
    const { result, error } = await addData("dictionary", data);

    if (error) {
      return console.log(error);
    } else router.push("/");
  };

  return (
    <>
      <h1 className="font-bold pb-10 text-2xl">
        Add a new tech to the firebase collection
      </h1>
      <div>
        <label htmlFor="title">
          <p>Title</p>
          <input
            type="text"
            value={title}
            className="rounded-lg w-[20rem] h-10 pl-4 mb-4"
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="description">
          <p>Description</p>
          <input
            type="text"
            value={description}
            className="rounded-lg w-[20rem] h-10 pl-4"
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
      </div>
      <button
        onClick={handleSumbit}
        className="rounded-lg bg-orange  h-10 mt-7 w-[20rem]"
      >
        {" "}
        create{" "}
      </button>
    </>
  );
}

export default AddTech;

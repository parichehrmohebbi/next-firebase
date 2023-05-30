"use client";
import React, { useEffect, useState } from "react";
import { useAuthContext } from "@context/AuthContext";
import addData from "@firebase/firestore/addData";
import { AuthContextProvider } from "@context/AuthContext";

import { useRouter } from "next/navigation";
function AddTech() {
  const { user } = useAuthContext();
  console.log("eeeeee", user);
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  React.useEffect(() => {
    if (user == null) router.push("/");
  }, [user]);

  const handleSumbit = async () => {
    const data = {
      name: "John snow",
      house: "Stark",
    };
    const { result, error } = await addData("users", "user-id", data);

    if (error) {
      return console.log(error);
    }
  };

  return (
    <AuthContextProvider>
      <h1>Only logged in users can view this page</h1>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button onClick={handleSumbit}></button>
    </AuthContextProvider>
  );
}

export default AddTech;

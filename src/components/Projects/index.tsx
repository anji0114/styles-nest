"use client";
import supabase from "@/utils/supabase";
import { useState } from "react";

export const Projects = () => {
  const [name, setName] = useState("");

  const createProject = async () => {
    if (!name) return;
    const { error } = await supabase.from("projects").insert({
      name: name,
      description: "説明文",
    });
    alert("ok");
  };

  return (
    <div>
      <div className="text-black">
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="mt-5">
        <button className="border border-white px-5 py-1" onClick={() => createProject()}>
          create project
        </button>
      </div>
    </div>
  );
};

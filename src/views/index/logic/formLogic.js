import axios from "axios";
import { useState } from "react";
export async function handleSubmit(e, setLoaded, setLoading) {
  setLoading(true);
  e.preventDefault();
  const text = document.getElementById("text");
  const front = document.getElementById("front");
  const right = document.getElementById("right");
  const back = document.getElementById("back");
  const left = document.getElementById("left");
  const top = document.getElementById("top");
  const bottom = document.getElementById("bottom");

  const formData = new FormData();

  await formData.append("text", text.value);
  await formData.append("front", front.files[0]);
  await formData.append("right", right.files[0]);
  await formData.append("back", back.files[0]);
  await formData.append("left", left.files[0]);
  await formData.append("top", top.files[0]);
  await formData.append("bottom", bottom.files[0]);
  const response = await axios.post("/api/scene", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MGQ2NTc4YjMxZjAyMzBhOTQ3ZmM0ZGEiLCJpYXQiOjE2MjQ2NzQ0NDJ9.OoO-Gm4s45olHIhsFoEdxVALd-tEFFUygt03uRdPlhw",
    },
    onUploadProgress: (ProgressEvent) => {
      if ((ProgressEvent.loaded / ProgressEvent.total) * 100 > 99)
        setLoading(false);
      setLoaded((ProgressEvent.loaded / ProgressEvent.total) * 100);
    },
  });
}

export async function getScenes(setter) {
  const scenes = await axios.get("/api/scene", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MGQ2NTc4YjMxZjAyMzBhOTQ3ZmM0ZGEiLCJpYXQiOjE2MjQ2NzQ0NDJ9.OoO-Gm4s45olHIhsFoEdxVALd-tEFFUygt03uRdPlhw",
    },
  });
  setter(scenes.data.scenes);
}

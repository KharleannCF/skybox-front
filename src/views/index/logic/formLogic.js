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

  formData.append("text", text.value);
  formData.append("front", front.files[0]);
  formData.append("right", right.files[0]);
  formData.append("back", back.files[0]);
  formData.append("left", left.files[0]);
  formData.append("top", top.files[0]);
  formData.append("bottom", bottom.files[0]);
  const response = await axios.post("/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress: (ProgressEvent) => {
      if ((ProgressEvent.loaded / ProgressEvent.total) * 100 > 99)
        setLoading(false);
      setLoaded((ProgressEvent.loaded / ProgressEvent.total) * 100);
    },
  });
}

export async function getScenes(setter) {
  const scenes = await axios.get("/api/scenes");
  setter(scenes.data.scenes);
}

import axios from "axios";

export async function handleSubmit(e, setLoaded, setLoading, files) {
  setLoading(true);
  e.preventDefault();
  const text = document.getElementById("text");
  const front = files.front;
  const right = files.right;
  const back = files.back;
  const left = files.left;
  const top = files.top;
  const bottom = files.bottom;

  console.log("==============================================", {
    text,
    front,
    right,
    back,
    left,
    top,
    bottom,
  });

  const formData = new FormData();

  await formData.append("text", text.value);
  await formData.append("front", front);
  await formData.append("right", right);
  await formData.append("back", back);
  await formData.append("left", left);
  await formData.append("top", top);
  await formData.append("bottom", bottom);

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

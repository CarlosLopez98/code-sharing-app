const API_URL = "http://localhost:8080/api";

export const uploadFile = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await fetch(`${API_URL}/files`, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      console.log("File uploaded correctly!");
    } else {
      console.error("Error while uploading the file.");
    }
  } catch (error) {
    console.error("Error", error);
  }
}
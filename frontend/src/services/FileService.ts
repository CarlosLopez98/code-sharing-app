import { FileResponse } from "../types/file.d";

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

export const fetchFile = async (fileId: string): Promise<FileResponse | undefined> => {
  try {
    const response = await fetch(`${API_URL}/files/${fileId}`);

    if (!response.ok) {
      throw new Error("Error while getting the file");
    }

    const blob = await response.blob();
    const content = await blob.text();

    const contentDisposition = response.headers.get("Content-Disposition");
    let fileName = `file_${fileId}`;
    let extension = "txt"

    if (contentDisposition) {
      const match = contentDisposition.match(/filename="(.+?)"/);
      if (match && match[1]) {
        fileName = match[1];
        extension = fileName.split(".").pop() || "txt";
      }
    }

    return {
      content,
      ext: extension,
    }
  } catch (error) {
    console.error("Error in fetchFile:", error);
    return undefined;
  }
}
export class FileService {
  private static api_url: string = "http://localhost:8080/api";

  public static async uploadFile(file: File, abortController: AbortController) {
    const formData = new FormData();
    formData.append("file", file);

    return await fetch(`${this.api_url}/files`, {
      method: "POST",
      body: formData,
      signal: abortController.signal
    });
  }

  public static async getFile(fileId: string, abortController: AbortController) {
    return await fetch(`${this.api_url}/files/${fileId}`, {
      method: "GET",
      signal: abortController.signal
    });
  }
}
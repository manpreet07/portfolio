import axios from "axios";

const apiUrl = import.meta.env.VITE_SPACE_API_URL;

export async function getAPod() {
  const response = await axios.get(apiUrl + "/api/v1/apod");
  return response.data;
}

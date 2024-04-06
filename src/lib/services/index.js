import axios from "axios";

function ServiceAdapter() {
  return axios.create({
    baseURL: "https://dummyjson.com",
    responseType: "json",
  });
}

export default ServiceAdapter;

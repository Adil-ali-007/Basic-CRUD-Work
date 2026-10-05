import axios from "axios";

const bookBaseurl = axios.create({
  baseURL: "http://localhost:8000/book",
});

export default bookBaseurl;
import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e1984007783b4d2aa95957d45d8b522c",
  },
});

import Axios from "axios";
import { baseURL } from "../env";
export const api = Axios.create({
  baseURL,
  timeout: 8000,
});

export const BcwServer = Axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/",
  timeout: 3500,
});

export const GifServer = Axios.create({
  baseURL: "https://api.giphy.com/v1/gifs/",
  timeout: 3500,
});

// api_key: FtUhtVAkn006OVS2B7ZRzdsVweJgN7cj;
// search
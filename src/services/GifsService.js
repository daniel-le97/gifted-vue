import { AppState } from "../AppState.js";
import { Gif } from "../models/Gifs.js";
import { GifServer } from "./AxiosService.js";

class GifsService {
  async searchGifs(search) {
    console.log(search);
    const res = await GifServer.get("/search", {
      params: {
        api_key: "FtUhtVAkn006OVS2B7ZRzdsVweJgN7cj",
        limit:20,
        rating: 'pg',
        q: search
      },
    });
    
    AppState.gifs = res.data.data.map(g => new Gif(g))
    console.log(AppState.gifs);
  }
  //
}
export const gifsService = new GifsService();
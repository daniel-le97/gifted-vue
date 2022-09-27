import { AppState } from "../AppState.js";
import { Gift } from "../models/Gift.js";
import { BcwServer } from "./AxiosService.js";

class GiftsService {
  async getGifts() {
    const res = await BcwServer.get("/api/gifts");
    AppState.gifts = res.data.map((g) => new Gift(g));
  }
}
export const giftsService = new GiftsService();

import { AppState } from "../AppState.js";
import { Gift } from "../models/Gift.js";
import { BcwServer } from "./AxiosService.js";

class GiftsService {
  async sendGifts(editable) {
    const res = await BcwServer.post("/api/gifts", editable);
    // let newGift = new Gift(res.data);
    AppState.gifts = [new Gift(res.data), ...AppState.gifts];
  }
  async getGifts() {
    const res = await BcwServer.get("/api/gifts");
    AppState.gifts = res.data.map((g) => new Gift(g));
  }
  async toggleGift(giftId) {
    const openedGift = AppState.gifts.find((g) => g.id == giftId);
    console.log(openedGift);
    if (!openedGift) {
      throw new Error("bad id");
    }
    openedGift.opened = true;
    const res = await BcwServer.put(`/api/gifts/${openedGift.id}`, openedGift);
    openedGift.url = res.data.url;
  }
}
export const giftsService = new GiftsService();

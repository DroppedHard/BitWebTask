import axios from "axios";
import { GetPrizes, Prize } from "../interfaces/DataInterface"

export default class DataHandler {
    static url:string = "https://api.nobelprize.org/2.1/nobelPrizes";
    constructor() {
    }
    static async fetchData():Promise<Prize[]> {
        const { data, status } = await axios.get<GetPrizes>(
            this.url,
            {
                headers: {
                    Accept:"application/json"
                },
            },
        );
        console.log(data, status)
        return data.nobelPrizes
    }
}
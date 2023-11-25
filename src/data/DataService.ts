import axios from "axios";
import { GetPrizes, Prize } from "../interfaces/DataInterface"

export default class DataService {
    static url:string = "https://api.nobelprize.org/2.1/nobelPrizes";
    static data:Prize[] = []
    constructor() {
    }
    static async fetchData():Promise<Prize[]> {
        const { data } = await axios.get<GetPrizes>(
            this.url,
            {
                headers: {
                    Accept:"application/json"
                },
            },
        );
        this.data = data.nobelPrizes
        return data.nobelPrizes
    }
}
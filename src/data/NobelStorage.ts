import { Prize } from "../interfaces/DataInterface";
import DataHandler from "./DataHandler";

export default class NobelStorage {
    data:Prize[] = []
    minYear:number = Infinity
    maxYear:number = 0
    constructor() {
        if (this.data.length) {
            console.log("Data was already fetched.")
            console.log(this.data)
        } else {
            DataHandler.fetchData().then((data:Prize[]) => {
                this.data = data
                this.findDateRange()
            })
        }
    }
    findDateRange() {
        this.data.forEach((el:Prize) => {
            this.minYear = Math.min(parseInt(el.awardYear), this.minYear)
            this.maxYear = Math.max(parseInt(el.awardYear), this.maxYear)
        })
    }
}
import { Prize } from "../interfaces/DataInterface";
import DataService from "./DataService";

export default class NobelController {
    data:Prize[] = []
    yearRange:number[] = []
    constructor() {}
    async fetchData():Promise<Prize[]> {
        if (!this.data.length) {
            this.data = await DataService.fetchData()
        }
        return this.data
    }
    getYearRange():number[] {
        this.fetchData()
        let minYear:number = Infinity
        let maxYear:number = 0
        this.data.forEach((el:Prize) => {
            minYear = Math.min(parseInt(el.awardYear), minYear)
            maxYear = Math.max(parseInt(el.awardYear), maxYear)
        })
        this.yearRange = new Array(maxYear-minYear+1).fill(0).map((_, i) => i+minYear);
        return this.yearRange
    }
}
import { Prize, TranslationSelect } from "../interfaces/DataInterface";
import DataService from "./DataService";

export default class NobelController {
    static lang:TranslationSelect = 'en';
    constructor() {}
    static async fetchData():Promise<Prize[]> {
        if (!DataService.data.length) {
            await DataService.fetchData()
        }
        return DataService.data
    }
    static getYearRange():number[] {
        let minYear:number = Infinity
        let maxYear:number = 0
        DataService.data.forEach((el:Prize) => {
            minYear = Math.min(parseInt(el.awardYear), minYear)
            maxYear = Math.max(parseInt(el.awardYear), maxYear)
        })
        let yearRange = new Array(maxYear-minYear+1).fill(0).map((_, i) => i+minYear);
        return yearRange
    }
    static getNobelsInYear(year:string):Prize[] {  //year fetched from url is string-type
        return DataService.data.filter((el:Prize) => {
            if (el.awardYear == year) {
                return true
            }
            return false
        })
    }
}
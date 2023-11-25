export type Translation = {
    en:string,
    ro:string,
    se:string
}
export type PrizeLink = {
    rel:string,
    href:string,
    action:string,
    types:string
}
export type Prize = {
    awardYear:string,
    category:Translation,
    categoryFullName:Translation,
    dateAwarded:Date,
    prizeAmount:number,
    prizeAmountAdjusted:number,
    links:PrizeLink,
    laureates:any
}
export type GetPrizes = {
    nobelPrizes:Prize[],
    links:any,
    meta:any,
}

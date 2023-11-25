export type Translation = {
    en:string,
    no:string,
    se:string
};
export type TranslationSelect = keyof Translation;
export type PrizeLink = {
    rel:string,
    href:string,
    action:string,
    types:string
};
export type Prize = {
    awardYear:string,
    category:Translation,
    categoryFullName:Translation,
    dateAwarded:string,
    prizeAmount:number,
    prizeAmountAdjusted:number,
    links:PrizeLink,
    laureates:any
};
export type GetPrizes = {
    nobelPrizes:Prize[],
    links:any,
    meta:any,
};

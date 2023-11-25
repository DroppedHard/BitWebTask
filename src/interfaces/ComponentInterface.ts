import { MouseEventHandler } from "react"
import { Prize } from "./DataInterface"

export type StylizedButtonFields = {
    content:string,
    bgColor:string,
    bgColorHover:string,
    bgColorActive:string,
    textColor:string,
    clickHandler:MouseEventHandler<HTMLButtonElement>,
    ifDisabled:boolean,
}

export type MultiRangedSlideFields = {
    min:number,
    max:number,
}

export type NobelListNodeFields = {
    info:Prize,
}
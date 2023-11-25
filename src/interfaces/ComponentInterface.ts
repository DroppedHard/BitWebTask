import { MouseEventHandler } from "react"

export type ButtonFields = {
    content:string,
    bgColor:string,
    bgColorHover:string,
    bgColorActive:string,
    textColor:string,
    clickHandler:MouseEventHandler<HTMLButtonElement>,
}

export type MultiRangedSlideFields = {
    min:number,
    max:number,
}
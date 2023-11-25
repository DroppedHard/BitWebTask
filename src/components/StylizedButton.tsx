import { StylizedButtonFields } from "../interfaces/ComponentInterface";

export default function StylizedButton(props:StylizedButtonFields) {
  return (
    <button onClick={props.clickHandler} className={`text-${props.textColor} bg-${props.bgColor} p-3 px-5 rounded-full hover:bg-${props.bgColorHover} active:bg-${props.bgColorActive}`}>{props.content}</button>
  )
}

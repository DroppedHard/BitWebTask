import { ButtonFields } from "../interfaces/DataInterface";

export default function StylizedButton(props:ButtonFields) {
  return (
    <button className={"text-white bg-primary-500"}>{props.content}</button>
  )
}

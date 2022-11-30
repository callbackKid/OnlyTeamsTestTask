import { data } from "../utils.tsx/data"


type DatesProps = {
    children?: JSX.Element[];
}
export const Dates = (props: DatesProps) => {
    return (
        <>
        <div> {data[0].category}</div>
        <div> { data[0].begins }</div>
        <div> { data[0].ends }</div>
        <div> { data[0].events }</div>
        </>
    )
}
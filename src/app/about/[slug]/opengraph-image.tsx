/* eslint-disable @next/next/no-img-element */
import {ImageResponse} from "next/server"
type objType = {
    id: string;
    topic: string;
    descriptions: string
}
// our users array
const ourobj: objType[] = [
    {id:"1", topic: "the gods", descriptions:"the gods always fight for us"},
    {id:"2", topic: "golden snake", descriptions:"golden snake is located all over delta state"},
    {id:"3", topic: "footballs gods", descriptions:"the fotball gods have declared c.ronaldo as the best"},
    {id:"4", topic: "african magis", descriptions:"if you actually want to perform any magic come to africa"}
]
// our measurement types
type parameters = {
    width: number;
    height: number
}
// our measurement params now
export const size:parameters = {
    width: 1200,
    height: 630
}


// creating our og function here
export default async function og({params:{slug}}:{params:{slug:string}}){
    const filtered = ourobj.filter((value)=> value.id == slug)
    console.log("not working")
    return new ImageResponse(
        (<div style={{
            display:"flex",
            width: "100%",
            height: "100%",
            background: "yellow"
            }}>
                <div style={{
                    display: "flex"
                }}>
                    <p style={{fontSize: "30px"}}>{filtered[0].topic}</p>
                </div>
                <div style={{
                    display: "flex"
                }}>
                    <p style={{color: "red"}}>{filtered[0].descriptions}</p>
                </div>
        </div>),
        size
    )
}
import {ImageResponse} from "next/server"
import acer from "../../../utils/acer2.png"
import Image from 'next/image'

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

export default async function og({params: {slug}}: {params: {slug:string}}){
    const filtered = ourobj.filter((item)=> item.id == slug)
    return new ImageResponse((
        <div style={{
            width: "1200px",
            height: "630px",
            backgroundColor: "black",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white"
        }}>
            
            <div style={{
                backgroundColor: "white",
                padding: "15px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                color: "black",
                zIndex: 99
                }}>
                <h3 >{filtered[0].topic}</h3>
                <p>{filtered[0].descriptions}</p>
            </div>
        </div>
    ),{
    width: 1200,
    height: 600,
    })
}
/* eslint-disable @next/next/no-img-element */
import {ImageResponse} from "next/server"
import acers from "../../../utils/acer2.png"
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
        (
            <div
  style={{
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    fontSize: 32,
    fontWeight: 600,
  }}
>
  <svg
    width="75"
    viewBox="0 0 75 65"
    fill="#000"
    style={{ margin: '0 75px' }}
  >
    <path d="M37.59.25l36.95 64H.64l36.95-64z"></path>
  </svg>
  <div style={{ marginTop: 40 }}>{filtered[0].topic}</div>
  <div style={{
    backgroundColor: "blue",
    border: "1px solid yellow",
    color: "white",
    padding: "10px"

  }}>{filtered[0].descriptions}</div>
</div>

        ),
        size
    )
}

/*
<div style={{
            display:"flex",
            width: "100%",
            height: "100%",
            background: "white",
            
            }}>
               <div style={{
                    display:"flex",
                    width: "100%",
                    height: "100%"
               }}>
                <img 
                src="../../../utils/acer2.png" 
                alt="the acer"
                style={{width: "100%", height: "100%"}}
                />
               </div>
               <div style={{
                display: "flex",
                flexDirection: "column",
                
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "black",
                top: "30px",
                border: "2px solid white"
               }}>
                    <p style={{fontSize: "25px", color: "white", marginBottom: "15px"}}>{filtered[0].topic}</p>
                    <p style={{fontSize: "17px", color: "white"}}>{filtered[0].descriptions}</p>
               </div>
        </div>)
*/ 
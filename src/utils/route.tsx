import { ImageResponse } from 'next/server'
import acer from "../../utils/acer2.png"
import Image from 'next/image'
 
export const runtime = 'edge'
 
export async function GET() {
  return new ImageResponse(
    (
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
            <Image src={acer} alt='its acers'
            style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                opacity: 0.5
            }}
            />
            <div style={{
                backgroundColor: "gray",
                padding: "15px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                color: "black",
                zIndex: 99
                }}>
                <h3 >this is the heading</h3>
                <p>running my file now, this is open-graph, and i am using the edge runtime for this</p>
            </div>
        </div>
    ),
    {
      width: 1200,
      height: 600,
    }
  )
}
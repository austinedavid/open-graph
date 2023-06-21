import React from 'react'
import acer from "../../utils/acer2.png"
import Image from 'next/image'

const page = () => {
  return (
    <div>
        <p>we are now in the service route</p>
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
            <img src="https://firebasestorage.googleapis.com/v0/b/davidchats-cf908.appspot.com/o/1661845988377dragon2.jpg?alt=media&token=5c1700e1-b489-4818-9e5c-25564eeafa3f" alt='its acers'
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
                backgroundColor: "white",
                padding: "15px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                color: "black",
                zIndex: 99
                }}>
                <h3 >this is the heading with new pix</h3>
                <p>running my file now, this is open-graph, and i am using the edge runtime for this</p>
            </div>
        </div>
    </div>
  )
}

export default page
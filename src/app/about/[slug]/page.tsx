import React from 'react'
import {Metadata} from "next"

export const metadata:Metadata = {
  title: "GmodeTech about",
  description: "Gmodetech about description here",
  openGraph:{
    title: "Gmode Opengraph about",
    description: "our about description for the main one here"
  }
}
const page = ({params:{slug}}:{params:{slug:string}}) => {

  return (
    <div>
        <p>you are now in the params: {slug}</p>
        <p>yes, i am now woking on the page </p>
    </div>
  )
}

export default page
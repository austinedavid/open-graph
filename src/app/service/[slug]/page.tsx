import React from 'react'
import {Metadata} from "next"

export const metadata:Metadata = {
  title: "GmodeTech service",
  description: "Gmodetech is one of the best when it comes to service running in Nigeria and oversea",
  openGraph:{
    title: "Gmode Opengraph service",
    description: "our service description for the main one here"
  }
}
const page = () => {
  return (
    <div>
      <p>this is the service page here</p>
      <p>this need to rerun here</p>
    </div>
    
  )
}

export default page
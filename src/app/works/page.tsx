import React from 'react'
import {Metadata} from "next"
import {openGraphImage} from "../shared-image"

// creating a metadata with only text dynamic but shared-images
export const metadata: Metadata = {
    title: "gmodetech Work",
    description: "this page is to describe how Gmode have been working very hard to make everything to be ok",
    openGraph:{
        ...openGraphImage,
        title: "openGraph work",
        description: "So this actually means that open graph is working perfetly well"
    }
}
const page = () => {
  return (
    <div>work</div>
  )
}

export default page
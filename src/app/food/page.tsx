import React from 'react'
import {Metadata} from "next"
import {openGraphImage} from "../shared-image"

// creating a metadata with only text dynamic but shared-images
export const metadata: Metadata = {
    title: "gmodetech food",
    description: "this page is to describe how Gmode have been working very hard to make everything to be ok",
    openGraph:{
        ...openGraphImage,
        title: "openGraph food",
        description: "we actually have so many menu for our food, feel free to enjoy all of them"
    }
}
const page = () => {
  return (
    <div>food</div>
  )
}

export default page
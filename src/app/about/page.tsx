import Image from 'next/image'
import React from 'react'
import acer from "../../utils/acer2.png"
import styles from "./about.module.css"

const page = () => {
  return (
    <>
        <div> welcome to the about page</div>
        <div className={styles.imgcon}>
            <Image 
            src={acer} 
            alt='the image'
            placeholder='blur'
            priority
            fill
            style={{objectFit: "cover"}}
            />
        </div>
        
    </>
  )
}

export default page
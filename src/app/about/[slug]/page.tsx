import React from 'react'

const page = ({params:{slug}}:{params:{slug:string}}) => {

  return (
    <div>
        <p>you are now in the params: {slug}</p>
    </div>
  )
}

export default page
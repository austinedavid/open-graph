import React from 'react'

const page = ({params:{slug}}:{params:{slug:string}}) => {

  return (
    <div>
        <p>you are now in the params: {slug}</p>
        <p>yes, i am now woking on the page </p>
    </div>
  )
}

export default page
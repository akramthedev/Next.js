import React from 'react'

const page = ({params}) => {
  return (
    <div>
        Reviews Page 
        <br /><br />
        <a href={`/products/${params.idProd}/reviews/1`}>Review 1</a><br />
        <a href={`/products/${params.idProd}/reviews/2`}>Review 2</a><br />
        <a href={`/products/${params.idProd}/reviews/3`}>Review 3</a><br />
        <a href={`/products/${params.idProd}/reviews/4`}>Review 4</a><br />
        <a href={`/products/${params.idProd}/reviews/5`}>Review 5</a><br />
    </div>
  )
}

export default page
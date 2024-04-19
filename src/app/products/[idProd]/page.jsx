import { notFound } from "next/navigation";



const page = ({params}) => {
  
  if(parseInt(params.idProd)>10){
    notFound(); 
  }

  return (
    <div>
        Product {parseInt(params.idProd)}
        <br /><br />
        <a href={`/products/${params.idProd}/reviews`}>Reviews Page</a>
    </div>
  )
}

export default page
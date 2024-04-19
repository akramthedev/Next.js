import { notFound } from "next/navigation"


const page = ({params}) => {
  
  if(parseInt(params.idRev)>10){
    notFound();
  }
  
  return (
    <div>
        Review Number {parseInt(params.idRev)} for Product Number {parseInt(params.idProd)}
    </div>
  )
}

export default page
import { useParams } from "react-router-dom"

export default function ProductPage(){

    const {product} = useParams()

    return(
        <>
        <h1>Página acerca do produto: {product} </h1>
        </>
    )
}
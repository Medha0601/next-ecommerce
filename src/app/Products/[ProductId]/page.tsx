export default function ProductDetails({params}: {params: {ProductId: string}}){

    return (
        <>
        <h2>ProductId : { params.ProductId}</h2>
        </>
    )
}
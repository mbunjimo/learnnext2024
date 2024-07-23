export default function ProductDetails( {params} : { params: {productid: string}} ) {
    return (
        <div>
            <h1>
                This is product number {params.productid}
            </h1>
        </div>
    )
}    
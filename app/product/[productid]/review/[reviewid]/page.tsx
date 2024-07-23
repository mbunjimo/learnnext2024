import { notFound } from "next/navigation"

export default function Review(
    { params }: {
        params: {
            productid: string,
            reviewid: string
        }
    }) {


    if (parseInt(params.reviewid) > 1000) {
        notFound()
    }

    return (
        <h1>
            the Product is {params.productid} and the review is {params.reviewid}
        </h1>
    )
}
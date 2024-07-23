"use client"

import { useRouter } from "next/navigation";

export default function page() {

    const router = useRouter()

    const handleselect = () => {
        console.log(`hello there this is pure water`);
        router.push("/")
        }

    return(
        <div className="p-3">
            <h1 className="text-3xl font-semibold">Order button</h1>
            <button className="bg-blue-600 text-white font-semibold p-3 rounded-md" onClick={handleselect}>place an order</button>
        </div>
    )
}
import Link from "next/link";

export default function Home() {
    return (
        <body>
            <h1>Hello world</h1>

            <ul>
                <li> <Link href={`/about`}>about</Link> </li>

                <li>
                    <Link href={`/blog`}>blog</Link>
                </li>

                <li>
                    <Link href={`/product`}>product</Link>
                </li>

                <li>
                    <Link href={`/profile`}>Profile</Link>
                </li>
            </ul>
        </body>
    )
}
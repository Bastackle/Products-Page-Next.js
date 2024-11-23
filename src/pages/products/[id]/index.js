import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { IoChevronBackOutline } from "react-icons/io5";

export default function ProductDetail({ product }) {
    console.log('-Product-', product)
    return (<>
        <Head><title>Product Detail Page</title></Head>
        <div
            style={{
                background: 'linear-gradient(90deg, rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%)',
            }}
            className="min-h-screen flex flex-col items-center p-14"
        >
            <Link href="/products" className="flex items-center self-start hover:underline">
                <IoChevronBackOutline size={24} className="mr-1" />
                <span className="mr-1 text-xl font-bold">Back to Products</span>
            </Link>

            <div className="w-full md:w-1/2">
                <p className="text-4xl font-bold text-center">{product.title}</p>

                <div className="flex flex-col items-center justify-center">
                    <Image
                        src={product.image}
                        alt={product.title}
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-[350px] h-[375px] mt-20 mix-blend-multiply"
                    />
                </div>


                <table className="table-auto w-full border-collapse mt-20">
                    <thead>
                        <tr>
                            <th className="text-xl font-bold text-left p-4">Feature</th>
                            <th className="text-xl font-bold text-left p-4">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border-b text-xl font-semibold p-4">ID</td>
                            <td className="border-b text-xl p-4">{product.id}</td>
                        </tr>
                        <tr>
                            <td className="border-b text-xl font-semibold p-4">Title</td>
                            <td className="border-b text-xl p-4">{product.title}</td>
                        </tr>
                        <tr>
                            <td className="border-b text-xl font-semibold p-4">Category</td>
                            <td className="border-b text-xl p-4">{product.category}</td>
                        </tr>
                        <tr>
                            <td className="border-b text-xl font-semibold p-4">Price</td>
                            <td className="border-b text-xl text-red-500 p-4">$ {product.price}</td>
                        </tr>
                        <tr>
                            <td className="border-b text-xl font-semibold p-4">Description</td>
                            <td className="border-b text-xl p-4">{product.description}</td>
                        </tr>
                        <tr>
                            <td className="border-b text-xl font-semibold p-4">Rating</td>
                            <td className="border-b text-xl p-4">{product.rating.rate} ({product.rating.count})</td>
                        </tr>
                        <tr>
                            <td className="border-b text-xl font-semibold p-4">Image Source</td>
                            <td className="border-b text-xl p-4">{product.image}</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    </>)
}

export async function getServerSideProps(context) {
    const res = await fetch(`https://fakestoreapi.com/products/${context.params.id}`);
    const product = await res.json();

    return {
        props: { product }
    }
}
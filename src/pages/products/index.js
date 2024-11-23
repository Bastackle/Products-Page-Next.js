import Head from "next/head";
import product1 from "../../../public/assets/images/canon.png";
import Image from "next/image";
import Link from "next/link"

export default function Products({product}) {
    console.log('-product-',product)
    return (
        <>
            <Head>
                <title>Product Page</title>
            </Head>
            <div
                style={{
                    background: 'linear-gradient(90deg, rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%)',
                }}
                className="min-h-screen flex flex-col items-center p-14"
            >
               
                <p className="text-7xl font-bold">Products</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
                    {
                        product.map((item) => (
                            <Link
                                key={item.id}
                                href={`/products/${item.id}`}
                            >
                                <div className="flex flex-col items-center justify-center">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        className="w-[250px] h-[275px] mt-20 mix-blend-multiply transform hover:scale-105"
                                    />
                                    <p className="text-xl font-bold pt-10 text-center">{item.title}</p>
                                    <p className="text-xl text-center text-red-500 font-semibold">$ {item.price}</p>
                                </div>
                            </Link>
                        ))
                    }
                </div>

            </div>
        </>
    );
}

export async function getServerSideProps() {
    const res = await fetch(`https://fakestoreapi.com/products`);
    const product= await res.json();

    return{
        props: { product }
    }
}
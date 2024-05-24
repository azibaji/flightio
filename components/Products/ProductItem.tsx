import { dataType } from '@/types/Product'
import Image from 'next/image'
import Link from 'next/link'

interface propsType {
    product: dataType
}

export default function ProductItem ({ product }: propsType) {
    return (
        <Link href={`/products/${product.id}`}>
        <div className="bg-white w-full max-w-sm lg:max-w-full m-2 p-2 rounded-md border-1 border-custom-light-gray">
            <div className="relative w-full pt-[100%]">
                <Image
                src={product.image}
                alt={product.title}
                className="absolute inset-0 object-cover"
                fill
                
                />
            </div>
            <p className="font-custom-weight font-sm leading-custom-line-height truncate h-20 mt-4">
            {product.title}
            </p>
            <div className="flex justify-between">
                <p className="flex justify-start">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#F5AC1F"
                    >
                        <path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"/>
                    </svg>
                    <span className="text-custom-medium-gray">
                        {product.rating.rate}
                    </span>
                </p>
                <p className="text-custom-blue font-md font-custom-weight">
                    {product.price}$
                </p>
            </div>
        </div>
        </Link>
    )
}
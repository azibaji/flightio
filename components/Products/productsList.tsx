'use client'
import { useEffect } from "react"
import { useFetch } from "@/hooks/useFetch"
import ProductItem from "./ProductItem";
import {dataType} from '@/types/Product'
export default function ProductsList () {
    const { data, isLoading, error } = useFetch<dataType[]>(
        "https://fakestoreapi.com/products",
      );
    return (
        <div className="grid lg:grid-cols-4 w-full mt-2 gap-2">
            {data && data.map((product:dataType) => <ProductItem key={product.id} product={product} />)}
        </div>
    )
}
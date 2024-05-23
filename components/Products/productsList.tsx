'use client'
import { useEffect } from "react"
import { useFetch } from "@/hooks/useFetch"
import ProductItem from "./ProductItem";
import {dataType} from '@/types/Product';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '@/store/slices/slice';
export default function ProductsList () {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.items);

    console.log('products', products)
    useEffect(() => {
      dispatch(fetchProducts());
    }, []);
    return (
        <div className="grid lg:grid-cols-4 w-full mt-2 gap-2">
            {products && products.map((product:dataType) => <ProductItem key={product.id} product={product} />)}
        </div>
    )
}
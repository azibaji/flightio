'use client'
import { useEffect } from "react"
import {dataType} from '@/types/Product';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '@/store/slices/slice';
import ProductItemSkeleton from './ProductItemSkeleton'
import ProductItem from "./ProductItem";
export default function ProductsList () {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.items);
    const numbers = Array.from({ length: 10 }, (_, index) => index + 1);
    useEffect(() => {
      dispatch(fetchProducts());
    }, []);
    return (
        <div className="grid lg:grid-cols-4 w-full mt-2 gap-2">
            {products && products.map((product:dataType) => <ProductItem key={product.id} product={product} />)}
            {!products.length && numbers.map(number => (<ProductItemSkeleton key={number} />))}
        </div>
    )
}
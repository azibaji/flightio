import Filter from '@/components/Products/FilterProducts'
import ProductsList from '@/components/Products/productsList';
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Filter />
      <ProductsList />
    </>
  );
}

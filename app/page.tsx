import Filter from '@/components/Products/FilterProducts'
import ProductsList from '@/components/Products/productsList';

export default function Home() {
  return (
    <>
      <Filter />
      <ProductsList />
    </>
  );
}

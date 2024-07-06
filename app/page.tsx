import Filter from "@/app/components/Products/FilterProducts/FilterProducts";
import ProductsList from "@/app/components/Products/ProductsList";

export default function Home() {
  return (
    <>
      <Filter />
      <ProductsList />
    </>
  );
}

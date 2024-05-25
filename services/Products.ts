import { useFetch } from "@/hooks/useFetch";
import { dataType } from "@/types/Product";
export const DeleteProducts = async () => {
  const { data, isLoading, error } = useFetch<dataType, null>(
    `https://fakestoreapi.com/products/${params.id}`,
    "delete",
  );
  return { data, isLoading, error };
};

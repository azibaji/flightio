"use client";
import { useEffect, useState, useCallback } from "react";

export const useFetch = <dataType>(url: string) => {
  const [data, setData] = useState<dataType | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(response.statusText);
      const json = await response.json();
      setIsLoading(false);
      setData(json);
      setError(null);
    } catch (error) {
      setError(`${error} could not fetch data`);
      setIsLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const deleteData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url, { method: 'DELETE' });
      if (!response.ok) throw new Error(response.statusText);
      setIsLoading(false);
      setData(null); // Optionally clear data on delete
      setError(null);
    } catch (error) {
      setError(`${error} could not delete data`);
      setIsLoading(false);
    }
  };

  const putData = async (payload: Partial<dataType>) => {
    setIsLoading(true);
    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error(response.statusText);
      const json = await response.json();
      setIsLoading(false);
      setData(json);
      setError(null);
    } catch (error) {
      setError(`${error} could not update data`);
      setIsLoading(false);
    }
  };

  return { data, isLoading, error, deleteData, putData };
};

import { useEffect, useState } from "react";

export default function useFetchCategories(url: string) {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(url);
    const resul: string[] = await res.json();
    setCategories(resul);
  };

  return categories;
}

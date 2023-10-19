import { useState, useEffect } from "react";

type Result = {
  value: string;
};

export default function useFetchJoke(url: string) {
  const [joke, setJoke] = useState<string>("Chuck Jokes");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(url);
    const resul: Result = await res.json();
    setJoke(resul.value);
  };

  return { joke, fetchNewJoke: fetchData };
}

import { useEffect, useState } from "react";

export const useApi = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getaApiData() {
      try {
        setLoading(true);
        let resp = await fetch(url);
        let value = await resp.json();
        setData(value);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    getaApiData();
  }, [url]);

  return { data, loading, error };
};

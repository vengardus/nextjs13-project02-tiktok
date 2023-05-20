import { useEffect, useState } from "react";
import { supabase } from "./init";

export const useGetAll = (tableName) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const getRequest = async () => {
      let { data, error } = await supabase
        .from(tableName)
        .select("*");
      setData(data)
      setError(error)
      };

    getRequest()
  }, [tableName]);

  return [data, error];
};

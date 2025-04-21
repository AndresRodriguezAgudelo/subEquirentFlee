import { useState, useEffect } from 'react';

interface QueryConfig {
  enabled?: boolean;
  refetchOnMount?: boolean;
  refetchOnWindowFocus?: boolean;
  retry?: number;
  retryDelay?: number;
}

export const useQuery = <T>(
  key: string,
  queryFn: () => Promise<T>,
  config: QueryConfig = {}
) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetch = async () => {};
  const refetch = async () => {};
  const reset = () => {};

  return {
    data,
    loading,
    error,
    refetch,
    reset,
  };
};

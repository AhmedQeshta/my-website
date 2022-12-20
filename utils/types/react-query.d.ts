import {
  InfiniteQueryObserverResult,
  MutationMeta,
  QueryKeyHashFunction,
} from '@tanstack/react-query';
import Error from 'next/error';

export interface IConfigReactQuery {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: boolean;
      retry?: boolean;
      retryDelay?: (attemptIndex: number) => number;
    };
  };
}

export interface IQueryDataProps {
  queryKey: Array<number | boolean | string | null>;
  queryFn: () => Promise<object>;
  cacheTime?: number;
  enabled?: boolean;
  networkMode?: any;
  initialData?: object;
  initialDataUpdatedAt?: number;
  keepPreviousData?: boolean;
  meta?: MutationMeta;
  notifyOnChangeProps?: Array<keyof InfiniteQueryObserverResult> | 'all';
  onError?: (error: Error) => void;
  onSettled?: (data: any | undefined, error: Error | null) => void;
  onSuccess?: (data: object) => void;
  placeholderData?: object;
  queryKeyHashFn?: QueryKeyHashFunction<any>;
  refetchInterval?: number | false;
  refetchIntervalInBackground?: boolean;
  refetchOnMount?: boolean;
  refetchOnReconnect?: boolean;
  refetchOnWindowFocus?: boolean;
  retry?: boolean | number;
  retryOnMount?: boolean;
  retryDelay?: (attemptIndex: number) => number;
  select?: (data: object) => object;
  staleTime?: number;
  structuralSharing?: boolean;
  suspense?: boolean;
  useErrorBoundary?: boolean;
}

export interface IQueryData {
  error: Object<Error>;
  isError: boolean;
  isLoading: boolean;
  dataUpdatedAt?: number;
  errorUpdatedAt?: number;
  failureCount?: number;
  failureReason?: any;
  isFetched?: boolean;
  isFetchedAfterMount?: boolean;
  isFetching?: boolean;
  isPaused?: boolean;
  isLoadingError?: boolean;
  isPlaceholderData?: boolean;
  isPreviousData?: boolean;
  isRefetchError?: boolean;
  isRefetching?: boolean;
  isStale?: boolean;
  isSuccess?: boolean;
  refetch?: () => Promise<any>;
  remove?: () => void;
  status?: string;
  fetchStatus?: string;
}

export interface IOptionsReactQuery {
  keepPreviousData: boolean;
  refetchOnWindowFocus: boolean;
  refetchOnMount: boolean;
  refetchOnReconnect: boolean;
  retry: boolean;
}

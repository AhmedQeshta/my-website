import { IConfigReactQuery, IOptionsReactQuery } from './types';

export const config: IConfigReactQuery = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
};


export const options:IOptionsReactQuery = {
  keepPreviousData: true,
  refetchOnWindowFocus: false,
  refetchOnMount: false,
  refetchOnReconnect: false,
  retry: false,
}
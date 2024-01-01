import {
  QueryClient,
  QueryClientProvider as LQueryClientProvider,
  QueryCache,
} from "react-query";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
  queryCache: new QueryCache({}),
});

interface IProps {
  children: React.ReactNode;
}

export const QueryClientProvider = ({ children }: IProps) => {
  return (
    <LQueryClientProvider client={client}>{children}</LQueryClientProvider>
  );
};

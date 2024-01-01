import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "./QueryClientProvider";

export const withRouter = (component: () => React.ReactNode) => () =>
  (
    <QueryClientProvider>
      <BrowserRouter>{component()}</BrowserRouter>
    </QueryClientProvider>
  );

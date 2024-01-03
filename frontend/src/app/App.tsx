// import { Routing } from "pages";
import { FC } from "react";
import { RouterProvider } from "./providers";
import { QueryClientProvider } from "./providers/QueryClientProvider";
import { BrowserRouter } from "react-router-dom";

import "./App.scss";

export const App: FC = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <QueryClientProvider>
          <RouterProvider />
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
};
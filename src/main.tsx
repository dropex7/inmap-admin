import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "antd/dist/reset.css";
import { RecoilRoot } from "recoil";
import RouterProviderWrapper from "./routes/RouterProviderWrapper";
import { ApolloProvider } from "@apollo/client";
import { client } from "./utils/apolloClient";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <RecoilRoot>
      <ApolloProvider client={client}>
        <RouterProviderWrapper />
      </ApolloProvider>
    </RecoilRoot>
  </StrictMode>
);

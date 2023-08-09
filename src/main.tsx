import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "antd/dist/reset.css";
import { RecoilRoot } from "recoil";
import RouterProviderWrapper from "./routes/RouterProviderWrapper";
import { ApolloProvider } from "@apollo/client";
import { client } from "./utils/apolloClient";
import { ConfigProvider, theme } from "antd";

const { darkAlgorithm } = theme;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <ConfigProvider>
      <RecoilRoot>
        <ApolloProvider client={client}>
          <RouterProviderWrapper />
        </ApolloProvider>
      </RecoilRoot>
    </ConfigProvider>
  </StrictMode>
);

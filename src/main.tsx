import {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RecoilRoot} from "recoil";
import RouterProviderWrapper from "./routes/RouterProviderWrapper";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
      <RecoilRoot>
          <RouterProviderWrapper />
      </RecoilRoot>
  </StrictMode>,
)

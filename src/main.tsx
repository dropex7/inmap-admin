import {ApolloProvider} from '@apollo/client';
import {ConfigProvider} from 'antd';
import 'antd/dist/reset.css';
import {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import {RecoilRoot} from 'recoil';

import './global.css';
import RouterProviderWrapper from './routes/RouterProviderWrapper';
import {client} from './utils/apolloClient';
ReactDOM.createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RecoilRoot>
            <ApolloProvider client={client}>
                <ConfigProvider direction="ltr" form={{colon: false}}>
                    <RouterProviderWrapper />
                </ConfigProvider>
            </ApolloProvider>
        </RecoilRoot>
    </StrictMode>,
);

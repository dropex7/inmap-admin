import {ApolloProvider} from '@apollo/client';
import {ConfigProvider} from 'antd';
import 'antd/dist/reset.css';
import {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import {RecoilRoot} from 'recoil';

import './index.css';
import RouterProviderWrapper from './routes/RouterProviderWrapper';
import {client} from './utils/apolloClient';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        <ConfigProvider>
            <RecoilRoot>
                <ApolloProvider client={client}>
                    <RouterProviderWrapper />
                </ApolloProvider>
            </RecoilRoot>
        </ConfigProvider>
    </StrictMode>,
);

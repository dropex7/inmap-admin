import {ApolloProvider} from '@apollo/client';
import {ConfigProvider, theme} from 'antd';
import 'antd/dist/reset.css';
import {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import {RecoilRoot} from 'recoil';
import ruRU from 'antd/es/locale/ru_RU';
import './global.css';
import RouterProviderWrapper from './router/RouterProviderWrapper';
import {client} from './utils/apolloClient';
import {validateMessagesWithLabels} from './utils/validateMessages';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RecoilRoot>
            <ApolloProvider client={client}>
                <ConfigProvider
                    direction="ltr"
                    theme={{
                        algorithm: theme.darkAlgorithm,
                    }}
                    locale={ruRU}
                    form={{colon: false, validateMessages: validateMessagesWithLabels}}
                >
                    <RouterProviderWrapper />
                </ConfigProvider>
            </ApolloProvider>
        </RecoilRoot>
    </StrictMode>,
);

import {ApolloProvider} from '@apollo/client';
import {App, ConfigProvider} from 'antd';
import 'antd/dist/reset.css';
import {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import {RecoilRoot} from 'recoil';
import ruRU from 'antd/es/locale/ru_RU';
import './global.css';
import RouterProviderWrapper from './router/RouterProviderWrapper';
import {client} from './utils/apolloClient';
import {validateMessagesWithLabels} from './utils/validateMessages';
import {customTheme} from '@/customTheme.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RecoilRoot>
            <ApolloProvider client={client}>
                <ConfigProvider
                    direction="ltr"
                    theme={customTheme}
                    locale={ruRU}
                    form={{colon: false, validateMessages: validateMessagesWithLabels}}
                >
                    <App>
                        <RouterProviderWrapper />
                    </App>
                </ConfigProvider>
            </ApolloProvider>
        </RecoilRoot>
    </StrictMode>,
);

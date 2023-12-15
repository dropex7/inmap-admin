import {useNavigation} from 'react-router-dom';

import BodyPortal from './components/BodyPortal';
import Loader from './components/Loader';

import AuthWrapper from './components/Auth/AuthWrapper';

function App() {
    const {state} = useNavigation();

    return (
        <>
            <AuthWrapper />

            {state === 'loading' && (
                <BodyPortal>
                    <Loader />
                </BodyPortal>
            )}
        </>
    );
}

export default App;

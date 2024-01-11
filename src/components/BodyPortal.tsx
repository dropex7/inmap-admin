/**
 * Created by MIRZOEV A. on 09.04.2023
 */

import type {PropsWithChildren, ReactPortal} from 'react';

import {memo} from 'react';
import ReactDOM from 'react-dom';

import useMounted from '@/hooks/useMounted';

const BodyPortal = memo<PropsWithChildren>(({children}): ReactPortal | null => {
    const mounted = useMounted();
    return mounted ? ReactDOM.createPortal(children, document.body) : null;
});

export default BodyPortal;

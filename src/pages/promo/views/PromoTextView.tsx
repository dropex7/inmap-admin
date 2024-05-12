/**
 * Created by MIRZOEV A. on 07.04.2024
 */

import {memo} from 'react';

interface PromoTextViewProps {
    title: string;
    subtitle: string;
}

const PromoTextView = memo<PromoTextViewProps>(({title, subtitle}) => {
    return (
        <div className="flex flex-col gap-1">
            <strong className="text-lg">{title}</strong>
            <span className="text-neutral-300">{subtitle}</span>
        </div>
    );
});

export default PromoTextView;

/**
 * Created by MIRZOEV A. on 08.01.2024
 */

import {memo, useCallback, useMemo} from 'react';
import type {GetSubjectsByIdQuery} from '@/generated/graphql.ts';
import {Button, Typography} from 'antd';
import noPhoto from '@/assets/no-photo-available.png';
import PreviewLogo from '@/components/Images/PreviewLogo.tsx';
import PreviewImage from '@/components/Images/PreviewImage.tsx';
import {CloseOutlined} from '@ant-design/icons';
import {useMap} from '@/hooks/useMap.ts';
import SubjectActions from '@/pages/map/panel/card/SubjectActions.tsx';
import {useGetLayerByIUuid} from '@/hooks/useGetLayerByIUuid.ts';
import {selectObjectByOriginUuid} from '@/utils/widgetMessages.ts';

interface SubjectInfoProps {
    subject: GetSubjectsByIdQuery['subject'];
}

const {Title} = Typography;

const SubjectInfo = memo<SubjectInfoProps>(({subject}) => {
    const {ref, resetSelectedObject} = useMap();
    const {images, logoUrl} = subject;
    const layer = useGetLayerByIUuid(subject.layerUuid);

    const image = useMemo(() => (images.length > 0 ? images[0] : noPhoto), [images]);

    const closeSubjectCard = useCallback(() => {
        resetSelectedObject();
        if (ref?.current?.contentWindow) {
            ref.current.contentWindow.postMessage(selectObjectByOriginUuid(undefined), '*');
        }
    }, [ref, resetSelectedObject]);

    return (
        <div className="flex flex-col">
            <div className="relative flex flex-col">
                {logoUrl && (
                    <div className="absolute bottom-8 left-2 z-10 rounded-lg border border-zinc-900 bg-white">
                        <PreviewLogo alt="image" logoUrl={logoUrl} className="size-12 rounded-lg" />
                    </div>
                )}
                <Button
                    icon={<CloseOutlined />}
                    className="absolute right-3 top-3 z-10 flex items-center justify-center rounded-full bg-zinc-800 bg-opacity-80 px-2 py-1"
                    onClick={closeSubjectCard}
                />

                <div className="absolute bottom-8 right-3 z-10 flex items-center justify-center rounded-3xl bg-zinc-800 px-2 py-1">
                    <span className="self-end text-xs text-white">{layer?.fullName ?? 'НЕТ ЭТАЖА'}</span>
                </div>

                <div className="relative w-full">
                    <PreviewImage alt="image" width="100%" height="250px" url={image} />
                    <div className="absolute inset-0 shadow-[inset_0px_50px_50px_0px_rgba(0,0,0,4)]" />
                </div>
            </div>

            <div className="z-20 -mt-4 mb-6 flex w-96 flex-col rounded-xl bg-zinc-800 p-6">
                <Title level={3} className="!mb-0">
                    {subject.name}
                </Title>
                <span className="text-neutral-400">{subject.shortDescription}</span>
            </div>

            <SubjectActions />
        </div>
    );
});

export default SubjectInfo;

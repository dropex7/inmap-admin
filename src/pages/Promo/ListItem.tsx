/**
 * Created by MIRZOEV A. on 15.08.2023
 */

import {memo} from 'react';

import type {PromoSearchModel} from '@/generated/graphql';

import noPhoto from '@/assets/no-photo-available.png';
import PreviewImage from '@/components/Images/PreviewImage';

interface ListItemProps {
    promo: PromoSearchModel;
}

const ListItem = memo<ListItemProps>(({promo}) => {
    const {smallImageUrl, subtitle, title} = promo;
    return (
        <div className="grid grid-cols-[2fr_1fr_1fr] items-center">
            <div className="flex items-center gap-9 border-r border-neutral-300">
                <PreviewImage
                    alt="image"
                    height="100px"
                    className="rounded-lg"
                    url={smallImageUrl ?? noPhoto}
                    width="100px"
                />
                <div className="flex flex-col gap-3">
                    <span className="text-base font-bold leading-none">{title}</span>
                    <span className="text-sm leading-none">{subtitle}</span>
                </div>
            </div>

            <div className="flex justify-center">
                <PreviewImage
                    alt="image"
                    height="100px"
                    className="rounded-lg"
                    url={smallImageUrl ?? noPhoto}
                    width="100px"
                />
            </div>

            <div className="flex justify-center">
                <PreviewImage
                    alt="image"
                    height="100px"
                    className="rounded-lg"
                    url={smallImageUrl ?? noPhoto}
                    width="100px"
                />
            </div>
        </div>
    );
});

export default ListItem;

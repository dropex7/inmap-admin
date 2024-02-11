/**
 * Created by MIRZOEV A. on 11.02.2024
 */

import {memo} from 'react';
import {Carousel, Image} from 'antd';
import noPhoto from '@/assets/no-photo-available.png';

interface ImageCarouselProps {
    images: Array<string>;
}

const ImageCarousel = memo<ImageCarouselProps>(({images}) => {
    if (images.length === 0) {
        return <Image preview={false} height="250px" width="100%" className="object-cover" src={noPhoto} />;
    }

    return (
        <Carousel autoplay>
            {images.map(url => (
                <Image key={url} preview={false} height="250px" width="100%" className="object-cover" src={url} />
            ))}
        </Carousel>
    );
});

export default ImageCarousel;

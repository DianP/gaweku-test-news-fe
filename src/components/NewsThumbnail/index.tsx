'use client';

import { AspectRatio } from '@components';
import Image from 'next/image';

interface NewsThumbnailProps {
  src: string;
  alt: string;
}

export const NewsThumbnail = ({ src, alt }: NewsThumbnailProps) => {
  return (
    <AspectRatio ratio={3 / 2}>
      {src ? (
        <Image src={src} alt={alt} fill={true} className="rounded-lg object-cover" draggable={false} />
      ) : (
        <Image
          src="/milad-fakurian-iLHDO19h0ng-unsplash.jpg"
          alt={alt}
          fill={true}
          className="rounded-lg object-cover"
          draggable={false}
        />
      )}
    </AspectRatio>
  );
};

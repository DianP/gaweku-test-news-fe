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
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt={alt}
          fill={true}
          className="rounded-lg object-cover"
          draggable={false}
        />
      )}
    </AspectRatio>
  );
};

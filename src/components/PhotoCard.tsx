// MARK: Imports
import Image from 'next/image';

// MARK: Icons
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

// MARK: Interfaces
import { PhotoCardProps } from '@lib/types';

export default function PhotoCard({
  photo,
  setFavorite,
  setOpen,
  setModalPhoto,
}: PhotoCardProps) {
  // MARK: Render
  return (
    <div className='photo-card relative rounded-lg'>
      <div
        className='absolute z-0 w-full h-full'
        onClick={() => {
          setModalPhoto(photo);
          setOpen(true);
        }}
      />
      <Image
        src={photo.url}
        alt='Picture of the author'
        width={150}
        height={150}
        objectFit='cover'
      />
      <p className='my-5 truncate' style={{ color: 'black' }}>
        {photo.title}
      </p>
      <div className=' flex flex-row items-center justify-between'>
        {photo.isFavorite ? (
          <AiFillStar
            className='star-icon relative z-10'
            onClick={() => setFavorite(photo.id)}
          />
        ) : (
          <AiOutlineStar
            className='star-icon relative z-10'
            onClick={() => setFavorite(photo.id)}
          />
        )}
        <p className='text-sm'>Album: {photo.albumId}</p>
      </div>
    </div>
  );
}

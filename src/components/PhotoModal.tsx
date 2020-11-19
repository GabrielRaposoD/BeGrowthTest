// MARK: Imports
import Image from 'next/image';
import React from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#__next');

// MARK: Icons
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { FaTimes } from 'react-icons/fa';

// MARK: Interfaces
import { PhotoModalProps } from '@lib/types';

export default function PhotoModal({
  isOpen,
  onClose,
  photo,
  setFavorite,
}: PhotoModalProps) {
  return (
    <ReactModal
      overlayClassName='modal-overlay'
      className='modal modal-mini'
      isOpen={isOpen}
      onAfterOpen={() => {}}
      shouldCloseOnOverlayClick={true}
      onRequestClose={() => onClose()}
      contentLabel='Example Modal'
    >
      {photo ? (
        <div className='flex flex-col w-full h-full p-5'>
          <FaTimes
            className='self-end mb-5 text-3xl text-gray-900 cursor-pointer'
            onClick={() => onClose()}
          />
          <Image
            src={photo.url}
            alt='Picture of the author'
            width={500}
            height={500}
          />
          <p className='mt-5'>{photo.title}</p>
          <div className=' flex flex-row items-center justify-between mt-5'>
            {photo.isFavorite ? (
              <AiFillStar
                className='star-icon text-3xl'
                onClick={() => setFavorite(photo.id)}
              />
            ) : (
              <AiOutlineStar
                className='star-icon text-3xl'
                onClick={() => setFavorite(photo.id)}
              />
            )}
            <p>Album: {photo.albumId}</p>
          </div>
        </div>
      ) : (
        onClose()
      )}
    </ReactModal>
  );
}

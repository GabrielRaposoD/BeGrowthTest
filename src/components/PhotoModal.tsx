// MARK: Imports
import Image from 'next/image';
import React from 'react';
import ReactModal from 'react-modal';
import { FaTimes } from 'react-icons/fa';

ReactModal.setAppElement('#__next');

// MARK: Interfaces
import { PhotoModalProps } from '@lib/types';

// MARK: AddSiteModalDeclaration
export default function AddSiteModal({
  isOpen,
  onClose,
  photo,
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
        </div>
      ) : (
        onClose()
      )}
    </ReactModal>
  );
}

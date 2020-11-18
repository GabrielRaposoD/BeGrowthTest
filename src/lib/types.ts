export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
  isFavorite: boolean;
}

export interface PhotoCardProps {
  photo: Photo;
  setFavorite: Function;
  setOpen?: Function;
  setModalPhoto?: Function;
}

export interface PhotoModalProps {
  isOpen: boolean;
  onClose?: Function;
  photo: Photo;
}

import { useState } from 'react';
import { ModalWindow } from '../ModalWindow/ModalWindow';
import { ImageGalleryItemImg } from './ImageGalleryItem.styled';

export const GalleryImage = ({
  item: { webformatURL, tags, largeImageURL },
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

  return (
    <div>
      <ImageGalleryItemImg
        src={webformatURL}
        alt={tags}
        load="lazy"
        onClick={toggleModal}
      />

      <ModalWindow
        isOpen={isModalOpen}
        onRequestClose={toggleModal}
        largeImageURL={largeImageURL}
        tags={tags}
      ></ModalWindow>
    </div>
  );
};

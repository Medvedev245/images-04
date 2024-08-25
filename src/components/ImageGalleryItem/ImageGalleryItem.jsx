import { useState } from 'react';
import { ModalWindow } from '../ModalWindow/ModalWindow';
import {
  ImageGalleryItemImg,
  ImageWrap,
  WrapOptions,
  WrapSpan,
} from './ImageGalleryItem.styled';

export const GalleryImage = ({
  item: {
    webformatURL,
    tags,
    largeImageURL,
    comments,
    downloads,
    likes,
    views,
  },
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };
  console.log(comments);
  return (
    <>
      <ImageWrap>
        <ImageGalleryItemImg
          src={webformatURL}
          alt={tags}
          load="lazy"
          onClick={toggleModal}
        />
        <WrapOptions>
          <WrapSpan>Likes: {likes}</WrapSpan>
          <WrapSpan>Views: {views}</WrapSpan>
          <WrapSpan>Downloads: {downloads}</WrapSpan>
        </WrapOptions>
      </ImageWrap>
      <ModalWindow
        isOpen={isModalOpen}
        onRequestClose={toggleModal}
        largeImageURL={largeImageURL}
        tags={tags}
      ></ModalWindow>
    </>
  );
};

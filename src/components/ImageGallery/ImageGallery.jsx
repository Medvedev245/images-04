import { GalleryImage } from '../ImageGalleryItem/ImageGalleryItem';
import {
  ImageGallery,
  ImageGalleryItem,
  MainWrap,
} from './ImageGallery.styled';

export const Gallery = ({ imgItems }) => {
  return (
    <MainWrap>
      <ImageGallery>
        {imgItems.map(item => (
          <ImageGalleryItem key={item.id}>
            <GalleryImage item={item} />
          </ImageGalleryItem>
        ))}
      </ImageGallery>
    </MainWrap>
  );
};

import styled from 'styled-components';

export const ImageGalleryItemImg = styled.img`
  width: 100%;
  height: 360px;
  object-fit: cover;
  /* transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1); */

  /* &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  } */
`;

export const ImageWrap = styled.div`
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
    border: 2px solid #3f51b5; /* Change the color and width as needed */
  }
`;

export const WrapOptions = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const WrapSpan = styled.span`
  font-size: 16px;
  font-weight: 500;
`;

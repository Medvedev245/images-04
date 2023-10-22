import { PaginationBtn } from './LoadMore.styled';

export const Pagination = ({ onClick, children }) => {
  return (
    <>
      <PaginationBtn onClick={onClick}>{children}</PaginationBtn>
    </>
  );
};

import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { Searchbar } from './Searchbar/Searchbar';
import { Container } from './App.styled';
import { fetchImages } from './Api';
import { Pagination } from './LoadMore/LoadMore';
import { Loader } from './Loader/Loader';
import { notifyInputQuerry, success } from './Notify/Notify';
import { Gallery } from './ImageGallery/ImageGallery';

export const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    if (query === '') return;

    const loadResult = async () => {
      try {
        setLoading(true);
        const img = await fetchImages(query, page);
        setImages(prevState => [...prevState, ...img.hits]);
        setShowBtn(page < Math.ceil(img.totalHits / 12));
        success(query);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    loadResult();
  }, [page, query]);

  const handleLoadMore = async () => {
    setPage(page + 1);
  };

  const handleSubmit = evt => {
    if (evt.query === '') {
      notifyInputQuerry();

      return;
    }
    setQuery(evt.query);
    setImages([]);
    setPage(1);
    setIsEmpty(false);
  };

  return (
    <Container>
      <Searchbar onSubmit={handleSubmit} />
      {loading && <Loader />}
      {!isEmpty && <Gallery imgItems={images} />}
      {showBtn && <Pagination onClick={handleLoadMore}>Load More</Pagination>}
      <Toaster position="top-center" reverseOrder={true} />
    </Container>
  );
};

import { Component } from 'react';
import { Toaster } from 'react-hot-toast';
import { Searchbar } from './Searchbar/Searchbar';
import { Container } from './App.styled';
import { fetchImages } from './Api';
import { Pagination } from './LoadMore/LoadMore';
import { Loader } from './Loader/Loader';
import { notifyInputQuerry, success } from './Notify/Notify';
import { Gallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    loading: false,
    isEmpty: true,
    showBtn: false,
  };

  componentDidUpdate = async (prevProps, prevState) => {
    const prevQuery = prevState.query;
    const searchQuery = this.state.query;
    const prevPage = prevState.page;
    const nexPage = this.state.page;

    if (prevQuery !== searchQuery || prevPage !== nexPage) {
      this.loadResult();
    }
  };

  loadResult = async () => {
    const { query, page } = this.state;

    try {
      this.setState({ loading: true });
      const img = await fetchImages(query, page);

      this.setState(prevState => ({
        images: [...prevState.images, ...img.hits],
        showBtn: this.state.page < Math.ceil(img.totalHits / 12),
      }));

      success(query);
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ loading: false });
    }
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleSubmit = evt => {
    if (evt.query === '') {
      notifyInputQuerry();

      return;
    }
    this.setState({
      query: evt.query,
      images: [],
      page: 1,
      isEmpty: false,
    });
  };

  render() {
    const { loading, images, isEmpty, showBtn } = this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.handleSubmit} />
        {loading && <Loader />}
        {!isEmpty && <Gallery imgItems={images} />}
        {showBtn && (
          <Pagination onClick={this.handleLoadMore}>Load More</Pagination>
        )}
        <Toaster position="top-center" reverseOrder={true} />
      </Container>
    );
  }
}

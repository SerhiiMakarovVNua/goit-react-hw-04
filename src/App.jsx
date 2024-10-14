import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal'; 

function App() {

  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState(null);
  const [page, setPage] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [totalPages, setTotalPages] = useState(0);

  const onSearch = (newQuery) => {
    setQuery(newQuery);
    setGallery([]);
    setPage(1);
  };

  useEffect(() => {
    const fetchImages = async () => {
    if (!query) return;
    try {
      setLoading(true);
	    setError(null);
      const response = await axios.get(
       `https://api.unsplash.com/search/photos?query=${query}&per_page=20&page=${page}&orientation=landscape&client_id=onM49Kt67Vh6DOKtoVKSfzkiOO2CkuSWYu7uADzJnxI`
      );
      setGallery(prevGallery => [...prevGallery, ...response.data.results]);
      setTotalPages(response.data.total_pages);
    } catch (error) {
      setError('Unfortunately, an error occurred. Please try again!');
    } finally {
      setLoading(false);
    }
  }
  fetchImages();
  }, [query, page]);

  useEffect(() => {
    if (gallery.length > 0 && page > 1) {
      window.scrollTo({
        top: window.scrollY + window.innerHeight,
        behavior: 'smooth',
      });
    }
  }, [gallery]);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

return (
  <>
    <div>
      <SearchBar onSearch={onSearch} />
      {gallery.length > 0 && <ImageGallery items={gallery} onImageClick={openModal} />}
      <ImageModal 
        isOpen={modalIsOpen} 
        onRequestClose={closeModal} 
        imageUrl={selectedImage ? selectedImage.urls.regular : ''} 
        alt={selectedImage ? selectedImage.alt_description : ''} 
      />
      {loading && <Loader />}
      {gallery.length > 0 && !loading && page < totalPages && (<LoadMoreBtn onClick={() => setPage(prevPage => prevPage + 1)} />)}
      {error && <ErrorMessage message={error} />}
      {gallery.length === 0 && !error && query && <ErrorMessage message={`No images found for "${query}". Please try a different search.`} />}
    </div>
  </>
);
}

export default App

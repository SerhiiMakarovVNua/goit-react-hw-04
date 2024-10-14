import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import styles from '../SearchBar/SearchBar.module.css';

const SearchBar = ({ onSearch }) => {

    const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const query = form.elements.search.value;

    if (query.trim() === "") {
      toast.error('Text must be entered to search for images!', { duration: 2000 });
      return;
    }
    onSearch(query);
    form.reset();
  };
  
  return (
    <header className={styles.searchBar}>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.inputSearch}
          name='search'
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={styles.buttonSearch} type="submit">Search</button>
      </form>
      <Toaster/>
    </header>
  )
}

export default SearchBar
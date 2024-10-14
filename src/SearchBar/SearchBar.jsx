import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({ handleSubmit }) => {
  
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
    </header>
  )
}

export default SearchBar
import React from 'react'
import ImageCard from '../../components/ImageCard/ImageCard'
import styles from '../ImageGallery/ImageGallery.module.css';

const ImageGallery = ({ items, onImageClick }) => {
  return (
    <div>
      <ul className={styles.galleryList}>
        {items.map(item => (
          <li key={item.id}>
            <ImageCard
              image={item.urls.small}
              alt={item.alt_description}
              likes={item.likes}
              userName={item.user.name}
              onClick={() => onImageClick(item)}
            />
          </li>
        ))}
      </ul>    
    </div>
  )
}

export default ImageGallery
import React from 'react'
import ImageGallery from 'react-image-gallery';
import styles from '../CSS/Carousel.module.css';
import "react-image-gallery/styles/css/image-gallery.css"

export default function Carousel() {
    const images = [
        {
            original: '/C-5.jpg',
            thumbnail: '/C-5.jpg'
        },
        {
            original: '/C-3.jpg',
            thumbnail: '/C-3.jpg'
        },
        {
            original: '/C-4.jpg',
            thumbnail: '/C-4.jpg'
        },
        {
            original: '/C-6.jpg',
            thumbnail: '/C-6.jpg'
        }
    ];

    return (
        <div className={styles.gallery}>
            <ImageGallery 
                items={images} 
                showFullscreenButton={false}
                showThumbnails={false}
                showBullets={true}
            />
        </div>
  )
}

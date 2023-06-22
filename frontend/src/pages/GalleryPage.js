import React from 'react';

import ImageGallery from 'react-image-gallery';

const images = [
    {
        original: 'images/burger.jpg',
        thumbnail: 'images/burger.jpg',
        originalTitle: 'Homemade burger',
        originalHeight: '450px',
    },
    {
        original: 'images/butter-chicken.jpg',
        thumbnail: 'images/butter-chicken.jpg',
        originalTitle: 'Homemade butter chicken',
        originalHeight: '450px',
    },
    {
        original: 'images/cake.jpg',
        thumbnail: 'images/cake.jpg',
        originalTitle: 'Homemade matcha cheesecake',
        originalHeight: '450px',
    },
    {
        original: 'images/donut.jpg',
        thumbnail: 'images/donut.jpg',
        originalTitle: 'Mochi donuts',
        originalHeight: '450px',
    },
    {
        original: 'images/noodles.jpg',
        thumbnail: 'images/noodles.jpg',
        originalTitle: 'Homemade ramen',
        originalHeight: '450px',
    },
    {
        original: 'images/pizza.jpg',
        thumbnail: 'images/pizza.jpg',
        originalTitle: 'Tomato white pie',
        originalHeight: '450px',
    },
    {
        original: 'images/sushi.jpg',
        thumbnail: 'images/sushi.jpg',
        originalTitle: 'Salmon nigiri',
        originalHeight: '450px',
    },
    {
        original: 'images/steak.jpg',
        thumbnail: 'images/steak.jpg',
        originalTitle: 'Steak and eggs with chimichurri',
        originalHeight: '450px',
    },
    {
        original: 'images/chipmunk.jpg',
        thumbnail: 'images/chipmunk.jpg',
        originalTitle: 'Chimpunk in the wild',
        originalHeight: '450px',
    }
]

function GalleryPage() {
    return (
        <>
            <h2>Gallery</h2>
            <article class="gallery">
                <h3>This page showcases a slideshow of some of my interests and food that I have made.</h3>
                <ImageGallery items={images} />
            </article>
        </>
    );
}


export default GalleryPage;
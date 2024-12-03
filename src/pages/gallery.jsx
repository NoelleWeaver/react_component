import React from 'react';
import './css/index.css';
import { FaArrowLeft } from "react-icons/fa";
import GalleryComponent from '../components/gallery/GalleryComponent';

function Gallery() {
    let image = {
        pic2: {
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1731603988/Animal-Adoption/sandy-new_orig.jpeg.jpg",
            alt: "Black and white cat outdoors.",
            name: "cat"
        },
        pic3: {
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1730322295/cld-sample-3.jpg",
            alt: "Basketball game.",
            name: "Basketball"
        },
        pic4: {
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1730322295/cld-sample.jpg",
            alt: "Dog kissing woman",
            name: "Dog and woman"
        },
        pic5: {
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1730322295/cld-sample-4.jpg",
            alt: "Table with food",
            name: "food"
        },
        pic6: {
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1730322295/cld-sample-5.jpg",
            alt: "Blue floating shoe",
            name: "shoe"
        },
        pic7: {
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1730322294/samples/woman-on-a-football-field.jpg",
            alt: "Woman sitting in front of soccer net.",
            name: "woman sitting"
        },
        pic8: {
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1730322295/cld-sample-2.jpg",
            alt: "Snowy mountains.",
            name: "mountains"
        },
        pic9: {
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1730322294/samples/cup-on-a-table.jpg",
            alt: "Coffee on a table.",
            name: "coffee"
        },
        pic11: {
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1730322294/samples/dessert-on-a-plate.jpg",
            alt: "Dessert on a plate.",
            name: "dessert"
        },
        pic12: {
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1730322294/samples/coffee.jpg",
            alt: "Steaming cup of coffee.",
            name: "coffee-steaming"
        },
        pic13: {
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1730322294/samples/man-portrait.jpg",
            alt: "Portrait of a man.",
            name: "man"
        },
        pic14: {
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1730322294/samples/man-on-a-street.jpg",
            alt: "Man on a street.",
            name: "street"
        },
        pic15: {
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1730322293/samples/look-up.jpg",
            alt: "Buildings from below.",
            name: "buildings"
        },
        pic16: {
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1730322294/samples/chair-and-coffee-table.jpg",
            alt: "Chair and coffee table.",
            name: "chair"
        },
        pic17: {
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1730322293/samples/man-on-a-escalator.jpg",
            alt: "Man on an escalator.",
            name: "escalator"
        },
        pic18: {
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1730322293/samples/smile.jpg",
            alt: "Person smiling.",
            name: "smile"
        },
        pic19: {
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1730322293/samples/outdoor-woman.jpg",
            alt: "Woman outdoors.",
            name: "outdoors"
        },
        pic20: {
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1730322293/samples/breakfast.jpg",
            alt: "Breakfast spread.",
            name: "breakfast"
        },
        pic21: {
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1730322292/samples/balloons.jpg",
            alt: "Colorful balloons.",
            name: "balloons"
        },
        pic22: {
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1730322292/samples/shoe.jpg",
            alt: "Stylish shoe.",
            name: "shoe"
        },
        pic23: {
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1730322289/samples/two-ladies.jpg",
            alt: "Two women talking.",
            name: "conversation"
        },
        pic24: {
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1730322286/samples/ecommerce/leather-bag-gray.jpg",
            alt: "Gray leather bag.",
            name: "bag"
        },
        pic25: {
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1730322286/samples/ecommerce/car-interior-design.jpg",
            alt: "Car interior design.",
            name: "car"
        },
        pic26: {
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1730322286/samples/landscapes/beach-boat.jpg",
            alt: "Boat on a beach.",
            name: "boat"
        },
        pic27: {
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1730322286/samples/landscapes/architecture-signs.jpg",
            alt: "Architectural signage.",
            name: "architecture"
        },
        pic28: {
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1730322286/samples/animals/three-dogs.jpg",
            alt: "Three dogs together.",
            name: "dogs"
        },
        pic29: {
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1730322286/samples/people/jazz.jpg",
            alt: "Jazz musician.",
            name: "jazz"
        },
        pic30: {
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1730322285/samples/food/fish-vegetables.jpg",
            alt: "Fish and vegetables.",
            name: "fish"
        },
        pic31: {
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1730322285/samples/bike.jpg",
            alt: "Bicycle on a trail.",
            name: "bike"
        },
        pic32: {
            url: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1730322285/samples/animals/reindeer.jpg",
            alt: "Reindeer in snow.",
            name: "reindeer"
        }
    };

    return (
        <>
            <a className="gallery-back" href="/"><FaArrowLeft /></a>
            <div style={{ padding: '20px', textAlign: 'center' }}>
                <GalleryComponent {...image} />
            </div>
        </>
    );
}

export default Gallery;

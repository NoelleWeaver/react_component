import React from 'react';
import './css/index.css';
import { FaArrowLeft } from "react-icons/fa";
import GalleryComponent from '../components/gallery/GalleryComponent';

function Gallery() {
    let image = {
            pic1: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1731603743/Animal-Adoption/download%20%283%29.jpg.jpg",
            pic2: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1731603988/Animal-Adoption/sandy-new_orig.jpeg.jpg",
            pic3: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1730322295/cld-sample-3.jpg",
            pic4: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1730322295/cld-sample.jpg",
            pic5: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1730322295/cld-sample-4.jpg",
            pic6: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1730322295/cld-sample-5.jpg",
            pic7: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1730322294/samples/woman-on-a-football-field.jpg",
            pic8: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1730322295/cld-sample-2.jpg",
            pic9: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1730322294/samples/cup-on-a-table.jpg",
            pic10: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1730322294/samples/upscale-face-1.jpg",
            pic11: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1730322294/samples/dessert-on-a-plate.jpg",
            pic12: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1730322294/samples/coffee.jpg",
            pic13: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1730322294/samples/man-portrait.jpg",
            pic14: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1730322294/samples/man-on-a-street.jpg",
            pic15: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1730322293/samples/look-up.jpg",
            pic16: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1730322294/samples/chair-and-coffee-table.jpg",
            pic17: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1730322293/samples/man-on-a-escalator.jpg",
            pic18: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1730322293/samples/smile.jpg",
            pic19: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1730322293/samples/outdoor-woman.jpg",
            pic20: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1730322293/samples/breakfast.jpg",
            pic21: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1730322292/samples/balloons.jpg",
            pic22: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1730322292/samples/shoe.jpg",
            pic23: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1730322289/samples/two-ladies.jpg",
            pic24: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1730322286/samples/ecommerce/leather-bag-gray.jpg",
            pic25: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1730322286/samples/ecommerce/car-interior-design.jpg",
            pic26: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1730322286/samples/landscapes/beach-boat.jpg",
            pic27: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1730322286/samples/landscapes/architecture-signs.jpg",
            pic28: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1730322286/samples/animals/three-dogs.jpg",
            pic29: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1730322286/samples/people/jazz.jpg",
            pic30: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1730322285/samples/food/fish-vegetables.jpg",
            pic31: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1730322285/samples/bike.jpg",
            pic32: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1730322285/samples/animals/reindeer.jpg"
}    

    return (
        <>
            <a className="gallery-back" href="/"><FaArrowLeft /></a>
            <div style={{ padding: '20px', textAlign: 'center' }}>
                <GalleryComponent  pic1 = {image.pic1} pic2 = {image.pic2} pic3 = {image.pic3}/>
            </div>
        </>
    );
}

export default Gallery;
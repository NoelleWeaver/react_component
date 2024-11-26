import React from 'react';
import './css/index.css';
import { FaArrowLeft } from "react-icons/fa";
import GalleryComponent from '../components/gallery/GalleryComponent';

function Gallery() {
    let image = {
            pic2: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1731603988/Animal-Adoption/sandy-new_orig.jpeg.jpg",
            pic3: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1730322295/cld-sample-3.jpg",
            pic4: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1730322295/cld-sample.jpg",
            pic5: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1730322295/cld-sample-4.jpg",
            pic6: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1730322295/cld-sample-5.jpg",
            pic7: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1730322294/samples/woman-on-a-football-field.jpg",
            pic8: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1730322295/cld-sample-2.jpg",
            pic9: "https://res.cloudinary.com/dynkv0p8x/image/upload/v1730322294/samples/cup-on-a-table.jpg",
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
                <GalleryComponent pic2 = {image.pic2} pic3 = {image.pic3} pic4 = {image.pic4} pic5 = {image.pic5} pic6 = {image.pic6} pic7 = {image.pic7} pic8 = {image.pic8} pic9 = {image.pic9} pic11 = {image.pic11} pic12 = {image.pic12} pic13 = {image.pic13} pic14 = {image.pic14} pic15 = {image.pic15} pic16 = {image.pic16} pic17 = {image.pic17} pic18 = {image.pic18} pic19 = {image.pic19} pic20 = {image.pic20} pic21 = {image.pic21} pic22 = {image.pic22} pic23 = {image.pic23} pic24 = {image.pic24} pic25 = {image.pic25}  pic26 = {image.pic26} pic27 = {image.pic27} pic28 = {image.pic28} pic29 = {image.pic29} pic30 = {image.pic30} pic31 = {image.pic31} pic32 = {image.pic32}/>
            </div>
        </>
    );
}

export default Gallery;
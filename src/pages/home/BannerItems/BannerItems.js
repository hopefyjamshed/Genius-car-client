import React from 'react';
import './Banneritems.css'

const BannerItems = ({ slide }) => {
    const { id, next, prev, image } = slide
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img '>
                <img src={image} className="w-full rounded-xl" />
            </div>

            {/* text of carousel  */}

            <div className="absolute flex  transform justify-end -translate-y-1/2 left-24 top-2/4  bottom-0">
                <h1 className='lg:text-6xl sm:text-2xl md:text-3xl font-bold text-white'>Affordable <br /> Price For Car <br /> Servicing</h1>
            </div>
            <div className="absolute w-3/6 flex  transform -translate-y-1/2 left-24 top-3/4 bottom-0">
                <p className='text-white hidden md:block lg:text-xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            </div>

            {/* button  */}
            <div className="absolute flex justify-start   bottom-0 transform -translate-y-1/2 left-20 bottom-16 ">
                <button className="btn hidden md:block btn-warning w-44">Warning</button>
                <button className="btn hidden md:block btn-outline btn-warning ml-3 w-44">Warning</button>
            </div>


            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a title='go previous' href={`#slide${prev}`} className="btn btn-circle mr-5 bg-orange-600 border border-none">❮</a>
                <a title='go next' href={`#slide${next}`} className="btn btn-circle bg-orange-600 border border-none">❯</a>
            </div>
        </div>
    );
};

export default BannerItems;
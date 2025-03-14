import { RiShare2Line , RiMoreLine } from "react-icons/ri";
import React, { useEffect, useState } from 'react';

const Feed = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchImages = () => {
            const numOfImages = 32; // Number of images you want to display
            let fetchedImages = [];

            // Fetching images with varying dimensions
            for (let i = 0; i < numOfImages; i++) {
                const randomWidth = Math.floor(Math.random() * (800 - 400 + 1)) + 400;  // Random width between 400px and 800px
                const randomHeight = Math.floor(Math.random() * (600 - 300 + 1)) + 300; // Random height between 300px and 600px

                const randomImage = `https://picsum.photos/${randomWidth}/${randomHeight}?random=${i}`;
                fetchedImages.push(randomImage);
            }
            setImages(fetchedImages);
            setLoading(false);
        };

        fetchImages();
    }, []);

    if (loading) {
        return <div className="text-center">Loading...</div>;
    }

    return (
        <div className="gap-4 columns-2 sm:columns-3 md:columns-4 2xl:columns-5">
            {images.map((image, index) => (
                <div key={index} className="bg-black rounded-xl group relative cursor-pointer mb-4 md:shrink-0">
                    <img src={image} alt={`Random Image ${index}`} className="overflow-hidden md:h-full w-full rounded-xl group-hover:opacity-70" />
                    <Overlay />
                </div>
            ))}
        </div>
    );
};

const Overlay = () => (
    <div className="overlay opacity-0 group-hover:opacity-100 group-hover:h-full">
        <div className="flex flex-row justify-end items-start">
            <a href="#" className="m-2 px-3 py-2 md:px-5 md:py-3 bg-red-500 dark:bg-red-700 hover:bg-red-700 dark:hover:bg-red-500 text-white rounded-4xl transition-all">Save</a>
        </div>
        <div className='flex flex-row justify-end items-end'>
            <RiShare2Line className="feed-overlay-options" />
            <RiMoreLine className="feed-overlay-options" />
        </div>
    </div>
);

export default Feed;
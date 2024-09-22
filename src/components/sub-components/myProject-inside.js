import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

const myProjects = [
    {
        name: "Movie Recommendation System",
        image: "project1.png",
        description: "This is the first project I have ever made.",
        link: "http://www.google.com"
    },
    {
        name: "Smart IVR System",
        image: "project2.png",
        description: "This is the second project I have ever made.",
        link: "http://www.google.com"
    },
    {
        name: "News Reporting System",
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e198a84435f8c926d163e43b1585325870c3229eeb4fe0b5cd3e3bf6373d468e?apiKey=c26ba3cf46a74fdd8f38d70ad51d4072&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e198a84435f8c926d163e43b1585325870c3229eeb4fe0b5cd3e3bf6373d468e?apiKey=c26ba3cf46a74fdd8f38d70ad51d4072&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e198a84435f8c926d163e43b1585325870c3229eeb4fe0b5cd3e3bf6373d468e?apiKey=c26ba3cf46a74fdd8f38d70ad51d4072&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e198a84435f8c926d163e43b1585325870c3229eeb4fe0b5cd3e3bf6373d468e?apiKey=c26ba3cf46a74fdd8f38d70ad51d4072&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e198a84435f8c926d163e43b1585325870c3229eeb4fe0b5cd3e3bf6373d468e?apiKey=c26ba3cf46a74fdd8f38d70ad51d4072&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e198a84435f8c926d163e43b1585325870c3229eeb4fe0b5cd3e3bf6373d468e?apiKey=c26ba3cf46a74fdd8f38d70ad51d4072&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e198a84435f8c926d163e43b1585325870c3229eeb4fe0b5cd3e3bf6373d468e?apiKey=c26ba3cf46a74fdd8f38d70ad51d4072&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e198a84435f8c926d163e43b1585325870c3229eeb4fe0b5cd3e3bf6373d468e?apiKey=c26ba3cf46a74fdd8f38d70ad51d4072&",
        description: "This is the third project I have ever made.",
        link: "http://www.google.com"
    },
    {
        name: "Ecommerce Website",
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e198a84435f8c926d163e43b1585325870c3229eeb4fe0b5cd3e3bf6373d468e?apiKey=c26ba3cf46a74fdd8f38d70ad51d4072&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e198a84435f8c926d163e43b1585325870c3229eeb4fe0b5cd3e3bf6373d468e?apiKey=c26ba3cf46a74fdd8f38d70ad51d4072&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e198a84435f8c926d163e43b1585325870c3229eeb4fe0b5cd3e3bf6373d468e?apiKey=c26ba3cf46a74fdd8f38d70ad51d4072&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e198a84435f8c926d163e43b1585325870c3229eeb4fe0b5cd3e3bf6373d468e?apiKey=c26ba3cf46a74fdd8f38d70ad51d4072&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e198a84435f8c926d163e43b1585325870c3229eeb4fe0b5cd3e3bf6373d468e?apiKey=c26ba3cf46a74fdd8f38d70ad51d4072&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e198a84435f8c926d163e43b1585325870c3229eeb4fe0b5cd3e3bf6373d468e?apiKey=c26ba3cf46a74fdd8f38d70ad51d4072&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e198a84435f8c926d163e43b1585325870c3229eeb4fe0b5cd3e3bf6373d468e?apiKey=c26ba3cf46a74fdd8f38d70ad51d4072&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e198a84435f8c926d163e43b1585325870c3229eeb4fe0b5cd3e3bf6373d468e?apiKey=c26ba3cf46a74fdd8f38d70ad51d4072&",
        description: "This is the fourth project I have ever made.",
        link: "http://www.google.com"
    }
];

function MyProjectInside() {
    return (
        <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            pagination={{ clickable: true }}
            loop={true}
            modules={[EffectCoverflow, Pagination]}
            className="myproject w-full"
            breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 30 },
                1280: { slidesPerView: 4, spaceBetween: 40 },
            }}
        >
            {myProjects.map((item, index) => (
                <SwiperSlide key={index} className="bg-colour2 rounded-3xl p-4 w-full">
                    <div className="flex flex-col items-center w-full h-full">
                        <img
                            alt={item.name}
                            loading="lazy"
                            src={item.image}
                            className="w-full aspect-square object-cover mb-4 rounded-lg"
                        />
                        <div className="text-lg font-semibold leading-7 text-center text-teal-700">
                            {item.name}
                        </div>
                        <div className="text-sm leading-6 text-center mt-2 flex-grow">
                            {item.description}
                        </div>
                        <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 text-blue-500 underline cursor-pointer"
                        >
                            See More
                        </a>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default MyProjectInside;

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

const myProjects = [
    {
        "name": "Project 1",
        "image": "https://cdn.builder.io/api/v1/image/assets/TEMP/4db5216de9aceaac00212406c9abc8c3a463fd8ae5a850731c7e9fd7254899b5?apiKey=c26ba3cf46a74fdd8f38d70ad51d4072&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4db5216de9aceaac00212406c9abc8c3a463fd8ae5a850731c7e9fd7254899b5?apiKey=c26ba3cf46a74fdd8f38d70ad51d4072&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4db5216de9aceaac00212406c9abc8c3a463fd8ae5a850731c7e9fd7254899b5?apiKey=c26ba3cf46a74fdd8f38d70ad51d4072&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4db5216de9aceaac00212406c9abc8c3a463fd8ae5a850731c7e9fd7254899b5?apiKey=c26ba3cf46a74fdd8f38d70ad51d4072&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4db5216de9aceaac00212406c9abc8c3a463fd8ae5a850731c7e9fd7254899b5?apiKey=c26ba3cf46a74fdd8f38d70ad51d4072&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4db5216de9aceaac00212406c9abc8c3a463fd8ae5a850731c7e9fd7254899b5?apiKey=c26ba3cf46a74fdd8f38d70ad51d4072&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4db5216de9aceaac00212406c9abc8c3a463fd8ae5a850731c7e9fd7254899b5?apiKey=c26ba3cf46a74fdd8f38d70ad51d4072&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4db5216de9aceaac00212406c9abc8c3a463fd8ae5a850731c7e9fd7254899b5?apiKey=c26ba3cf46a74fdd8f38d70ad51d4072&",
        "description": "This is the first project I have ever made.",
        "link":"http://www.google.com"
    },

    {
        "name": "Project 2",
        "image": "https://cdn.builder.io/api/v1/image/assets/TEMP/706a1d7dfe483e440720b2cd23556c15c416d9b229854d29956d496fc6552ddf?apiKey=c26ba3cf46a74fdd8f38d70ad51d4072&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/706a1d7dfe483e440720b2cd23556c15c416d9b229854d29956d496fc6552ddf?apiKey=c26ba3cf46a74fdd8f38d70ad51d4072&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/706a1d7dfe483e440720b2cd23556c15c416d9b229854d29956d496fc6552ddf?apiKey=c26ba3cf46a74fdd8f38d70ad51d4072&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/706a1d7dfe483e440720b2cd23556c15c416d9b229854d29956d496fc6552ddf?apiKey=c26ba3cf46a74fdd8f38d70ad51d4072&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/706a1d7dfe483e440720b2cd23556c15c416d9b229854d29956d496fc6552ddf?apiKey=c26ba3cf46a74fdd8f38d70ad51d4072&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/706a1d7dfe483e440720b2cd23556c15c416d9b229854d29956d496fc6552ddf?apiKey=c26ba3cf46a74fdd8f38d70ad51d4072&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/706a1d7dfe483e440720b2cd23556c15c416d9b229854d29956d496fc6552ddf?apiKey=c26ba3cf46a74fdd8f38d70ad51d4072&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/706a1d7dfe483e440720b2cd23556c15c416d9b229854d29956d496fc6552ddf?apiKey=c26ba3cf46a74fdd8f38d70ad51d4072&",
        "description": "This is the second project I have ever made.",
        "link":"http://www.google.com"
        
    },

    {
        "name": "Project 3",
        "image": "https://cdn.builder.io/api/v1/image/assets/TEMP/e198a84435f8c926d163e43b1585325870c3229eeb4fe0b5cd3e3bf6373d468e?apiKey=c26ba3cf46a74fdd8f38d70ad51d4072&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e198a84435f8c926d163e43b1585325870c3229eeb4fe0b5cd3e3bf6373d468e?apiKey=c26ba3cf46a74fdd8f38d70ad51d4072&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e198a84435f8c926d163e43b1585325870c3229eeb4fe0b5cd3e3bf6373d468e?apiKey=c26ba3cf46a74fdd8f38d70ad51d4072&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e198a84435f8c926d163e43b1585325870c3229eeb4fe0b5cd3e3bf6373d468e?apiKey=c26ba3cf46a74fdd8f38d70ad51d4072&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e198a84435f8c926d163e43b1585325870c3229eeb4fe0b5cd3e3bf6373d468e?apiKey=c26ba3cf46a74fdd8f38d70ad51d4072&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e198a84435f8c926d163e43b1585325870c3229eeb4fe0b5cd3e3bf6373d468e?apiKey=c26ba3cf46a74fdd8f38d70ad51d4072&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e198a84435f8c926d163e43b1585325870c3229eeb4fe0b5cd3e3bf6373d468e?apiKey=c26ba3cf46a74fdd8f38d70ad51d4072&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e198a84435f8c926d163e43b1585325870c3229eeb4fe0b5cd3e3bf6373d468e?apiKey=c26ba3cf46a74fdd8f38d70ad51d4072&",
        "description": "This is the third project I have ever made.",
        "link":"http://www.google.com"
    }
]

function MyProjectInside() {
    const [isClicked , setIsClicked] = useState(false);
    function ShowMore() {
        setIsClicked(true);
    }


    return(
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
                }}
                direction={'vertical'}
                pagination={{
                clickable: true,
                }}
                loop={true}
                modules={[EffectCoverflow, Pagination]}
                className="myproject "
            >
                {myProjects.map((item, index)=>
                    <SwiperSlide className='bg-colour2 rounded-3xl'>
                        <div className="flex  p-[50px] myproject flex-col w-[33%] max-md:ml-0 max-md:w-full">
                            <div className=" flex flex-col grow text-teal-700 whitespace-nowrap max-md:mt-10">
                                <img
                                loading="lazy"
                                srcSet={item.image}
                                key={index}
                                className="w-full aspect-square"
                                />
                                <div key={index} className="mt-6 text-xl font-semibold leading-8">
                                {item.name}
                                </div>
                                <div key={index} className="mt-2.5 text-lg leading-7">{item.description}</div>
                                <a className='cursor-pointer' onClick={ShowMore} key={index} >More</a>
                            </div>
                        </div>
                </SwiperSlide>)}
            </Swiper>
    </>
    )
}

export default MyProjectInside;
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';





const skills = [
    {id:1, 
    image:'C++.png',
    name:'C/C++', 
    description:'Proficient in C/C++ development, showcasing expertise in DSA , algorithm optimization, and memory management. Leveraging extensive libraries and object-oriented principles, I deliver efficient solutions with a keen eye on performance and scalability. Demonstrated ability to tackle complex projects, ensuring robust, maintainable code for diverse applications.'},

    {id:2, 
    image:'htmlcssjs.png',
    name:'HTML, CSS, JavaScript',
    description:'Expertise in HTML, CSS, and JavaScript, crafting visually appealing and responsive web experiences. Proficient in designing elegant user interfaces, leveraging modern frameworks and libraries for dynamic content and interactivity. Demonstrated ability to create efficient, accessible, and cross-browser compatible websites, ensuring seamless user experiences.'},

    {id:3,
    image:'logo-react.svg',
    name:'React.js',
    description:'Proficient in React.js, utilizing its component-based architecture to build scalable and interactive user interfaces. Experienced in state management with Redux and context API, ensuring efficient data flow and predictable application behavior. Leveraging React virtual DOM and JSX syntax for optimized rendering, I deliver dynamic web applications with enhanced performance and maintainability.'},

    {id:4,
      image:'Next-js.webp',
      name:'Next.js',
      description:'Skilled in Next.js, harnessing its powerful features to create high-performance, server-rendered React applications. Proficient in dynamic routing, API integration, and server-side rendering, ensuring fast loading times and SEO-friendly content. Leveraging Next.js built-in optimizations and TypeScript support, I deliver robust and scalable web solutions with enhanced developer productivity and user experience.'},

    {id:4,
      image:'Next-js.webp',
      name:'C# Dot Net',
      description:'Proficient in C# .NET Web API development, leveraging its robust framework to build scalable and secure RESTful APIs. Skilled in implementing authentication, authorization, and validation mechanisms for data integrity and access control. Utilizing asynchronous programming and dependency injection, I ensure optimal performance and maintainability, delivering efficient backend solutions for modern web applications.'},
]


function SkillsInside() {
    return(
        <>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
        <div className="flex ">
                {skills.map((item, index)=>
                <SwiperSlide>
                <div className="flex  justify-center items-center px-16 py-12 w-full bg-white max-md:px-5 max-md:max-w-full">
                    <div className="mt-20 toogle mb-14 w-full drop-shadow-2xl rounded-3xl bg-colour5 max-w-[1000px] p-2 h-[400px] scrollbar overflow-auto max-md:my-10 max-md:max-w-full">
                        <div className="flex gap-3 justify-center max-md:flex-col max-md:gap-2 max-md:">
                            <div className="flex flex-col w-[100%] max-md:ml-0 max-md:w-full">
                                <div className="p-2  flex flex-col justify-center grow text-center text-teal-700 max-md:mt-10">
                                    <img
                                    loading="lazy"
                                    srcSet={item.image}
                                    key={index}
                                    className="self-center skills-image max-w-full aspect-square w-[170px]"
                                    />
                                    <div key={index} className="mt-14 text-3xl font-semibold leading-10 max-md:mt-10">
                                    {item.name}
                                    </div>
                                    <div key={index} className="mt-5 text-lg leading-7">
                                    {item.description}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>)}
        </div>
        </Swiper>
      </>   
    )
}

export default SkillsInside;

/*
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>

    <div className="flex ">
                {skills.map((item, index)=><div className="flex justify-center items-center px-16 py-12 w-full bg-white max-md:px-5 max-md:max-w-full">
                <div className="mt-20 mb-14 w-full max-w-[1000px] max-md:my-10 max-md:max-w-full">
                    <div className="flex gap-3 justify-center max-md:flex-col max-md:gap-2 max-md:">
                    <div className="flex flex-col w-[70%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col justify-center grow text-center text-teal-700 max-md:mt-10">
                    <img
                    loading="lazy"
                    srcSet={item.image}
                    key={index}
                    className="self-center max-w-full aspect-square w-[130px]"
                    />
                    <div key={index} className="mt-14 text-3xl font-semibold leading-10 max-md:mt-10">
                    {item.name}
                    </div>
                    <div key={index} className="mt-5 text-lg leading-7">
                    {item.description}
                    </div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>)}
        </div>
 */



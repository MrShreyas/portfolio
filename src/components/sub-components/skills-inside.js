import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const skills = [
    {id:1, image:'C++.png', name:'C/C++', description:'Proficient in C/C++ development, showcasing expertise in DSA, algorithm optimization, and memory management. Leveraging extensive libraries and object-oriented principles, I deliver efficient solutions with a keen eye on performance and scalability. Demonstrated ability to tackle complex projects, ensuring robust, maintainable code for diverse applications.'},
    {id:2, image:'htmlcssjs.png', name:'HTML, CSS, JavaScript', description:'Expertise in HTML, CSS, and JavaScript, crafting visually appealing and responsive web experiences. Proficient in designing elegant user interfaces, leveraging modern frameworks and libraries for dynamic content and interactivity. Demonstrated ability to create efficient, accessible, and cross-browser compatible websites, ensuring seamless user experiences.'},
    {id:3, image:'logo-react.svg', name:'React.js', description:'Proficient in React.js, utilizing its component-based architecture to build scalable and interactive user interfaces. Experienced in state management with Redux and context API, ensuring efficient data flow and predictable application behavior. Leveraging React virtual DOM and JSX syntax for optimized rendering, I deliver dynamic web applications with enhanced performance and maintainability.'},
    {id:4, image:'Next-js.webp', name:'Next.js', description:'Skilled in Next.js, harnessing its powerful features to create high-performance, server-rendered React applications. Proficient in dynamic routing, API integration, and server-side rendering, ensuring fast loading times and SEO-friendly content. Leveraging Next.js built-in optimizations and TypeScript support, I deliver robust and scalable web solutions with enhanced developer productivity and user experience.'},
    {id:5, image:'csharp.jpg', name:'C# Dot Net', description:'Proficient in C# .NET Web API development, leveraging its robust framework to build scalable and secure RESTful APIs. Skilled in implementing authentication, authorization, and validation mechanisms for data integrity and access control. Utilizing asynchronous programming and dependency injection, I ensure optimal performance and maintainability, delivering efficient backend solutions for modern web applications.'},
];

function SkillsInside() {
    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper "
            breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 10 },
                640: { slidesPerView: 1, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 30 },
                1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
        >
            {skills.map((item) => (
                <SwiperSlide key={item.id}>
                    <div className="flex justify-center toogle  items-center px-6 py-8 bg-white max-w-[1000px] w-full mx-auto">
                        <div className="mt-20 mb-14 w-full scrollbar drop-shadow-2xl rounded-3xl bg-colour5 p-6 h-[400px] overflow-auto">
                            <div className="flex gap-3 justify-center flex-col items-center">
                                <img
                                    alt={item.name}
                                    src={item.image}
                                    className="skills-image max-w-full aspect-square w-[170px] mb-6"
                                />
                                <h3 className="text-3xl font-semibold text-center text-teal-700">
                                    {item.name}
                                </h3>
                                <p className="text-lg leading-7 text-center">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default SkillsInside;

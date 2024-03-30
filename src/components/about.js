

function About() {
    return (
        <div className="my-12 w-full pt-[70px] max-w-[1080px] max-md:my-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto font-semibold max-md:mt-10 max-md:max-w-full">
                <div className="text-xl leading-8 text-teal-600 max-md:max-w-full">
                  Full Stack Web Developer{" "}
                </div>
                <div className="mt-10 text-7xl text-teal-700 leading-[90px] max-md:max-w-full max-md:text-4xl max-md:leading-[50px]">
                  My awesome portfolio
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <img
                alt="image"
                loading="lazy"
                srcSet="profile1.jpg"
                className="grow rounded-[100%] h-full  w-full aspect-[1.1] max-md:mt-7 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
    )
}

export default About;
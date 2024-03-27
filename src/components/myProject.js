import MyProjectInside from "./sub-components/myProject-inside";


function MyProject() {
    return (
        <div className="flex flex-col px-20 py-5 w-full bg-white max-md:px-5 max-md:max-w-full">
            <div className="self-center text-6xl font-semibold leading-10 text-center text-teal-700 whitespace-nowrap">
            My Projects
            </div>
            <div className="mx-5 mt-16 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                    <MyProjectInside/>
                </div>
            </div>
            
            </div>
    )
}

export default MyProject;
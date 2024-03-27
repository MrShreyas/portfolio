import EducationInside from "./sub-components/education-inside";

function Education() {

    return(
        <div className=" bg-colour2 rounded-3xl flex flex-col px-20 py-12 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="text-6xl self-center mt-12 font-semibold text-slate-500 max-md:mt-10">
          Education Journey
        </div>
        <div className="mx-5 mt-14 mb-16 max-md:my-10 max-md:mr-2.5 max-md:max-w-full">
          <div className=" flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <EducationInside/>
            
          </div>
        </div>
      </div>
    )
    
}

export default Education;
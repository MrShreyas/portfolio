import SkillsInside from "./sub-components/skills-inside";


function Skills() {
    return(
        <div className="bg-colour2 rounded-3xl p-1">
            <div className="mt-11 w-full  text-6xl font-semibold leading-10 text-center text-teal-700 max-md:mt-10 max-md:max-w-full">
                Skills
            </div>
            <div className="">
                <SkillsInside/>
            </div>
      </div>
    )
}

export default Skills;
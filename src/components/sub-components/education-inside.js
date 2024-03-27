
const eduDetails = [
    {
        id:1,
        college_name: "Fergussan College Pune" ,
        qualification: 12 ,
        grades:  69.08,
        current: "",
        university: "Pune University",

    },

    {
        id:2,
        college_name: "Nutan College of Engineering and Research" ,
        qualification: "B.Tech" ,
        grades:  "7.8 CGPA",
        current: "",
        university: "DBATU",

    },
]


function EducationInside() {
    return(
            <div className="flex gap-5 justify-center">
                {eduDetails.map((item, index)=>
                    <div className="flex flex-col grow p-8 mx-auto w-full bg-yellow-50 drop-shadow-2xl bg-colour6 max-md:px-5 max-md:mt-10">
                        <div className="flex flex-col w-[100%] max-md:ml-0 max-md:w-full">
                            <div className="text-xl font-semibold leading-8 text-slate-500 p-1" key={index}>
                            Institute Name: {item.college_name}
                            </div>  
                            <div className="text-xl font-semibold leading-8 text-slate-500 p-1" key={index}>
                            Qualification: {item.qualification}
                            </div>
                            <div className="text-xl font-semibold leading-8 text-slate-500 p-1" key={index}>
                            Grades: {item.grades}
                            </div><div className="text-xl font-semibold leading-8 text-slate-500 p-1" key={index}>
                            University: {item.university}
                            </div>
                        </div>
                    </div>
                
                )}
            </div>      
                
        
    )
}

export default EducationInside;
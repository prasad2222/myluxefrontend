import react from 'react';
import {useState} from 'react';
// import { empList } from './form_practice/empList'



export const  Empform = () => {

    
    const projects = ["Inferscience","TAF","ENS"];
    const Gender = ["Male","Female","Other"];

    const empList = [
        { name: "John Smith", age: 28, gender: "Male", projects: ["React App", "Mobile App"] },
        { name: "Sarah Johnson", age: 32, gender: "Female", projects: ["Website Redesign", "API Development", "Database Migration"] },
        { name: "Michael Chen", age: 26, gender: "Male", projects: ["Frontend Dashboard"] },
        { name: "Emily Davis", age: 29, gender: "Female", projects: ["HR Portal", "Employee Training"] },
        { name: "David Wilson", age: 35, gender: "Male", projects: ["CRM System", "Cloud Migration", "Performance Optimization"] },
    ]

    const [formData,setFormData] = useState({
        firstName : "",
        age: "",
        project:"",
        gen:""
    })

    const handleForm = (e) =>{
        e.preventDefault();
        console.log(formData)
        alert("hello");
    }

    return(
    <>
        <div style={{width:"500px" , height : "500px" }}>
            <label name= "fullname">Name:</label>
            <input type="text" name="fullname" value={formData.firstName} onChange={(e)=>setFormData({...formData,firstName:e.target.value})}></input>

            <label>Age:</label>
            <input type="text" name="age" value={formData.age} onChange={(e)=>setFormData({...formData,age:e.target.value})}></input>

            {/* <label name="projects">Projects:</label> */}
            {
                projects.map((project)=>(
                    <label key={project}>
                        <input type="checkbox" name="projects" value={formData.project} onChange={(e)=>setFormData({...formData,project:e.target.value})}/>{project}
                    </label>
                )
            )}

            {/* <label>Gender:</label> */}
            {
                Gender.map((gen)=>(
                    <label key={gen}>
                        <input type="radio" name="gender" value={formData.gen} onChange={(e)=>setFormData({...formData,gen:e.target.value})}/>{gen}
                    </label>
                ))
            }

            <button  onClick={handleForm}>submit</button>
        </div>

        <div style={{width:"100%", height: "auto", marginTop: "30px", padding: "20px"}}>
            <div style={{boxShadow: "0 2px 8px rgba(0,0,0,0.1)", borderRadius: "8px", overflow: "hidden"}}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 2fr", backgroundColor: "#4CAF50", color: "white", fontWeight: "bold" }}>
                    <div style={{padding: "12px 15px", borderBottom: "2px solid #ddd"}}>Name</div>
                    <div style={{padding: "12px 15px", borderBottom: "2px solid #ddd"}}>Age</div>
                    <div style={{padding: "12px 15px", borderBottom: "2px solid #ddd"}}>Gender</div>
                    <div style={{padding: "12px 15px", borderBottom: "2px solid #ddd"}}>Projects</div>
                </div>
                {empList.map((emp)=>(
                    <div key={emp.name} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 2fr", borderBottom: "1px solid #ddd" }}>
                        <div style={{padding: "12px 15px"}}>{emp.name}</div>
                        <div style={{padding: "12px 15px"}}>{emp.age}</div>
                        <div style={{padding: "12px 15px"}}>{emp.gender}</div>
                        <div style={{padding: "12px 15px"}}>{emp.projects.join(", ")}</div>
                    </div>
                ))}
            </div>
        </div>
    </>
    )
}

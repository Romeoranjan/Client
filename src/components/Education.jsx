import axios from 'axios';
import {useState} from "react";
const Education = () => {

const [edu, setEdu] = useState({});

const handleChange = (e)=>{
  setEdu({...edu,
  [e.target.name]:e.target.value
  })
}
const handleClick = (e)=>{
 if(e.target.name==="button"){
   
  axios.post('http://localhost:5000/api/signup-education', edu, {
    headers : {
        Accept : "application/json",
        "content-type" : "application/json",
        
    }
})
.then(res=> {
  console.log(res);
  
} )
.catch(err=>console.log(err))

setEdu({});
window.location.href = "/signup-skills";



 }else{
   setEdu({
     ...edu,
     [e.target.name]:e.target.value 
   })
 }
}

console.log(edu);


  return <section className="inerpgenmidle_scn">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="middeleboxbg">

            <div className="profile">
              <div className="col4">
                <img src="images/hireitapmg.png" className="img-fluid" alt="ime" />
                <div className="list_text">
                  <ul>
                    <li className="colr"><a href="#"><span>1</span> Create account</a></li>
                    <li className="active colr"><a href="#"><span>2</span> Education</a></li>
                    <li><a href="#"><span>3</span> Skills</a></li>
                    <li><a href="#"><span>4</span> Assesments</a></li>


                  </ul>
                </div>
              </div>
              <div className="col8">

                <div className="eduction_box">
                  <h2>Enter Details</h2>
                  <div className="input_boxsel profile_input">
                    <div className="col12">
                      <select className="form-control">
                        <option>Select Education</option>
                        <option>Select Education</option>
                      </select>
                    </div>
                    <div className="col12">
                      <select className="form-control">
                        <option>Select Course</option>
                        <option>Select Course</option>
                      </select>
                    </div>
                    <div className="col12">
                      <select className="form-control">
                        <option>Specialization</option>
                        <option>Specialization</option>
                      </select>
                    </div>
                    <div className="col12">
                      <select className="form-control">
                        <option>Select University/Institute</option>
                        <option>Select University/Institute</option>
                      </select>
                    </div>
                    <div className="col12">
                      <input onChange={handleChange} name = "institute" value={edu.institute} type="text" className="form-control" placeholder="Enter University/Institute Name" />
                    </div>
                    <div className="col12">
                      <h6>Course Type</h6>
                      <input onClick={handleClick} type="checkbox" name="course_type" value="FullTime" />
                      <label > Full Time</label>
                      <input onClick={handleClick} type="checkbox"  name="course_type" value="PartTime" />
                      <label > Part Time</label>
                    </div>
                    <div className="col12">
                      <input name="pass_out" onChange={handleChange} type="date" className="form-control" placeholder="Enter Pass Out Year" />
                    </div>
                    <div className="col12">
                      <input name = "grades" onChange={handleChange} type="text" className="form-control" placeholder="Enter Your Grades" />
                    </div>
                    <div className="profile_input">
                      <div className="col6">
                        <input type="file" className="form-control" id="customFile" />
                      </div>
                    </div>
                    <div className="col12">

                      <button name ="button" onClick={handleClick} className="btn">Save and proceed</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
    </section >
          
      
   

}
export default Education;
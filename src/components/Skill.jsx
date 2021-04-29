import axios from 'axios';
import { useState} from "react";
const Skill = () => {

const [skills, setSkills] = useState({})

const handleChange = (e)=>{
setSkills({...skills,[e.target.name] : e.target.value})
}
const handleClick = (e)=>{
  if(e.target.name === "button"){
    axios.post('http://localhost:5000/api/signup-skills', skills, {
      headers : {
          Accept : "application/json",
          "content-type" : "application/json"
      }
  })
  .then(res=> {
    console.log(res);
    
  } )
  .catch(err=>console.log(err))

  setSkills({});
  window.location.href = "/signup-assesments";

  }else{
    setSkills({...skills,[e.target.name] : e.target.value})
  }
}
console.log(skills)

  return <section class="inerpgenmidle_scn">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="middeleboxbg">

            <div class="profile">
              <div class="col4">
                <img src="images/hireitapmg.png" class="img-fluid" alt="ime" />
                <div class="list_text">
                  <ul>
                    <li class="colr"><a href="#"><span>1</span> Create account</a></li>
                    <li class="colr"><a href="#"><span>2</span> Education</a></li>
                    <li class="active colr"><a href="#"><span>3</span> Skills</a></li>
                    <li><a href="#"><span>4</span> Assesments</a></li>


                  </ul>
                </div>
              </div>
              <div class="col8">
                <div class="head_prof">
                  <h1>Skills</h1>
                </div>
                <div class="profile_input">
                  <div class="col12">
                    <div class="eduction_box">
                      <h2>Enter Details</h2>
                      <div class="input_boxsel profile_input">
                        <div class="col12">
                          <h6>Skill Type</h6>
                          <input  onClick={handleClick} type="checkbox" id="vehicle1" name="skillType" value="Coding" />
                          <label for="vehicle1"> Coding</label>
                          <input  onClick={handleClick} type="checkbox" id="vehicle2" name="skillType" value="Functional" />
                          <label for="vehicle2"> Functional</label>
                        </div>

                        <div class="col12">
                          <select  class="form-control">
                            <option>Node js</option>
                            <option>React</option>
                          </select>
                        </div>
                        <div class="col12">
                          <input name ="skill" onChange={handleChange} type="text" class="form-control" placeholder="Enter Skill" />
                        </div>
                        <div class="col12">
                          <h6>Proficiency</h6>
                          <input  onClick={handleClick} type="checkbox"  name="proficiency" value="begginer" />
                          <label htmlFor="vehicle1"> Beginner</label>
                          <input  onClick={handleClick} type="checkbox"  name="proficiency" value="intermediate" />
                          <label htmlFor="vehicle2"> Intermediate</label>
                          <input  onClick={handleClick} type="checkbox"  name="proficiency" value="expert" />
                          <label htmlFor="vehicle3"> Expert</label>
                        </div>
                        <div class="col12">
                          <textarea name = "projectBrief" onChange={handleChange} class="form-control" placeholder="Project Briefy"></textarea>
                        </div>
                        <div class="col12">
                          <h6>Certified</h6>
                          <input onClick={handleClick} type="checkbox" name="certified" value="yes" />
                          <label  for="vehicle4"> Yes</label>
                          <input onClick={handleClick} type="checkbox"  name="certified" value="no" />
                          <label for="vehicle5"> No</label>
                        </div>
                        <div class="col12">
                          <button name = "button" onClick={handleClick} type="submit" class="btn">Save and proceed</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
}
export default Skill;
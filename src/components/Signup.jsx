import axios from 'axios';
import {useState} from "react";
const Signup = ()=>{
 
  const [user, setUser]=useState({
    firstname:"",
    lastname:"",
    email :"",
    dob : "",
    phonenumber : "",
    address : "",
    password : "",
    description : ""
  });
  
  console.log(user)
  const handleChange = (e)=>{
    setUser({...user,
    [e.target.name]:e.target.value
    })
  }
  const handleSubmit= async(e)=>{
   await e.preventDefault();
     axios.post('http://localhost:5000/api/signup', user, {
      headers : {
          Accept : "application/json",
          "content-type" : "application/json"
      }
  })
  .then(res=> {
    console.log(res);

  } )
  .catch(err=>console.log(err))

  setUser({
    firstname:"",
    lastname:"",
    email :"",
    dob : "",
    phonenumber : "",
    address : "",
    password : "",
    description : ""
  });
   window.location.href="/signup-education";
  }

   
    return <section className="inerpgenmidle_scn">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="middeleboxbg">
          
             <div className="profile">
             <div className="col4">
             <img src="images/hireitapmg.png" className="img-fluid" alt="ime"/>
             <div className="list_text">
             <ul> 
             <li className="active"><a href="#"><span>1</span> Create account</a></li>
             <li><a href="#"><span>2</span> Education</a></li>
             <li><a href="#"><span>3</span> Skills</a></li>
             <li><a href="#"><span>4</span> Assesments</a></li>
             
  
             </ul>
             </div>
             </div>
             <div className="col8">
             <div className="head_prof">
          <h1>Personal Details</h1>
          
          </div>
             <div className="profile_input">
             <div className="col6">
             <input value={user.firstname} onChange={handleChange} name="firstname" type="text" className="form-control" placeholder="First Name"/>
             </div>
             <div className="col6">
             <input value = {user.lastname} onChange={handleChange} name="lastname" type="text" className="form-control" placeholder="Last Name"/>
             </div>
             </div>
             <div className="profile_input">
             <div className="col12">
             <input value = {user.dob} onChange={handleChange} name = "dob" type="date" className="form-control" placeholder="Enter DOB"/>
             </div>
         </div>
         <div className="profile_input">
             <div className="col12">
             <h6>Gender</h6>
             <input type="radio" id="male" name="gender" value="male"/>
  <label for="male">Male</label>
  <input type="radio" id="female" name="gender" value="female"/>
  <label for="female">Female</label>
               </div>
         </div>
         <div className="profile_input">
         <div className="col12">
             <h6>Person with disabilities (if yes, please specify)</h6>
             <input type="checkbox" id="vehicle1" name="vehicle1" value="No"/>
  <label for="vehicle1"> No</label>
  <input type="checkbox" id="vehicle2" name="vehicle2" value="Yes"/>
  <label for="vehicle2"> Yes</label>
               </div>
         </div>
         <div className="profile_input">
             <div className="col12">
             <input value = {user.email}  name = "email" onChange={handleChange} type="text" className="form-control" placeholder="Enter Email Id"/>
             </div>
         </div>
         <div className="profile_input">
             <div className="col12">
             <input value = {user.password} name = "password" onChange={handleChange} type="string" className="form-control" placeholder="Enter Password"/>
             </div>
         </div>
         <div className="profile_input">
             <div className="col12">
             <input value = {user.phonenumber} name = "phonenumber" onChange={handleChange} type="tel" className="form-control" placeholder="Enter Mobile Number"/>
             </div>
         </div>
         <div className="profile_input">
             <div className="col12">
             <textarea value = {user.address} name = "address"  onChange={handleChange} className="form-control" placeholder="Address"></textarea>
             </div>
         </div>
         <div className="profile_input">
             <div className="col12">
             <textarea value = {user.description} name = "description"  onChange={handleChange} className="form-control" placeholder="Briefy about yourself"></textarea>
             </div>
         </div>
         <div className="profile_input">
             <div className="col6">
             <input type="file" className="form-control" id="customFile" />
              </div>
         </div>
         <div className="profile_input">
             <div className="col12">
               
                <button onClick={handleSubmit} type="submit" className="btn">Save and proceed</button>
           
            
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
export default Signup;
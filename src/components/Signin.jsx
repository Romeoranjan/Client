import axios from 'axios';
import { useState } from "react";
import AlertMsg from './AlertMsg';
import Personal from './Personal';


const Signin = ()=>{
  const [user, setUser] = useState({
    username : "",
    password : ""
  })
  const[auth, setAuth] = useState(false);
  const [data, setData] = useState({})
  const [isSignedIn, setSignIn] = useState(false);
  const handleChange=(e)=>{
    const {name, value} = e.target;
    setUser({
      ...user,
      [name]:value
    })
    console.log(user)
  }
  console.log(data)
  const handleSubmit = async (e)=>{
    await e.preventDefault();
   await axios.post('http://localhost:5000/api/signin', user ,{
     headers : {
      Accept : "application/json",
      "content-type" : "application/json"
     }
   })
   .then(res=>{
     console.log(res.data); 
    setData(res.data)
    setSignIn(true);
    /* setSignIn(true); */
   })
   .catch(err=>{
  
    setAuth(true)
    setUser({})
    setTimeout(()=>{
      setAuth(false);

    },1500)
  })       
  }

    return isSignedIn?<Personal data={data}/>:<>
  
<div id="forgtmodel">
  <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModal" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModal">Forget password</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
        </div>
        <div className="modal-body">
          
            <form>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Enter Email Id"/>
              </div>
              <button type="submit" className="btn">Submit</button>
            </form>
        
        </div>
      </div>
    </div>
  </div>
</div>
    <section className="signinmidle_scn">
    
    <div className="container">
    {auth && <AlertMsg msg = "Hey Seems like you entered wrong signin details. Please try again"/>}
      <div className="row">
        <div className="col-md-12">
          <div className="welcmebckall">
            <div className="row">
              <div className="col-md-6">
                <div className="welcmtxt">
                <div className="welcmtxt1">
                  <h1>Welcome Back !</h1>
                  <p>Lorem ipsum dolor sit amet, <span className="brek">consectetur adipiscing elit.</span></p>
                  <div className="welcmemg"><img src="images/welcmemg.png" className="img-fluid" alt=""/></div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="signupform">
                  <h2>Sign in to Umpteens</h2>
                  <form onSubmit = {handleSubmit} >
                    <div className="form-group">
                      <input value={user.username} name="username" onChange = {handleChange} type="text" className="form-control" placeholder="Enter Username/Email Id"/>
                    </div>
                    <div className="form-group">
                      <input value={user.password} name = "password" onChange = {handleChange} type="text" className="form-control" placeholder="Enter Password"/>
                    </div>
                    <div className="kooplognfrgtpswd d-flex justify-content-between align-items-center">
                      <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                        <label className="custom-control-label" for="customCheck1">Keep me logged in</label>
                      </div>
                      <div className="forgtpopop"> <a href="#" data-toggle="modal" data-target="#exampleModal">Forget password</a> </div>
                    </div>
                    <button type="submit" className="btn">Sign in</button>
                    <p>Don’t not have account yet? <a href="#">Sign up</a></p>
                  </form>
                  
                  <div className="socilist">
                     <h4>Or</h4>
                     <ul>
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-google" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                     </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </>
}
export default Signin;
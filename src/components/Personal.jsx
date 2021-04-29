
const Personal = ({data})=>{
  const {firstname, lastname, email,dob, address, description, phonenumber} = data;
    return <section className="inerpgenmidle_scn personalinfopage">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="middeleboxbg">
             <div className="personalinfo">
                 <div className="prsnlinfo_box">
                    <h2>{firstname} {lastname}</h2>
                    <table className="table" cellpadding="0" cellspacing="0">
                    
                    <tbody>
                      <tr>
                        <th scope="row">Date of birth :</th>
                        <td>{dob}</td>
                        
                      </tr>
                      <tr>
                        <th scope="row">Mobile :</th>
                        <td>{phonenumber}</td>
                        
                      </tr>
                      <tr>
                        <th scope="row">Email Id :</th>
                        <td>{email}</td>
                        
                      </tr>
                      <tr>
                        <th scope="row">Address :</th>
                        <td>{address}</td>
                        
                      </tr>
                      
                      
                    </tbody>
                  </table>
                  <div className="infoimg"><img src="./images/placeholer.jpg" className="img-fluid" alt=""/></div>
                 </div> 
                 <div className="prsnlinfo_box">
                    <h2>Education Details</h2>
                    <table className="table" cellpadding="0" cellspacing="0">
                    
                    <tbody>
                      <tr>
                        <th scope="row">Degree :</th>
                        <td> Bachelor of Engineering </td>
                        
                      </tr>
                      <tr>
                        <th scope="row">Course :</th>
                        <td> Civil Engineering </td>
                        
                      </tr>
                      <tr>
                        <th scope="row"> Specialization :</th>
                        <td> xxxxxxx </td>
                        
                      </tr>
                      <tr>
                        <th scope="row">Course Type :</th>
                        <td> Fulltime </td>
                        
                      </tr>
                      <tr>
                        <th scope="row">Pass of Year :</th>
                        <td> 05/15/2018 </td>
                        
                      </tr>
                      <tr>
                        <th scope="row">Grades :</th>
                        <td> 85% </td>
                        
                      </tr>
                      
                      
                    </tbody>
                  </table>
                  <div className="tablbtn"><a href="#"><i className="fa fa-eye" aria-hidden="true"></i> Certificate</a></div>
                 </div>
                 <div className="prsnlinfo_box">
                    <h2>Assessment</h2>
                    <table className="table" cellpadding="0" cellspacing="0">
                    
                    <tbody>
                      <tr>
                        <th scope="row">Subject :</th>
                        <td> Cognitive </td>
                        
                      </tr>
                      <tr>
                        <th scope="row">Grades :</th>
                        <td> 8.50 </td>
                        
                      </tr>
                    </tbody>
                  </table>
                  <div className="tablbtn"><a href="#">Retake Assessment</a></div>
                  
                  <table className="table" cellpadding="0" cellspacing="0">
                    
                    <tbody>
                      <tr>
                        <th scope="row">Subject :</th>
                        <td> Communication </td>
                        
                      </tr>
                      <tr>
                        <th scope="row">Grades :</th>
                        <td> 8.00 </td>
                        
                      </tr>
                    </tbody>
                  </table>
                  <div className="tablbtn"><a href="#">Retake Assessment</a></div>
                  
                   <div className="tablangulrtxt"><h3>Angular</h3></div>
                  <table className="table" cellpadding="0" cellspacing="0">
                    
                    <tbody>
                      <tr>
                        <th scope="row">Proficiency :</th>
                        <td> Beginner </td>
                        
                      </tr>
                      <tr>
                        <th scope="row">Certified :</th>
                        <td> Yes </td>
                        
                      </tr>
                      <tr>
                        <th scope="row">Project Details :</th>
                        <td> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </td>
                        
                      </tr>
                      <tr>
                        <th scope="row">Score :</th>
                        <td> 9.80 </td>
                        
                      </tr>
                    </tbody>
                  </table>
                  <div className="tablbtn"><a href="#">Retake Assessment</a></div>
                 </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
}
export default Personal;
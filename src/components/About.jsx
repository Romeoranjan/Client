import {Link} from "react-router-dom";
const About = ()=>{
    return <section id="destnation" class="compnydesntn_scn">
    <div class="container">
    <h2>Top companies from top job  <span class="brek">destinations in India</span></h2>
      <div class="row">
        <div class="col-sm-6">
          <div class="comdes_cntnt">
             <div class="stdntmg"><img src="images/studentmg.jpg" class="img-fluid" alt=""/></div>
             <h3>Students</h3>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
             <Link to='/signup' >Learn More</Link>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="comdes_cntnt">
             <div class="stdntmg"><img src="images/studentmg1.jpg" class="img-fluid" alt=""/></div>
             <h3>Scouts</h3>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
             <Link to='/company'>Learn More</Link>
          </div>
        </div>
      </div>
    </div>
  </section>
}
export default About;
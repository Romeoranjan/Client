const Footer = ()=>{

    return <footer className = "footer_scn" >
        <div className = "container-fluid">
        <div className="row">
            <div className="col-md-3">
              <div className="fotertxt">
                <div className="fotrlogo"><img src="images/fotrlogo.png" className="img-fluid" alt=""/></div>
                <p>© 2020-21 Umpteens</p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="fotertxt">
                <ul className="fotrmnu">
                   <li><a href="#">About us</a></li>
                   <li><a href="#">Terms of us</a></li>
                   <li><a href="#">Contact us</a></li>
                   
                </ul>
                 <ul className="fotrsocil">
                   <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                   <li><a href="#"><i className="fa fa-google" aria-hidden="true"></i></a></li>
                   <li><a href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                   
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="fotertxt txtaligleft">
                 <ul className="fotradress">
                   <li><a href="mailto:www.umpteens.com"> <i className="fa fa-envelope" aria-hidden="true"></i> www.umpteens.com</a></li>
                   <li><a href="tel:+91-94xxxxxxxx"> <i className="fa fa-phone" aria-hidden="true"></i> +91-94xxxxxxxx</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </footer>

}
export default  Footer;
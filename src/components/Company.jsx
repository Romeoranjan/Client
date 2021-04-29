const Company = ()=>{
    return <section className="inerpgenmidle_scn compnydtal_pge">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="middeleboxbg compnydtalbox">
              <div className="compnydtalfrm">
                 <h2> Company Details </h2>
                 <form>
                  
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Company Name"/>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Name of the contract person"/>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Enter Designation"/>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Enter Username/Email Id"/>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Enter Password"/>
                  </div>
                  <div className="form-group">
                   <input name="phone" type="text" className="form-control mb-2 inptFielsd" id="phone" placeholder="Enter Mobile Number" />
                  </div>
                  <button type="button" className="btn">Save and proceed</button>
                 </form>
              </div>
          </div>
        </div>
      </div>
    </div>
  </section>
}
export default Company;
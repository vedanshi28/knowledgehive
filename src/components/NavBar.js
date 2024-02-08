import React from "react";

const NavBar=()=>{
    return(
        <>
        <div className="container-fluid navbar-dark bg-dark">
           <div className="row">
             <div className="col-10 mx-auto">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
           <a className="navbar-brand" href="#">Knowledge Hive</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
           </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Contact</a>
        </li>
      </ul>
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item" >
        <i class="fa-brands fa-twitter nav-link active icon1"></i>
        </li>
        <li className="nav-item">
        <i class="fa-brands fa-reddit nav-link active icon"></i>
        </li>
      </ul>
      <form className="d-flex">
        <button className="bttn" type="submit">LOGIN</button>
        <button className="bttn1" type="submit">SIGN UP</button>
      </form>
    </div>
  </div>
</nav>
</div>
</div>
</div>
        </>
    )
}
export default NavBar;
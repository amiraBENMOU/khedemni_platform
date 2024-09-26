import React from "react";
import '../src/Footer.css';

const footerStyle = {backgroundColor: '#F1F1F1'};




function Footer() {
  return (
    <footer className="page-footer font-small blue pt-5 mt-5 pb-3 " style={footerStyle} >
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-4 mt-4">
            <h5 className="text-uppercase">Khedemni Portal</h5>
            <p className="mt-3">Where You Find The Target Job For Your Need !</p>
          </div>

         {/*  <hr className="clearfix w-100 d-md-none pb-0" />
        This is how you write single line comments inside JSX 
          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled">
              <li><a href="#!">Link 1</a></li>
              <li><a href="#!">Link 2</a></li>
              <li><a href="#!">Link 3</a></li>
              <li><a href="#!">Link 4</a></li>
            </ul>
          </div> */}
          <div className="col-md-6 mb-md-0 mb-3  ">
            <h5 className="text-uppercase ">Contact</h5>
            <ul className="list-unstyled " >
              <li ><a href="#!" className='footer-link'>Email</a></li>
              <li ><a href="#!" className='footer-link'>+66666666</a></li>
              <li><a href="#!" className='footer-link'>Facebook</a></li>
              <li><a href="#!" className='footer-link'>Linkedin</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-copyright text-center py-3">
        © 2024 Copyright

      </div>
    </footer>
  );
}

export default Footer;

import React from "react";
import "./style.css";


function Footer() {
  return (
    <footer className="page-footer" style={{
      "background": "rgb(63, 27, 27)",
      "color": "rgb(235, 235, 235)", "height": "auto"
    }}>

        <div className="row" style={{"marginTop": "100px", "padding" : "20px"}}>
          <div className="col l4  s6">
            <h6 className="white-text">Developer </h6>
            <span style={{fontSize: "16px"}}>
                        <a className="grey-text text-lighten-3" href="https://github.com/sajadgzd">Sajad</a>
            </span>
          </div>
        </div>
      <div className="footer-copyright">
        <div style={{"margin": "0 auto"}}>
          © 2019 Memory Game
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import React from 'react';
import { NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <>
        <div className="footer">
            <div className="socialCircle">
                <h1>LOGO</h1>
            <a
                href="https://www.facebook.com/"
                rel="noopener noreferrer"
                target="_blank"
                className="iconFacebook"
                title="Facebook"
              >
                <i className="fa fa-facebook"></i>
              </a>

              <a
                href="https://www.facebook.com/"
                rel="noopener noreferrer"
                target="_blank"
                className="iconYoutube"
                title="Youtube"
              >
                <i className="fa fa-youtube"></i>
              </a>

              <a
                href="https://www.facebook.com/"
                rel="noopener noreferrer"
                target="_blank"
                className="iconInstagram"
                title="Instagram"
              >
                <i className="fa fa-instagram"></i>
              </a>

              <a
                href="https://twitter.com/"
                rel="noopener noreferrer"
                target="_blank"
                className="iconTwitter"
                title="Twitter"
              >
                <i className="fa fa-twitter"></i>
              </a>
              </div>

              <div className="footerNavs">
                  <h3>Projeleri Kesfiden</h3>
                  <NavLink className="footerNav" to="/" activeClassName="selected" exact={true}>
                Home
                </NavLink>

                <NavLink className="footerNav" to="/" activeClassName="selected" exact={true}>
                Home
                </NavLink>

                <NavLink className="footerNav" to="/" activeClassName="selected" exact={true}>
                Home
                </NavLink>

                <NavLink className="footerNav" to="/" activeClassName="selected" exact={true}>
                Home
                </NavLink>
              </div>
              <div className="footerNavs">
              <h3>kshdfgb</h3>
              <NavLink className="footerNav" to="/" activeClassName="selected" exact={true}>
                Home
                </NavLink>

                <NavLink className="footerNav" to="/" activeClassName="selected" exact={true}>
                Home
                </NavLink>

                <NavLink className="footerNav" to="/" activeClassName="selected" exact={true}>
                Home
                </NavLink>

                <NavLink className="footerNav" to="/" activeClassName="selected" exact={true}>
                Home
                </NavLink>
              </div>
              <div className="footerNavs">
              <h3>kshdfgb</h3>
              <NavLink className="footerNav" to="/" activeClassName="selected" exact={true}>
                Home
                </NavLink>

                <NavLink className="footerNav" to="/" activeClassName="selected" exact={true}>
                Home
                </NavLink>

                <NavLink className="footerNav" to="/" activeClassName="selected" exact={true}>
                Home
                </NavLink>

                <NavLink className="footerNav" to="/" activeClassName="selected" exact={true}>
                Home
                </NavLink>
              </div>

              
        </div>
        <div className="FooterBlue">leorem lorem lorem ;D</div>
        </>
    );
}

export default Footer;

import React from "react";
import PrimaryButton from "../buttons/PrimaryButton/PrimaryButton";
import "./Footer.styles.scss";

const Footer: React.FC = () => {
  return (
    <div>
      <div className="contact-container">
        <div className="social-container">
          <div className="social">
            <h3>FOLLOW US OUT THERE</h3>
            <div className="icons">
              <a
                href="https://www.instagram.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-instagram fa-2x" />
              </a>
              <a
                href="https://www.facebook.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-facebook-square fa-2x" />
              </a>
            </div>
          </div>
        </div>

        <div className="newsletter-container">
          <div className="newsletter">
            <h3>NEWSLETTER</h3>
            <form>
              <input type="email" placeholder="Email" required />
              <PrimaryButton text={"SUBMIT"} />
            </form>
          </div>
        </div>
        <div className="rights">
          © 2020. All rights reserved by Divlje Pragnje
        </div>
      </div>
    </div>
  );
};

export default Footer;

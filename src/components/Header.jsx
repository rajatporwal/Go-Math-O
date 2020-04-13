import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <footer className="footer">
      <ul className="nav">
        <li className="nav__item">
          <Link to="/home" className="nav__link">
            Home
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/support" className="nav__link">
            Support
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/terms_of_service" className="nav__link">
            Terms of Service
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/privacy_policy" className="nav__link">
            Privacy Policy
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/request_a_feature" className="nav__link">
            Request a Feature
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/suggestion" className="nav__link">
            Suggestion or Feedback
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Header;

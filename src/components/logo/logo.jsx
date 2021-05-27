import React from "react";
import PropTypes from "prop-types";
import LinkToRoot from "../link-to-root/link-to-root";

const Logo = (props) => {
  const {logo, className} = props;

  const logoImage = (
    <img className="logo__image" src={logo} alt="Логотип Guitar Shop" width="67" height="70"/>
  );

  return (
    <>
      <LinkToRoot className={`${className} logo`}>
        {logoImage}
      </LinkToRoot>
    </>
  );
};

Logo.propTypes = {
  logo: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Logo;

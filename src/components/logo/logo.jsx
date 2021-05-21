import React from "react";
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

export default Logo;

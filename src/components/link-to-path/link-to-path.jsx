import React from "react";
import PropTypes from "prop-types";
import {Link, useLocation} from "react-router-dom";

const LinkToPath = (props) => {
  const {children, className, path} = props;
  const {pathname} = useLocation();

  const hasHref = pathname !== path;

  return (
    <>
      {hasHref
        ? (
          <Link to={path} className={className}>
            {children}
          </Link>
        )
        : (
          <a className={className}>
            {children}
          </a>
        )
      }
    </>
  );
};

LinkToPath.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element), PropTypes.string]),
  className: PropTypes.string,
  path: PropTypes.string.isRequired,
};

export default LinkToPath;

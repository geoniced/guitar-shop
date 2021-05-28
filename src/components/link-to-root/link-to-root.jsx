import React from "react";
import PropTypes from "prop-types";
import {AppRoute} from "../../const";
import LinkToPath from "../link-to-path/link-to-path";

const LinkToRoot = (props) => {
  const {children, className} = props;
  return (
    <LinkToPath
      path={AppRoute.ROOT}
      className={className}
    >
      {children}
    </LinkToPath>
  );
};

LinkToRoot.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element), PropTypes.string]),
  className: PropTypes.string,
};

export default LinkToRoot;

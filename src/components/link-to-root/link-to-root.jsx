import React from "react";
import {Link, useLocation} from "react-router-dom";
import {AppRoute} from "../../const";

const LinkToRoot = (props) => {
  const {children, className} = props;
  const {pathname} = useLocation();

  const hasHref = pathname !== AppRoute.ROOT;

  return (
    <>
      {hasHref
        ? (
          <Link to={AppRoute.ROOT} className={className}>
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

export default LinkToRoot;

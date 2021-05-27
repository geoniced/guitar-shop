import React from "react";
import PropTypes from "prop-types";
import {ReactComponent as IconCross} from "../../assets/img/icon-cross.svg";

const ClosePopupButton = (props) => {
  const {onClick} = props;

  return (
    <a
      onClick={onClick}
      className="basic-popup__close-button"
      href="#"
    >
      <IconCross className="basic-popup__close-icon" />
      <span className="visually-hidden">Закрыть окно</span>
    </a>
  );
};

ClosePopupButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ClosePopupButton;

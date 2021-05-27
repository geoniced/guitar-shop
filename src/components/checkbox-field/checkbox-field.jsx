import React from "react";
import PropTypes from "prop-types";
import {ReactComponent as IconCheckbox} from "../../assets/img/icon-checkbox-box.svg";

const CheckboxField = (props) => {
  const {
    title,
    name,
    onChange,
    checked,
    dataValue,
    disabled,
  } = props;

  return (
    <>
      <input
        className="guitar-filters__checkbox visually-hidden"
        type="checkbox"
        data-value={dataValue}
        name={name}
        id={name}
        onChange={onChange}
        checked={checked}
        disabled={disabled}
      />
      <label htmlFor={name} className="guitar-filters__checkbox-label">
        <IconCheckbox className="guitar-filters__checkbox-icon" />
        {title}
      </label>
    </>
  );
};

CheckboxField.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  dataValue: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default CheckboxField;

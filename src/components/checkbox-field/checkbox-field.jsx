import React from "react";
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

export default CheckboxField;

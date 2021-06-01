import React, {useState} from "react";
import PropTypes from "prop-types";

const NumericField = (props) => {
  const {
    name,
    className,
    onChange,
    onBlur,
    value,
    convertCallback,
    placeholder,
  } = props;

  const [isEditing, setIsEditing] = useState(false);

  const toggleEditable = () => {
    setIsEditing((prevState) => !prevState);
  };

  const onNumericInputBlur = (evt) => {
    toggleEditable();

    onBlur(evt);
  };

  return (
    <>
      {isEditing ? (
        <input
          className={className}
          type="number"
          name={name}
          id={name}
          onChange={onChange}
          onBlur={onNumericInputBlur}
          value={value}
        />
      ) : (
        <input
          className={className}
          type="text"
          name={name}
          id={name}
          onFocus={toggleEditable}
          value={value ? convertCallback(value) : convertCallback(placeholder)}
          placeholder={placeholder}
          readOnly
        />
      )}
    </>
  );
};

NumericField.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  convertCallback: PropTypes.func.isRequired,
  placeholder: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default NumericField;

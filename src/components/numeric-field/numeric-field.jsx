import React, {useState} from "react";
import PropTypes from "prop-types";

const NumericField = (props) => {
  const {
    name,
    onChange,
    value,
    convertCallback,
  } = props;

  const [isEditing, setIsEditing] = useState(false);

  const toggleEditable = () => {
    setIsEditing((prevState) => !prevState);
  };

  return (
    <>
      {isEditing ? (
        <input
          className="guitar-filters__numeric-input"
          type="number"
          name={name}
          id={name}
          onChange={onChange}
          onBlur={toggleEditable}
          value={value}
        />
      ) : (
        <input
          className="guitar-filters__numeric-input"
          type="text"
          name={name}
          id={name}
          onFocus={toggleEditable}
          value={convertCallback(value)}
          readOnly
        />
      )}
    </>
  );
};

NumericField.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  convertCallback: PropTypes.func.isRequired,
};

export default NumericField;

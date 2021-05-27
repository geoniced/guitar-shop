import React from "react";
import {PROMOCODE_IS_NOT_AVAILABLE_MESSAGE} from "../../const";

const PromoCodeErrorBlock = () => {
  return (
    <p className="cart-checkout__error-message">
      {PROMOCODE_IS_NOT_AVAILABLE_MESSAGE}
    </p>
  );
};

export default PromoCodeErrorBlock;

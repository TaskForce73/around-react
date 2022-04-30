import React from "react";
import PopupWithForm from "./PopupWithForm";

function ConfirmPopup() {

  return (
    <PopupWithForm
      name={`confirmForm`}
      title={`Are you shure?`}
      buttonText={`Yes`}

    />
  );
}

export default ConfirmPopup;

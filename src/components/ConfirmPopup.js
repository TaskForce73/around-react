import PopupWithForm from "./PopupWithForm";

function ConfirmPopup() {
  return <PopupWithForm name={`confirmForm`} title={`Are you shure?`} button={`Yes`} />;
}

export default ConfirmPopup;

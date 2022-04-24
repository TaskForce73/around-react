import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
  return (
    <PopupWithForm
      name={`editForm`}
      title={`Edit profile`}
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <input
        className="popup__input popup__input-name"
        id="name-input"
        type="text"
        name="name"
        placeholder="Name"
        minLength="2"
        maxLength="40"
        required
      />
      <span className="popup__error name-input-error"></span>
      <input
        className="popup__input popup__input-about"
        id="about-input"
        type="text"
        name="about"
        placeholder="About"
        minLength="2"
        maxLength="200"
        required
      />
      <span className="popup__error about-input-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;

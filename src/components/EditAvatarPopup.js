import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  return (
    <PopupWithForm
      name={`avatarForm`}
      title={`Change profile picture`}
      buttonText={`Save`}
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <input
        className="popup__input popup__input-avatar"
        id="avatar-input"
        type="url"
        name="avatar"
        placeholder="url"
        required
      />
      <span className="popup__error avatar-input-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;

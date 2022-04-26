import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  return (
    <PopupWithForm
      name={`placeForm`}
      title={`New place`}
      buttonText={`Save`}
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <input
        className="popup__input popup__input-description"
        id="description-input"
        type="text"
        name="description"
        placeholder="Title"
        minLength="1"
        maxLength="30"
        required
      />
      <span className="popup__error description-input-error"></span>
      <input
        className="popup__input popup__input-link"
        id="link-input"
        type="url"
        name="link"
        placeholder="Image URL"
        required
      />
      <span className="popup__error link-input-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;

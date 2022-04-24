function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }
  return (
    <>
      <li className="element">
        <div
          style={{ backgroundImage: `url(${props.card.link})` }}
          aria-label={`Photo of ${props.card.name}`}
          onClick={handleClick}
          className="element__picture"
        />
        <button
          aria-label="delete"
          type="button"
          className="element__bin"
        ></button>
        <div className="element__title">
          <h2 className="element__header">{props.card.name}</h2>
          <div className="element__like-container">
            <button
              aria-label="like"
              type="button"
              className="element__button"
            ></button>
            <span className="element__button-counter">
              {props.card.likes.length}
            </span>
          </div>
        </div>
      </li>
    </>
  );
}

export default Card;

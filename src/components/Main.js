import React, { useEffect } from "react";
import api from "../utils/api";
import Card from "./Card";
function Main(props) {
  const [userName, setUserName] = React.useState([]);
  const [userDescription, setUserDescription] = React.useState([]);
  const [userAvatar, setUserAvatar] = React.useState([]);
  const [cards, setCards] = React.useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((res) => {
        console.log(`Error! + ${res.statusText}`);
      });
  }, []);

  useEffect(() => {
    api
      .getInitialCards()
      .then((userData) => {
        setCards(userData);
      })
      .catch((res) => {
        console.log(`Error! + ${res.statusText}`);
      });
  }, []);

  return (
    <main className="page">
      <section className="profile">
        <div onClick={props.onEditAvatarClick} className="profile__overlay"></div>
        <div
          style={{ backgroundImage: `url(${userAvatar})` }}
          aria-label="Avatar"
          className="profile__image"
        ></div>
        <div className="profile__info">
          <h1 className="profile__author">{userName}</h1>
          <button
            onClick={props.onEditProfileClick}
            aria-label="edit"
            type="button"
            className="profile__edit"
          ></button>
          <p className="profile__text">{userDescription}</p>
        </div>
        <button
          onClick={props.onAddPlaceClick}
          aria-label="add"
          type="button"
          className="profile__plus submit-button"
        ></button>
      </section>

      <section className="elements">
        <ul className="elements__list">
          {cards.map((data) => (
            <Card key={data._id} card={data}
            onCardClick={props.onCardClick}/>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;

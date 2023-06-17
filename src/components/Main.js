import React, {useEffect} from "react"; 
import Card from './Card';
import api from '../utils/api';

function Main (props) {
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);
    useEffect(() => {
        Promise.all([api.getUserInfo(), api.getInitialCards()])
        .then(([user, card]) => {
          setUserName(user.name);
          setUserDescription(user.about);
          setUserAvatar(user.avatar);
          setCards(card);
        })
        .catch((err) => alert(err))
      }, [])
    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar" onClick={props.onEditAvatar}>
                    <img className="profile__image" src={userAvatar} alt={userName}/>
                </div>
                <div className="profile__info">
                    <div className="profile__info-container">
                        <h1 className="profile__title">{userName}</h1>
                        <button className="profile__button-edit" title="Редактировать профиль" type="button" onClick={props.onEditProfile}></button>
                    </div>
                    <p className="profile__subtitle">{userDescription}</p>
                </div>
                <button className="profile__button-add" type="button" onClick={props.onAddPlace}></button>
            </section>

            <section className="elements">
                <ul className="elements__list">
                    {cards.map((card) => (
                        <Card
                            key={card._id}
                            card={card}
                            onCardClick={props.onCardClick}
                        />
                    ))}
                </ul>
            </section>
        </main>
    )
}

export default Main;
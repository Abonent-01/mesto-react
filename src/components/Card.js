import React from "react";

function Card({card, onCardClick}) {
  function handleCardClick() {
    onCardClick(card)
  }

  return(

    <li className="elements__item">
        <img className="elements__image" src={card.link} alt={card.name} onClick={handleCardClick}/>
        <div className="elements__card-container">
            <h2 className="elements__title">{card.name}</h2>
            <div>
                <button className="elements__like" type="button"></button>
                <p className="elements__like-counter">{card.likes.length}</p>
            </div>  
        </div>
        <button className="elements__delete" type="button" title="Удалить карточку"></button>
    </li>

  )
}

export default Card;
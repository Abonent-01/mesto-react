import React from "react";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card)
  }

  return(

    <li className="elements__item">
        <img className="elements__image" src={props.link} alt={props.name} onClick={handleClick}/>
        <div className="elements__card-container">
            <h2 className="elements__title">{props.name}</h2>
            <div>
                <button className="elements__like" type="button"></button>
                <p className="elements__like-counter">{props.likes}</p>
            </div>  
        </div>
        <button className="elements__delete" type="button" title="Удалить карточку"></button>
    </li>

  )
}

export default Card;
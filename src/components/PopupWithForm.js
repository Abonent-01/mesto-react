function PopupWithForm(props) {
    return (
      <div className={`popup popup_type_${props.name} ${props.isOpen ? `popup_opened`: ""}`}>
        <div className="popup__container">
          <form className="popup__form" name={props.form}>
            <h3 className="popup__title">{props.title}</h3>
            {props.children}
            <button className="popup__button-submit" type="submit" title="Сохранить">{props.buttonText}</button>
          </form>
          <button className="popup__button-close" type="button" title="Закрыть" onClick={props.onClose}/>
        </div>
      </div>
    )
  }
  
  export default PopupWithForm;
import React from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
    const [selectedCard, setSelectedCard] = React.useState(null)

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

    function handleCardClick(card) {
        setSelectedCard(card);
    }

    function closeAllPopups() {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setSelectedCard(null);
    }

  return (
    <div className="page">
      <Header />

      <Main 
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />



      <Footer />

      <PopupWithForm 
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        name={'edit'}
        title={'Редактировать профиль'}
        form={'popup-form'}
        buttonText={'Сохранить'}>
            <label className="popup__field">
                <input className="popup__item popup__item_type_name" id="input-name" name="name" type="text" placeholder="Имя" minLength="2"maxLength="40" required/>
                <span className="popup__error" id="input-name-error"></span>
            </label>
            <label className="popup__field">
                <input className="popup__item popup__item_type_about" id="input-job" name="about" type="text" placeholder="О себе" minLength="2"maxLength="200" required/>
                <span className="popup__error" id="input-job-error"></span>
            </label>
      </PopupWithForm>

      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        name={'avatar-input-link'}
        form={'popup-form'}
        title={'Обновить аватар'}
        buttonText={'Сохранить'}
        onClose={closeAllPopups}>
        <label className="popup__field">
            <input className="popup__item popup__item_type_link" id="avatar-input-link" name="link" type="url" placeholder="Ссылка на картинку" required/>
            <span className="popup__error" id="avatar-input-link-error"></span>
        </label>
      </PopupWithForm>


      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        name={'add'}
        title={'Новое место'}
        buttonText={'Создать'}>
        <label className="popup__field">
            <input className="popup__item popup__item_type_title" id="input-title" name="title" type="text" placeholder="Название" minLength="2"maxLength="30" required/>
            <span className="popup__error" id="input-title-error"></span>
        </label>
        <label className="popup__field">
            <input className="popup__item popup__item_type_link" id="input-link" name="link" type="url" placeholder="Ссылка на картинку" required/>
            <span className="popup__error" id="input-link-error"></span>
        </label>
      </PopupWithForm>

        <ImagePopup
            card={selectedCard}
            onClose={closeAllPopups}
        />
        


    </div>
  );
}

export default App;

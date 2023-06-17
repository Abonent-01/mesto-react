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
        buttonText={'Сохранить'}
        children={(
            <>
                <label className="popup__field">
                    <input className="popup__item popup__item_type_name" id="input-name" name="name" type="text" placeholder="Имя" minLength="2"maxLength="40" required/>
                    <span className="popup__error" id="input-name-error"></span>
                </label>
                <label className="popup__field">
                    <input className="popup__item popup__item_type_about" id="input-job" name="about" type="text" placeholder="О себе" minLength="2"maxLength="200" required/>
                    <span className="popup__error" id="input-job-error"></span>
                </label>
            </>
        )}
      />

      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        name={'avatar-input-link'}
        form={'popup-form'}
        title={'Обновить аватар'}
        buttonText={'Сохранить'}
        onClose={closeAllPopups}
        children={(
            <>
              <input class="popup__item popup__item_type_link" id="avatar-input-link" name="link" value="" type="url" placeholder="Ссылка на картинку" required/>
              <span class="popup__error" id="avatar-input-link-error"></span>
            </>
        )}
      />


      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        name={'add'}
        title={'Новое место'}
        buttonText={'Создать'}
        children={(
            <>
                <label className="popup__field">
                    <input className="popup__item popup__item_type_title" id="input-title" name="title" type="text" placeholder="Название" minLength="2"maxLength="30" required/>
                    <span className="popup__error" id="input-title-error"></span>
                </label>
                <label className="popup__field">
                    <input className="popup__item popup__item_type_link" id="input-link" name="link" type="url" placeholder="Ссылка на картинку" required/>
                    <span className="popup__error" id="input-link-error"></span>
                </label>
            </>
        )}
      />

        <ImagePopup
            card={selectedCard}
            onClose={closeAllPopups}
        />
        
        <div className="popup popup_type_profile">
            <div className="popup__container">
                <button className="popup__button-close popup__button-close_type_profile" title="Закрыть" type="button"></button>
                <form className="popup__form popup__form_type_profile" name="popup-form" noValidate>
                    <h3 className="popup__title">Редактировать профиль</h3>
                    <label className="popup__field">
                        <input className="popup__item popup__item_type_name" id="input-name" name="name" type="text" placeholder="Имя" minLength="2"maxLength="40" required/>
                        <span className="popup__error" id="input-name-error"></span>
                    </label>
                    <label className="popup__field">
                        <input className="popup__item popup__item_type_about" id="input-job" name="about" type="text" placeholder="О себе" minLength="2"maxLength="200" required/>
                        <span className="popup__error" id="input-job-error"></span>
                    </label>
                    <button className="popup__button-submit" name="button-edit" type="submit">Сохранить</button>
                </form>
            </div>
        </div>


        <div className="popup popup_type_card">
            <div className="popup__container">
                <button className="popup__button-close popup__button-close_type_card" title="Закрыть" type="button"></button>
                <form className="popup__form popup__form_type_card" name="popup-form" noValidate>
                    <h3 className="popup__title">Новое место</h3>
                    <label className="popup__field">
                        <input className="popup__item popup__item_type_title" id="input-title" name="title" type="text" placeholder="Название" minLength="2"maxLength="30" required/>
                        <span className="popup__error" id="input-title-error"></span>
                    </label>
                    <label className="popup__field">
                        <input className="popup__item popup__item_type_link" id="input-link" name="link" type="url" placeholder="Ссылка на картинку" required/>
                        <span className="popup__error" id="input-link-error"></span>
                    </label>
                    <button className="popup__button-submit popup__button-submit_type_card" name="button-add" type="submit">Создать</button>
                </form>
            </div>
        </div>


        <div className="popup popup_type_image">
            <div className="popup__container popup__container_type_image">
                <button className="popup__button-close popup__button-close_type_image" title="Закрыть" type="button"></button>
                <img className="popup__img" src="#" alt="Фотография места"/>
                <h2 className="popup__title-image"></h2>
            </div>
        </div>

        <div className="popup popup_type_delete">
            <div className="popup__container">
                <button className="popup__button-close popup__button-close_type_delete" title="Закрыть" type="button"></button>
                <form className="popup__form popup__form_type_delete" name="popup-form" noValidate>
                    <h3 className="popup__title">Вы уверены?</h3>
                    <button className="popup__button-submit" name="button-delete" type="submit">Да</button>
                </form>
            </div>
        </div>


        <div className="popup popup_type_avatar">
            <div className="popup__container">
                <button className="popup__button-close popup__button-close_type_avatar" title="Закрыть" type="button"></button>
                <form className="popup__form popup__form_type_avatar" name="popup-form" noValidate>
                    <h3 className="popup__title">Обновить аватар</h3>
                    <label className="popup__field">
                        <input className="popup__item popup__item_type_link" id="avatar-input-link" name="link" type="url" placeholder="Ссылка на картинку" required/>
                        <span className="popup__error" id="avatar-input-link-error"></span>
                    </label>
                    <button className="popup__button-submit popup__button-submit_type_avatar" name="button-add" type="submit">Сохранить</button>
                </form>
            </div>
        </div>


        <template className="template-card" id="elements-add"> 
            <li className="elements__item">
                <img className="elements__image" src="#" alt="Фотография места"/>
                <div className="elements__card-container">
                    <h2 className="elements__title"></h2>
                    <div>
                        <button className="elements__like" type="button"></button>
                        <p className="elements__like-counter"></p>
                    </div>  
                </div>
                <button className="elements__delete" type="button" title="Удалить карточку"></button>
            </li>
        </template>
    </div>
  );
}

export default App;

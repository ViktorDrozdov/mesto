// function popupClose(evt) {
//   const isOverlay = evt.target.classList.contains('popup');
//   const isCloseBtn = evt.target.classList.contains('popup__close-button');
//   if(isOverlay || isCloseBtn){
//     popup.classList.remove('popup_opened');
//   }
// }
// popup.addEventListener('click', popupClose);

const editBtn = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseBtn = document.querySelector('.popup__close-button');

function openPopup() {
  popup.classList.add('popup_opened');
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

editBtn.addEventListener('click', openPopup);
popupCloseBtn.addEventListener('click', closePopup);

const formElement = document.querySelector('')



const profileName = document.querySelector('.profile__name');
profileName.textContent = 'jfoaijosdijf';

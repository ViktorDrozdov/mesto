const editBtn = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseBtn = document.querySelector('.popup__close-button');
const formElement = document.querySelector('.popup__form');
const nameInput = formElement.querySelector('#name-input');
const jobInput = formElement.querySelector('#job-input')
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');


// Открытие/закрытие PopUp
function openPopup() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  popup.classList.add('popup_opened');
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

editBtn.addEventListener('click', openPopup);
popupCloseBtn.addEventListener('click', closePopup);

// Отправка формы
function submitHandleForm (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup();
}

formElement.addEventListener('submit', submitHandleForm);

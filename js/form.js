 'use strict'

 const contactForm = document.querySelector("#reg-form");
//  const contactFormWrapper = document.querySelector(".popup__wrapper");
//  const contactFormCloseBtn = document.querySelector(".btn__close-popup");


// Закрытие при клике вне области попапа
contactFormWrapper.addEventListener('click', (event) => {
  if (event.target === contactFormWrapper) {
    contactFormWrapper.style.display = 'none';
  }
});

contactFormCloseBtn.onclick = function() {
  contactFormWrapper.style.display = 'none';
}

    // Form in Contacts
    contactForm.addEventListener("submit", function (event) {

      event.preventDefault();
      var th = this;
      var formData = new FormData(th);
      var xhr = new XMLHttpRequest();
      xhr.open("POST", "mail.php");

      xhr.onload = function () {
        if (xhr.status === 200) {

          contactFormWrapper.style.display = "block";

          setTimeout(function () {
            th.reset();
          }, 500);
        }
      };

      xhr.send(formData);

});





//  const successMessage = document.querySelector(".alert__success");
//  const formAlertField  = document.querySelector('.contact-form__alert');
//  const formAlertFillInputs  = document.querySelector('.alert__fill-all-fields');
//  const formWrongEmail  = document.querySelector('.alert__wrong-email');

  // // Функция для валидации email по стандартному формату
  // function isValidEmail(email) {
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   return emailRegex.test(email);
  // }

  // Функция для валидации формы
  // function validateForm(event) {
  //   event.preventDefault();

  //   const form = document.getElementById('contact-form');
  //   const nameInput = form.elements['name'];
  //   const emailInput = form.elements['email'];
  //   const questionInput = form.elements['question'];

  //   formAlertField.style.backgroundColor = "#09d710";
  //   successMessage.style.display = "none";

  //   if (!nameInput.value || !emailInput.value || !questionInput.value) {
  //     formAlertField.classList.add('contact-form__alert_opened');
  //     formWrongEmail.style.display = "none";
  //     formAlertFillInputs.style.display = "block";
  //     return false;
  //   }

  //   if (!isValidEmail(emailInput.value)) {
  //     formAlertField.classList.add('contact-form__alert_opened');
  //     formAlertFillInputs.style.display = "none";
  //     formWrongEmail.style.display = "block";
  //     return false;
  //   }

  //   // Если все поля прошли валидацию, можно отправить форму
  //   // form.submit();

  //   formAlertField.classList.remove('contact-form__alert_opened');
  //   formWrongEmail.style.display = "none";
  //   formAlertFillInputs.style.display = "none";

  //   return true;
  // }
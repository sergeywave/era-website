"use strict";

const body = document.body;
const header = document.querySelector('.header')
const menuBurger = document.querySelector('.header__burger')
const links = document.querySelectorAll('.header-nav ul li a');

// Mobile menu
if (menuBurger) {
  menuBurger.onclick = function () {
    // body.classList.toggle("no-scroll");
    menuBurger.classList.toggle("open");
    header.classList.toggle("mobile-menu-opened");
    setTimeout(() => {
      header.classList.toggle("menu-show");
    }, 100);
  };
};


links.forEach(link => {
  link.addEventListener('click', function() {
    body.classList.remove('no-scroll');
    menuBurger.classList.remove('open');
    header.classList.remove('mobile-menu-opened');
    setTimeout(() => {
      header.classList.remove('menu-show');
    }, 100);
  });
});


window.addEventListener('scroll', function() {
  const wrapper = document.querySelector('.wrapper');
  if (window.scrollY > 0) {
    wrapper.classList.add('header-fixed');
  } else {
    wrapper.classList.remove('header-fixed');
  }
});


// Accordion

document.addEventListener("DOMContentLoaded", function() {
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach(header => {
    header.addEventListener("click", function() {
      const accordionItem = this.parentElement;
      const accordionContent = accordionItem.querySelector(".accordion-content");

      // Закрытие других открытых элементов
      document.querySelectorAll(".accordion-item.active").forEach(item => {
        if (item !== accordionItem) {
          item.classList.remove("active");
          item.querySelector(".accordion-content").style.maxHeight = null;
        }
      });

      // Переключение текущего элемента
      accordionItem.classList.toggle("active");

      if (accordionItem.classList.contains("active")) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      } else {
        accordionContent.style.maxHeight = null;
      }
    });
  });
});


// Choose lang

document.addEventListener('DOMContentLoaded', function() {
  const langButton = document.querySelector('.header__choose-lang');
  const langList = document.querySelector('.choose-lang-list');

  langButton.addEventListener('click', function(event) {
    event.stopPropagation();
    const isActive = langList.classList.toggle('active');
    langButton.classList.toggle('active', isActive);
  });

  document.addEventListener('click', function(event) {
    if (!langButton.contains(event.target)) {
      langList.classList.remove('active');
      langButton.classList.remove('active');
    }
  });
});


// Mobile choose lang

document.addEventListener('DOMContentLoaded', function() {
  const langToggle = document.querySelector('.mobile-choose-lang__current');
  const langList = document.querySelector('.mobile-choose-lang__list');

  langToggle.addEventListener('click', function(event) {
      event.stopPropagation();
      langToggle.classList.toggle('open');
      langList.classList.toggle('open');
  });

  document.addEventListener('click', function() {
      if (langList.classList.contains('open')) {
          langList.classList.remove('open');
          langToggle.classList.remove('open');
      }
  });
});




document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.anim-numbers');

  const startCounting = (element, endValue) => {
    let startValue = 0;
    let duration = 1200; // Продолжительность анимации в миллисекундах
    let startTime = null;

    const formatNumber = (number) => {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    };

    const animateCounter = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = currentTime - startTime;
      const currentValue = Math.min(Math.ceil((progress / duration) * endValue), endValue);
      element.textContent = formatNumber(currentValue);

      if (progress < duration) {
        requestAnimationFrame(animateCounter);
      }
    };

    requestAnimationFrame(animateCounter);
  };

  const startCountingWhenVisible = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const endValues = [35, 5000, 20000]; // Задайте конечные значения для каждого счетчика
        counters.forEach((counter, index) => {
          startCounting(counter, endValues[index]);
        });
        observer.disconnect();
      }
    });
  };

  const observer = new IntersectionObserver(startCountingWhenVisible, {
    threshold: 0.5 // Значение видимости 50%
  });

  const section = document.querySelector('.cash-variety');
  observer.observe(section);
});
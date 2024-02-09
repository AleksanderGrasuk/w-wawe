// header
let main = document.querySelector('main');
let search = document.querySelector('.header__search');
let headerSVG = document.querySelector('.header__nav-link-svg');
let menu = document.querySelector('.header__nav-list-top')


headerSVG.addEventListener('click',
  function () {

    headerSVG.classList.toggle('header__nav-link-svg--active');

    menu.classList.toggle('header__nav-list-top--active');

    search.classList.toggle('header__search--active');

  })


main.addEventListener('click',
  function () {

    headerSVG.classList.remove('header__nav-link-svg--active');

    menu.classList.remove('header__nav-list-top--active');

    search.classList.remove('header__search--active');

  })

let burger = document.querySelector('.header__burger');
let headTop = document.querySelector('.header__top');
let menuTop = document.querySelector('.header__nav-top');
let menuBot = document.querySelector('.header__nav-bot');
let menuLinks = menuTop.querySelectorAll('.header__nav-link');
let menuBotLinks = menuBot.querySelectorAll('.header__nav-bot-link');


burger.addEventListener('click',

  function () {
    burger.classList.toggle('header__burger--active');

    headTop.classList.toggle('header__top--active');

    menuTop.classList.toggle('header__nav-top--active');
    menuBot.classList.toggle('header__nav-bot--active');

    document.body.classList.toggle('stop-scroll');
  })

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    burger.classList.remove('header__burger--active');

    headTop.classList.remove('header__top--active');

    menuTop.classList.remove('header__nav-top--active');
    menuBot.classList.remove('header__nav-bot--active');

    document.body.classList.remove('stop-scroll')
  })

})
menuBotLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    burger.classList.remove('header__burger--active');

    headTop.classList.remove('header__top--active');

    menuTop.classList.remove('header__nav-top--active');
    menuBot.classList.remove('header__nav-bot--active');

    document.body.classList.remove('stop-scroll')
  })

})

let playBox = document.querySelector('.header__play-box');
let btnPlayMore = document.querySelector('.btn__play-more');
let btnPlay = document.querySelectorAll('.btn__play');
let headBot = document.querySelector('.header__bot');


btnPlayMore.addEventListener('click',
  function () {

    headBot.classList.toggle('header__bot--active');

    btnPlay.forEach((el) => {
      el.classList.toggle("btn__play--active");
    });

    playBox.classList.toggle('header__play-box--active');

    btnPlayMore.classList.toggle('btn__play-more--active');



  })

// podcasts

let podcastsItem = document.querySelectorAll('.podcasts__item');
let podcastsMore = document.querySelector('.btn__podcasts-more');

podcastsMore.addEventListener('click', function () {

  podcastsItem.forEach((el) => {
    el.classList.add("item__hidden--active");
  });

})

// broadcast

// select

const element = document.querySelector('.broadcast__select');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: '',
  shouldSort: false
});

// accordion


$(".accordion").accordion({
  heightStyle: "content",
  active: 0
});


document.querySelectorAll('.guests__opened-item-name').forEach(function (guestsName) {
  guestsName.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.guests__opened-item-name').forEach(function (guests) {
      guests.classList.remove('guests__opened-item-name--active')
    });
    e.currentTarget.classList.add('guests__opened-item-name--active');

    document.querySelectorAll('.guests__block-content').forEach(function (guestsName) {
      guestsName.classList.remove('guests__block-content--active')
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('guests__block-content--active');
  });
});

// slider

const container = document.querySelector(".container")
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 4,

  loop: true,
  speed: 300,
  spaceBetween: 30,

  breakpoints: {
    1300: {
      spaceBetween: 30,
      slidesPerView: 4
    },
    992: {
      spaceBetween: 30,
      slidesPerGroup: 1,
      slidesPerView: 2
    },
    768: {
      spaceBetween: 30,
      slidesPerGroup: 1,
      slidesPerView: 2
    },
    320: {
      spaceBetween: 38,
      slidesPerGroup: 1,
      slidesPerView: 2
    }
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


// validate

new JustValidate('.about__form', {
  colorWrong: '#D52B1E',
  rules: {
    name: {
      required: true,
      minLenght: 2,
      maxLenght: 30,
    },
    mail: {
      required: true,
      email: true
    }
  },
  messages: {
    name: "Ошибка",
    mail: "Ошибка",
  },
  submitHandler: function (form) {
    let formData = new FormData(form);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Отправлено');
          document.querySelectorAll('.about__form-message').forEach(function (el) {
            el.classList.add('about__form-message--active');
          })
          setTimeout(function () {
            document.querySelectorAll('.about__form-message').forEach(function (el) {
              el.classList.remove('about__form-message--active');
            });
          }, 2000);
        }
      }
    }

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);

    form.reset();
  }

});


// modal

let modal = document.querySelector('.modal');
let modalExit = document.querySelector('.btn__modal-exit');
let headLogin = document.querySelector('.header__btn-log-in');
let wrapper = document.querySelector('.wrapper');

headLogin.addEventListener('click',
  function () {

    modal.classList.add('modal--active');

    wrapper.classList.add('stop-scroll');

    document.body.classList.toggle('stop-scroll');

  })

modalExit.addEventListener('click',
  function () {

    modal.classList.remove('modal--active');

    wrapper.classList.remove('stop-scroll');

    document.body.classList.remove('stop-scroll');

  })

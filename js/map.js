'use strict';
var KEYENTER = 13;
var KEYESC = 27;
var dialogContentShow = document.querySelector('.dialog');
var dialogClose = document.querySelector('.dialog__close');


// сгенерить случайное число
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// взять случайный объект из массива
function randItem(arr) {
  return arr[getRandomNumber(0, arr.length)];
}

// рандомные удобства
function getRandomFeatures() {
  var features = [];
  var allFeatures = [
    'wifi',
    'dishwasher',
    'parking',
    'washer',
    'elevator',
    'conditioner',
  ];
  var featureCount = getRandomNumber(0, allFeatures.length);

  for (var i = 0; i < featureCount; i++) {
    var randomFeature = allFeatures.splice(getRandomNumber(0, allFeatures.length), 1)[0];
    features.push(randomFeature);
  }

  return features;
}

// сгенерить рандомный адрес
function getNewAddr() {
  var x = getRandomNumber(300, 900);
  var y = getRandomNumber(100, 500);
  return {'x': x, 'y': y};
}

function createAd(index) {
  // сгенерить объект
  var allTitle = [
    'Большая уютная квартира',
    'Маленькая неуютная квартира',
    'Огромный прекрасный дворец',
    'Маленький ужасный дворец',
    'Красивый гостевой домик',
    'Некрасивый негостеприимный домик',
    'Уютное бунгало далеко от моря',
    'Неуютное бунгало по колено в воде',
  ];
  var addr = getNewAddr();
  var ad = {
    'author': {
      'avatar': 'img/avatars/user0' + (index + 1) + '.png',
    },
    'offer': {
      'title': allTitle[index],
      'price': getRandomNumber(1000, 1000000),
      'address': addr.x + ', ' + addr.y,
      'type': randItem(['flat', 'house', 'bungalo']),
      'rooms': getRandomNumber(1, 5),
      'guests': getRandomNumber(1, 7),
      'checkin': randItem(['12:00', '13:00', '14:00']),
      'checkout': randItem(['12:00', '13:00', '14:00']),
      'features': getRandomFeatures(),
      'description': '',
      'photos': [],
    },
    'location': {
      'x': addr.x,
      'y': addr.y
    },
  };
  return ad;
}

// создать массив объектов
var ads = [];
for (var i = 0; i < 8; i++) {
  var ad = createAd(i);
  ads.push(ad);
}

// заполнение шаблона
function getTemplate(n) {

  var lodgeTemplate = document.querySelector('#lodge-template');
  var lodge = lodgeTemplate.content.cloneNode(true);
  lodge.querySelector('.lodge__title').textContent = n.offer.title;
  lodge.querySelector('.lodge__address').textContent = n.offer.address;
  lodge.querySelector('.lodge__price').innerHTML = n.offer.price + ' &#x20bd;/ночь';
  lodge.querySelector('.lodge__type').textContent = n.offer.type;
  lodge.querySelector('.lodge__rooms-and-guests').textContent = n.offer.guests + ' гостей в ' + n.offer.rooms + ' комнатах';
  lodge.querySelector('.lodge__checkin-time').textContent = 'Заезд после ' + n.offer.checkin + ', ' + 'выезд до ' + n.offer.checkout;

  var lodgeFeatures = lodge.querySelector('.lodge__features');
  for (var t = 0; t < n.offer.features.length; t++) {
    var spanIconFeauture = document.createElement('span');
    spanIconFeauture.classList.add('feature__image', 'feature__image--' + n.offer.features[t]);

    lodgeFeatures.appendChild(spanIconFeauture);
  }
  lodge.querySelector('.lodge__description').textContent = n.offer.description;
  lodge.querySelector('.lodge__address').textContent = n.offer.address;

  var dialogPanel = document.querySelector('.dialog__panel');
  dialogPanel.parentNode.replaceChild(lodge, dialogPanel);

  document.querySelector('.dialog__title > img').setAttribute('src', n.author.avatar);
  dialogContentShow.classList.remove('hidden');
  dialogClose.setAttribute('tabindex', 0);
}
getTemplate(ads[0]);

var removeActivPin = function () {
  var activeElement = document.querySelector('.pin--active');
  if (activeElement) {
    activeElement.classList.remove('pin--active');
  }
};

var clickPinHandler = function (evt) {
  dialogContentShow.setAttribute('display', 'block');

  removeActivPin();

  var clickedElement = evt.currentTarget;
  clickedElement.classList.add('pin--active');
  var index = clickedElement.getAttribute('data-index');
  getTemplate(ads[index]);
};

// нажатие enter
document.addEventListener('keydown', function (evt) {
  var target = evt.target;
  if (evt.keyCode === KEYENTER && target.classList.contains('pin')) {
    var index = target.dataset.index;
    removeActivPin();

    target.classList.add('pin--active');

    getTemplate(ads[index]);
  }
});

// нажатие esc на dialog
document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === KEYESC) {
    dialogContentShow.classList.add('hidden');

    removeActivPin();
  }
});

// закрыть объявление
dialogClose.addEventListener('click', function () {
  dialogContentShow.classList.add('hidden');
  removeActivPin();
});

// закрыть на крестике по enter
document.addEventListener('keydown', function (evt) {
  var target = evt.target;
  if (evt.keyCode === KEYENTER && target.classList.contains('dialog__close')) {
    dialogContentShow.classList.add('hidden');

    removeActivPin();
  }
});

// создать pin
var fragment = document.createDocumentFragment();
for (var y = 0; y < ads.length; y++) {
  var pin = document.createElement('div');
  pin.classList.add('pin');
  pin.style.left = ads[y].location.x - pin.offsetWidth / 2 + 'px';
  pin.style.top = ads[y].location.y - pin.offsetHeight / 2 + 'px';
  pin.setAttribute('data-index', y);
  pin.setAttribute('tabindex', 0);
  pin.innerHTML = '<img src="' + ads[y].author.avatar + '" class="rounded" width="40" height="40">';
  pin.addEventListener('click', clickPinHandler);

  fragment.appendChild(pin);
}

// создать pin на карте
var map = document.querySelector('.tokyo__pin-map');
map.appendChild(fragment);

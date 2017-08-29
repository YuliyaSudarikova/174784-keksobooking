'use strict';

// генерим случайное число
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
    var randomFeature = allFeatures.splice(getRandomNumber(0, allFeatures.length));
    features.push(randomFeature);
  }

  return features;
}

// генерим рандомный адрес
function getNewAddr() {
  var x = getRandomNumber(300, 900);
  var y = getRandomNumber(100, 500);
  return {'x': x, 'y': y};
}

// генерим неповторяющиеся заголовки
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

function createAd(index) {
  var addr = getNewAddr();
  var ad = {
    'author': {
      'avatar': 'img/avatar/user0' + (index + 1) + '.png',
    },
    'offer': {
      'title': allTitle[index],
      'price': getRandomNumber(1000, 1000000),
      'address': addr,
      'type': randItem(['flat', 'house', 'bungalo']),
      'rooms': getRandomNumber(1000, 1000000),
      'guests': getRandomNumber(1, 5),
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

var ads = [];
for (var i = 0; i < 8; i++) {
  var ad = createAd(i);
  ads.push(ad);
}

// создаем DOM-элементы
var fragment = document.createDocumentFragment();

for (var y = 0; y < ads.length; y++) {
  var pin = document.createElement('div');
  pin.classList.add = 'pin';
  pin.style.left = ads[i].addr - pin.offsetWidth / 2 + 'px';
  pin.style.top = ads[i].addr - pin.offsetHeight / 2 + 'px';
  pin.innerHTML = '<img src="img/avatars/user0' + ad.author.avatar + '.png" class="rounded" width="40" height="40">';
}

fragment.appendChild(pin);

// Добавление пинов в DOM
var pinAd = function (ad) {
  var map = document.querySelector('.tokyo__pin-map');
  var adLoc = document.createDocumentFragment();
  for (var i = 0; i < ad.length; i++) {
    adLoc.appendChild(pinAd);
  }

  return map.appendChild(ad);
};

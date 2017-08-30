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
    var randomFeature = allFeatures.splice(getRandomNumber(0, allFeatures.length), 1)[0];
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

function createAd(index) {
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

var ads = [];
for (var i = 0; i < 8; i++) {
  var ad = createAd(i);
  ads.push(ad);
}

// создаем DOM-элементы
var fragment = document.createDocumentFragment();

for (var y = 0; y < ads.length; y++) {
  var pin = document.createElement('div');
  pin.classList.add('pin');
  pin.style.left = ads[y].location.x - pin.offsetWidth / 2 + 'px';
  pin.style.top = ads[y].location.y - pin.offsetHeight / 2 + 'px';
  pin.innerHTML = '<img src="' + ads[y].author.avatar + '" class="rounded" width="40" height="40">';

  fragment.appendChild(pin);
}

var map = document.querySelector('.tokyo__pin-map');
map.appendChild(fragment);

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
  for (var i = 0; i < n.offer.features.length; i++) {
    var spanIconFeauture = document.createElement('span');
    spanIconFeauture.classList.add('feature__image', 'feature__image--' + n.offer.features[i]);

    lodgeFeatures.appendChild(spanIconFeauture);
  }
  lodge.querySelector('.lodge__description').textContent = n.offer.description;
  lodge.querySelector('.lodge__address').textContent = n.offer.address;

  var dialogPanel = document.querySelector('.dialog__panel');
  dialogPanel.parentNode.replaceChild(lodge, dialogPanel);

  document.querySelector('.dialog__title > img').setAttribute('src', n.author.avatar);
}
getTemplate(ads[0]);

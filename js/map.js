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
  pin.classList.add('pin');
  pin.style.left = ads[y].location.x - pin.offsetWidth / 2 + 'px';
  pin.style.top = ads[y].location.y - pin.offsetHeight / 2 + 'px';
  pin.innerHTML = '<img src="img/avatars/user0' + ads.length + '.png" class="rounded" width="40" height="40">';
}

fragment.appendChild(pin);

// Добавление пинов в DOM
var pinAd = function getPin(ad) {
  var map = document.querySelector('.tokyo__pin-map');
  var adLoc = document.createDocumentFragment();
  for (var v = 0; v < ad.length; v++) {
    adLoc.appendChild(pinAd);
  }

  return map.appendChild(ad);
};

var adTemplate = function getTemplate(ad) {

  var avatar = document.querySelector('.dialog__title > img');
  avatar.src = ad.author.avatar;

  var lodgeTemplate = document.getElementById('lodge-template').content;
  var adShow = lodgeTemplate.cloneNode(true);

  var lodgeTitle = lodgeTemplate.querySelector('.lodge__title').textContent = ad.offer.title;
  var lodgeAddress = lodgeTemplate.querySelector('.lodge__address').textContent = ad.offer.address;
  var lodgePrice = lodgeTemplate.querySelector('.lodge__price').innerHTML = ad.offer.price + ' &#8381;/ночь';
  var lodgeType = lodgeTemplate.querySelector('.lodge__type').textContent = ad.offer.type;
  var lodgeRoomsGuests = lodgeTemplate.querySelector('.lodge__rooms-and-guests').textContent = ad.offer.rooms + ' комнаты для ' + ad.offer.guests + ' гостей';
  var lodgeCheckinTime = lodgeTemplate.querySelector('.lodge__checkin-time').textContent = 'Заезд после ' + ad.offer.checkin + ',' + ' выезд до ' + ad.offer.checkout;
  var lodgeDescription = lodgeTemplate.querySelector('.lodge__description').textContent = ad.offer.description;

  var featuresFragment = getRandomFeatures(ad.offer.features);
  var lodgeFeatures = document.createElement('div');
  lodgeFeatures.classList.add('lodge__features');
  lodgeFeatures.appendChild(featuresFragment);

  for (var b = 0; b < ad.offer.features.length; b++) {
    var adFeature = document.createElement('span');
    adFeature.classList.add('feature__image  feature__image--') + ad.offer.features[b];
    document.querySelector('.lodge__features').appendChild('span');

    var dialogPanel = document.querySelector('.dialog_panel');
    dialogPanel.replaceChild(adTemplate, dialogPanel);
  }

  return adTemplate(ads[0]);
};

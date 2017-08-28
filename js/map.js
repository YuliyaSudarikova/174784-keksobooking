"use strict";
//генерим случайное число
function getRandomNumber(min, max) {
  getRandomNumber.x = 0;
  return Math.floor(Math.random() * (max - min)) + min;
};

// взять случайный объект из массива
function randItem(arr) {
  return arr[getRandomNumber(0, arr.length)];
};

// генерим неповторяющиеся строки
function getNonRepeatingNumber() {
  return getNonRepeatingNumber.a.pop();
};

getNonRepeatingNumber.a = ['01', '02', '03', '04', '05', '06', '07', '08'];

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
  var ad = {
      author: {
        avatar: 'img/avatar/user' + getNonRepeatingNumber(index + 1) + '.png',
      },
      features: getRandomFeatures(),
      title: allTitle[index],
    };
    return ad;
  };

  for (var i = 0; i < 8; i++) {
  createAd(i);
}

// генерим рандомный адрес
function getNewAddr() {
  var x = getRandomNumber(300, 900);
  var y = getRandomNumber(100, 500);
  return { 'x': x, 'y': y };
}

// рандомные удобства
function getRandomFeatures() {
  var features = [];
  var feats = [
    'wifi',
    'dishwasher',
    'parking',
    'washer',
    'elevator',
    'conditioner',
  ];
  var featureCount = getRandomNumber(0, feats.length);

  for (var i = 0; i < featureCount; i++) {
    var randomFeature = feats.splice(getRandomNumber(0, feats.length), 1);
    features.push(randomFeature);
  }

  return features;
}

// генерим итоговый объект
function getNewObj() {
  var addr = getNewAddr();
  return {
    'author': {
      'avatar': 'img/avatars/user' + getNonRepeatingNumber() + '.png',
    },
    'offer': {
      'title': getNonRepeatingTitle(),
      'price': getRandomNumber(1000, 1000000),
      'address': addr.x + ', ' + addr.y,
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
};

var objectList = [];
for (var i = 0; i < 8; i++) {
  obj = getNewObj();
  objectList.push(obj);
}

// создаем DOM-элементы
var divPin;
var fragment = document.createDocumentFragment();

for (var i = 0; i < objectsList.length; i++) {
  var newElement = document.createElement('div');
  divPin.className = 'pin';
  divPin.style.left = objectsList[i].addr.x - pin.offsetWidth / 2  + 'px';
  divPin.style.top = objectsList[i].addr.y - pin.offsetHeight / 2  + 'px';
  divPin.innerHTML = '<img src=\"img/avatars/user" + getNonRepeatingNumber() + ".png\" class=\"rounded\" width=\"40\" height=\"40\">';
}

  fragment.appendChild(divPin);


//Добавление пинов в DOM
var pinsElem = function (divPin) {
var mapsLoc = document.querySelector('.tokyo__pin-map');
var objectLoc = document.createDocumentFragment();
  for (var i = 0; i < divPin.length; i++) {
    objectLoc.appendChild(createPin(divPin[i]));
  }

  return mapsLoc.appendChild(objectLoc);
};

// заполненение шаблона
var objectTemplate = function (template, object) {

  var avatar = document.querySelector('.dialog__title > img');
  avatar.src = object.author.avatar;

  var similarObjectsTemplate = document.getElementById('lodge-template').content.cloneNode(true);
  var offerTitle = document.querySelector('.lodge__title').textContent = object.offer.title;
  var offerAddress = document.querySelector('.lodge__address').textContent = object.offer.address;
  var offerPrice = document.querySelector('.lodge__price').textContent = object.offer.price + ' &#8381;/ночь';
  var offerType = document.querySelector('.lodge__type').textContent = object.offer.type;
  var offerRoomsGuests = document.querySelector('.lodge__rooms-and-guests').textContent = object.offer.rooms + ' комнаты для ' + object.offer.guests + ' гостей';
  var offerCheckinTime = document.querySelector('.lodge__checkin-time').textContent = 'Заезд после ' + object.offer.checkin + ',' + ' выезд до ' + object.offer.checkout;
  var offerFeatures = document.querySelector('.lodge__features')
  var offerDescription = document.querySelector('.lodge__description').textContent = object.offer.description;

  var featuresFragment = getRandomFeatures(object.offer.features);
  var lodgeFeatures = document.createElement('div');
  lodgeFeatures.classList.add('lodge__features');
  lodgeFeatures.appendChild(featuresFragment);

  for (var i = 0; i < object.offer.features.length; i++) {
    var objectFeature = document.createElement('span');
    objectFeature.className = 'feature__image  feature__image--' + object.offer.features[i];
    document.querySelector('.lodge__features').appendChild(span);
  }

  return objectTemplate;
};

var dialogPanel = document.querySelector('.dialog_panel');
dialogPanel.replaceChild(objectTemplate, dialogPanel);

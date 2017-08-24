"use strict";
//генерим случайное число
function getRandomNumber(min, max) {
  getRandomNumber.x =0;
  return Math.floor(Math.random() * (max - min)) + min;
};

// взять случайный объект из массива
function randItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
};

// генерим неповторяющиеся строки
function getNonRepeatingNumber() {
  return getNonRepeatingNumber.a.pop();
};
getNonRepeatingNumber.a = ['01', '02', '03', '04', '05', '06', '07', '08'];

// генерим неповторяющиеся строки
function getNonRepeatingTitle() {
  return getNonRepeatingTitle.a.pop();
};
getNonRepeatingTitle.a = [
  'Большая уютная квартира',
  'Маленькая неуютная квартира',
  'Огромный прекрасный дворец',
  'Маленький ужасный дворец',
  'Красивый гостевой домик',
  'Некрасивый негостеприимный домик',
  'Уютное бунгало далеко от моря',
  'Неуютное бунгало по колено в воде'
];

// генерим рандомный адрес
function getNewAddr() {
  var x = getRandomNumber(300, 900);
  var y = getRandomNumber(100, 500);
  return {'x': x, 'y': y}
};

// выкидываем рандомные удобства
function getRandomFeatures() {
  var feat = [
    'wifi',
    'dishwasher',
    'parking',
    'washer',
    'elevator',
    'conditioner'
  ];
  var featureCount = getRandomNumber(0, feat.length);

  for (var i = 0; i < featureCount; i++) {
    var rem = feat.splice(getRandomNumber(0, feat.length), 1);
  };
  return feat;
};


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
      'photos': []
    },
    'location': {
      'x': addr.x,
      'y': addr.y
    }
  }
};

var objectFlat = [];
for (var i = 0; i < 8; i++) {
  obj = getNewObj();
  objectFlat.push(obj);
};

//создаем DOM-элементы
var divPin;
var fragment = document.createDocumentFragment();

for (var i = 0; i < objectFlat.length; i++) {
  var newElement = document.createElement('div');
  divPin.className = 'pin';
  divPin.style.left = objectFlat[i].addr.x - pin.offsetWidth / 2  + 'px';
  divPin.style.top = objectFlat[i].addr.y - pin.offsetHeight / 2  + 'px';
  divPin.innerHTML = '<img src= 'img/avatars/user' + getNonRepeatingNumber() + '.png' class=\"rounded\" width=\"40\" height=\"40\">';
}
  return fragment.appendChild(divPin);
};

//Вставка элементов
var pinsElem = function (divPin) {
var mapsLoc = document.querySelector('.tokyo__pin-map');
var objectLoc = document.createDocumentFragment();
  for (var i = 0; i < divPin.length; i++) {
    objectLoc.appendChild(createPin(divPin[i]));
  }
  return mapsLoc.appendChild(objectLoc);

};


//заполненение шаблона
var objectTemplate = function (i) {
var similarObjectsTemplate = document.getElementById('lodge-template').content;
var objectElement = similarObjectsTemplate.cloneNode(true);
var offerTitle = document.querySelector('.lodge__title');
var offerAddress = document.querySelector('.lodge__address');
var offerTitle = document.querySelector('.lodge__price');



}

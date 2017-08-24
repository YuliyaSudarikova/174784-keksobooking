"use strict";
//генерим случайное число
function getRandomNumber(min, max) {
  getRandomNumber.x =0;
  return Math.floor(Math.random() * (max - min)) + min;
};

// взять случайный обёект из массива
function randItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
};

// генерим неповторяющиеся сторки
function getNonRepeatingNumber() {
  return getNonRepeatingNumber.a.pop();
};
getNonRepeatingNumber.a = ['01', '02', '03', '04', '05', '06', '07', '08'];

// генерим неповторяющиеся сторки
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

// выкидываем рандомные овози из корзтны
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


// генерим итоговый обёект
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

var ggg = [];
for (var i = 0; i < 8; i++) {
  obj = getNewObj();
  ggg.push(obj);
};


// рисуем бле
var similarObjectCard = document.querySelection('.tokyo');

// document.querySelector('#lodge-template').classList.remove('hidden');
document.getElementById('lodge-template').classList.remove('hidden');
var similarObjectsTemplate = document.querySelector('#lodge-template').content;

for (var i = 0; i < 4; i++) {
  var objectsElement = similarObjectsTemplate.cloneNode(true);

  similarListElement.appendChild(objectsElement);
}

var objectsNames = similarObjectOptions[1](1)(3);

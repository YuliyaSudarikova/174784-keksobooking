"use strict";
//генерим случайное число
var numberArray = function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
//рандомный элемент из массива
var object = function foundArrNumber(similarObjectOptions) {
   var x =  Math.floor(getRandomNumber(0, similarObjectOptions.length - 1));
   return similarObject[x]
}




var similarObjectOptions = [
{
  'author': {
    'avatar': ''img/avatars/user' + Math.floor(getRandomNumber(1, 8)) + '.png'';
  }
  },
  'offer': {
    'title': 'Большая уютная квартира', 'Маленькая неуютная квартира', 'Огромный прекрасный дворец', 'Маленький ужасный дворец', 'Красивый гостевой домик', 'Некрасивый негостеприимный домик', 'Уютное бунгало далеко от моря', 'Неуютное бунгало по колено в воде',
    'price': 'Math.floor(getRandomNumber(1000, 1000000))',
    'address': Math.floor(getRandomNumber(300, 900)) + , + Math.floor(getRandomNumber(100, 500)),
    'type': 'flat', 'house', 'bungalo',
    'rooms': Math.floor(getRandomNumber(1000, 1000000)),
    'guests': Math.floor(getRandomNumber(1, 5)),
    'checkin': '12:00', '13:00', '14:00',
    'checkout': '12:00', '13:00', '14:00',
    'features': [
      'wifi',
      'dishwasher',
      'parking',
      'washer',
      'elevator',
      'conditioner'
    ],
    'description': '',
    'photos': []
  },
  'location': {
  'x': Math.floor(getRandomNumber(300, 900)),
  'y': Math.floor(getRandomNumber(100, 500))
  }
}
]
var similarObjectCard = document.querySelection('.tokyo');

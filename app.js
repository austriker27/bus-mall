'use strict';

// use a widgets constructor with properties for all images
function widgetImage(name, filepath, timesShown, timesClicked) {
  this.name = name;
  this.filepath = filepath;
  this.timesShown = timesShown;
  this.timesClicked = timesClicked;

  allWidgets.push(this);
};

// array of all widgetImgs
var allWidgets = [];

// all instances of each image
var bag = new widgetImage('bag', 'img/bag.jpg', 0, 0);
var banana = new widgetImage('banana', 'img/banana.jpg', 0, 0);
var bathroom = new widgetImage('bathroom', 'img/bathroom.jpg', 0, 0);
var boots = new widgetImage('boots', 'img/boots.jpg ', 0, 0);
var breakfast = new widgetImage('breakfast', 'img/breakfast.jpg', 0, 0);
var bubblegum = new widgetImage('bubblegum', 'img/bubblegum.jpg ', 0, 0);
var chair = new widgetImage('chair', 'img/chair.jpg', 0, 0);
var cthulhhu = new widgetImage('cthulhhu', 'img/cthulhhu.jpg', 0, 0);
var dogDuck = new widgetImage('dog-duck', 'img/dog-duck.jpg ', 0, 0);
var dragon = new widgetImage('dragon', 'img/dragon.jpg', 0, 0);
var pen = new widgetImage('pen', 'img/pen.jpg', 0, 0);
var petSweep = new widgetImage('pet-sweep', 'img/pet-sweep.jpg', 0, 0);
var scissors = new widgetImage('scissors', 'img/scissors.jpg', 0, 0);
var shark = new widgetImage('shark', 'img/shark.jpg', 0, 0);
var sweep = new widgetImage('sweep', 'img/sweep.png', 0, 0);
var tauntaun = new widgetImage('tauntaun', 'img/tauntaun.jpg', 0, 0);
var unicorn = new widgetImage('unicorn', 'img/unicorn.jpg', 0, 0);
var usb = new widgetImage('usb', 'img/usb.gif', 0, 0);
var waterCan = new widgetImage('water-can', 'img/water-can.jpg', 0, 0);
var wineGlass = new widgetImage('wine-glass', 'img/wine-glass.jpg', 0, 0);

//generate random numbers
function randomNum() {
  return Math.floor(Math.random() * (allWidgets.length - 0) + 0);
}

// display 3 images on page via JS
function renderWidgets() {
  var firstWidgetSpot = document.getElementById('widget1');
  var firstWidgetPic = document.createElement('img');
  firstWidgetPic.src = allWidgets[randomNum()].filepath;
  firstWidgetSpot.appendChild(firstWidgetPic);
  var secondWidgetSpot = document.getElementById('widget2');
  var secondWidgetPic = document.createElement('img');
  secondWidgetPic.src = allWidgets[randomNum()].filepath;
  secondWidgetSpot.appendChild(secondWidgetPic);
  var thirdWidgetSpot = document.getElementById('widget3');
  var thirdWidgetPic = document.createElement('img');
  thirdWidgetPic.src = allWidgets[randomNum()].filepath;
  thirdWidgetSpot.appendChild(thirdWidgetPic);
}

renderWidgets();

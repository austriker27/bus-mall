'use strict';

//setting variable for max clicks for testing
var maxClicks = 2;

// use a widgets constructor with properties for all images
function Widget (name, filepath, timesShown, timesClicked) {
  this.name = name;
  this.filepath = filepath;
  this.timesShown = timesShown;
  this.timesClicked = timesClicked;
  allWidgets.push(this);

};

// array of all widgetImgs
var allWidgets = [];

// all instances of each image
var bag = new Widget ('bag', 'img/bag.jpg', 0, 0);
var banana = new Widget ('banana', 'img/banana.jpg', 0, 0);
var bathroom = new Widget ('bathroom', 'img/bathroom.jpg', 0, 0);
var boots = new Widget ('boots', 'img/boots.jpg ', 0, 0);
var breakfast = new Widget ('breakfast', 'img/breakfast.jpg', 0, 0);
var bubblegum = new Widget ('bubblegum', 'img/bubblegum.jpg ', 0, 0);
var chair = new Widget ('chair', 'img/chair.jpg', 0, 0);
var cthulhu = new Widget ('cthulhu', 'img/cthulhu.jpg', 0, 0);
var dogDuck = new Widget ('dog-duck', 'img/dog-duck.jpg ', 0, 0);
var dragon = new Widget ('dragon', 'img/dragon.jpg', 0, 0);
var pen = new Widget ('pen', 'img/pen.jpg', 0, 0);
var petSweep = new Widget ('pet-sweep', 'img/pet-sweep.jpg', 0, 0);
var scissors = new Widget ('scissors', 'img/scissors.jpg', 0, 0);
var shark = new Widget ('shark', 'img/shark.jpg', 0, 0);
var sweep = new Widget ('sweep', 'img/sweep.png', 0, 0);
var tauntaun = new Widget ('tauntaun', 'img/tauntaun.jpg', 0, 0);
var unicorn = new Widget ('unicorn', 'img/unicorn.jpg', 0, 0);
var usb = new Widget ('usb', 'img/usb.gif', 0, 0);
var waterCan = new Widget ('water-can', 'img/water-can.jpg', 0, 0);
var wineGlass = new Widget ('wine-glass', 'img/wine-glass.jpg', 0, 0);

//generate random numbers
function randomNum() {
  return Math.floor(Math.random() * (allWidgets.length));
}

// array of last 3 widgets shown on screen
var lastThreeWidgets = [];

// display 3 images on page via JS
function renderWidgets() {
  var firstWidgetSpot = document.getElementById('widget1');
  var firstWidgetPic = firstWidgetSpot.children[0];
  var firstWidgetNum = randomNum();
  var firstWidgetPic = setAttribute('this.name');
  while (lastThreeWidgets.includes(firstWidgetNum)) {
    firstWidgetNum = randomNum();
  }
  firstWidgetPic.src = allWidgets[firstWidgetNum].filepath;

  var secondWidgetSpot = document.getElementById('widget2');
  var secondWidgetPic = secondWidgetSpot.children[0];
  var secondWidgetNum = randomNum();
  while (secondWidgetNum === firstWidgetNum || lastThreeWidgets.includes(secondWidgetNum)) {
    secondWidgetNum = randomNum();
  }
  secondWidgetPic.src = allWidgets[secondWidgetNum].filepath;

  var thirdWidgetSpot = document.getElementById('widget3');
  var thirdWidgetPic = thirdWidgetSpot.children[0];
  var thirdWidgetNum = randomNum();
  while (thirdWidgetNum === secondWidgetNum || thirdWidgetNum === firstWidgetNum || lastThreeWidgets.includes(thirdWidgetNum)) {
    thirdWidgetNum = randomNum();
  }
  thirdWidgetPic.src = allWidgets[thirdWidgetNum].filepath;

  lastThreeWidgets = [];
  lastThreeWidgets.push(firstWidgetNum, secondWidgetNum, thirdWidgetNum);
  allWidgets[firstWidgetNum, secondWidgetNum, thirdWidgetNum].timesShown += 1;
}
renderWidgets();

//event.target access the event in the browser
function widgetClicked1(){
  console.log('clicked on image 1');
}

function widgetClicked2(){
  console.log('clicked on image 2');
}

function widgetClicked3(){
  console.log('clicked on image 3');
}

this.timesClicked += 1;

// add event listener to 3 images and count clicks
var clickWidget1 = document.getElementById('widget1');
clickWidget1.addEventListener('click', widgetClicked1);

var clickWidget2 = document.getElementById('widget2');
clickWidget2.addEventListener('click', widgetClicked2);

var clickWidget3 = document.getElementById('widget3');
clickWidget3.addEventListener('click', widgetClicked3);

// remove event listeners
// widget1.removeEventListener('click', this.widgetClicked);
// widget2.removeEventListener('click', this.widgetClicked);
// widget3.removeEventListener('click', this.widgetClicked);

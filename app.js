'use strict';

//setting variable for max clicks for testing
var maxClicks = 3;

// use a widgets constructor with properties for all images
function Widget (name, filepath, timesShown, timesClicked, id) {
  this.name = name;
  this.filepath = filepath;
  this.timesShown = timesShown;
  this.timesClicked = timesClicked;
  this.id = id;
  allWidgets.push(this);
};

// array of all widgetImgs
var allWidgets = [];

// all instances of each image
var bag = new Widget ('bag', 'img/bag.jpg', 0, 0, 'bag');
var banana = new Widget ('banana', 'img/banana.jpg', 0, 0, 'banana');
var bathroom = new Widget ('bathroom', 'img/bathroom.jpg', 0, 0, 'bathroom');
var boots = new Widget ('boots', 'img/boots.jpg ', 0, 0, 'boots');
var breakfast = new Widget ('breakfast', 'img/breakfast.jpg', 0, 0, 'breakfast');
var bubblegum = new Widget ('bubblegum', 'img/bubblegum.jpg ', 0, 0, 'bubblegum');
var chair = new Widget ('chair', 'img/chair.jpg', 0, 0, 'chair');
var cthulhu = new Widget ('cthulhu', 'img/cthulhu.jpg', 0, 0, 'cthulhu');
var dogDuck = new Widget ('dog duck', 'img/dog-duck.jpg ', 0, 0, 'dogDuck');
var dragon = new Widget ('dragon', 'img/dragon.jpg', 0, 0, 'dragon');
var pen = new Widget ('pen', 'img/pen.jpg', 0, 0, 'pen');
var petSweep = new Widget ('pet sweep', 'img/pet-sweep.jpg', 0, 0, 'petSweep');
var scissors = new Widget ('scissors', 'img/scissors.jpg', 0, 0, 'scissors');
var shark = new Widget ('shark', 'img/shark.jpg', 0, 0, 'shark');
var sweep = new Widget ('sweep', 'img/sweep.png', 0, 0, 'sweep');
var tauntaun = new Widget ('tauntaun', 'img/tauntaun.jpg', 0, 0, 'tauntaun');
var unicorn = new Widget ('unicorn', 'img/unicorn.jpg', 0, 0, 'unicorn');
var usb = new Widget ('usb', 'img/usb.gif', 0, 0, 'usb');
var waterCan = new Widget ('water can', 'img/water-can.jpg', 0, 0, 'waterCan');
var wineGlass = new Widget ('wine glass', 'img/wine-glass.jpg', 0, 0, 'wineGlass');

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
  while (lastThreeWidgets.includes(firstWidgetNum)) {
    firstWidgetNum = randomNum();
  }
  firstWidgetPic.src = allWidgets[firstWidgetNum].filepath;
  firstWidgetPic.id = allWidgets[firstWidgetNum].id;

  var secondWidgetSpot = document.getElementById('widget2');
  var secondWidgetPic = secondWidgetSpot.children[0];
  var secondWidgetNum = randomNum();
  while (secondWidgetNum === firstWidgetNum || lastThreeWidgets.includes(secondWidgetNum)) {
    secondWidgetNum = randomNum();
  }
  secondWidgetPic.src = allWidgets[secondWidgetNum].filepath;
  secondWidgetPic.id = allWidgets[secondWidgetNum].id;

  var thirdWidgetSpot = document.getElementById('widget3');
  var thirdWidgetPic = thirdWidgetSpot.children[0];
  var thirdWidgetNum = randomNum();
  while (thirdWidgetNum === secondWidgetNum || thirdWidgetNum === firstWidgetNum || lastThreeWidgets.includes(thirdWidgetNum)) {
    thirdWidgetNum = randomNum();
  }
  thirdWidgetPic.src = allWidgets[thirdWidgetNum].filepath;
  thirdWidgetPic.id = allWidgets[thirdWidgetNum].id;

  lastThreeWidgets = [];
  lastThreeWidgets.push(firstWidgetNum, secondWidgetNum, thirdWidgetNum);
  allWidgets[firstWidgetNum].timesShown += 1;
  allWidgets[secondWidgetNum].timesShown += 1;
  allWidgets[thirdWidgetNum].timesShown += 1;
}
renderWidgets();

// add event listener to 3 images and count clicks
var clickWidget1 = document.getElementById('widget1');
clickWidget1.addEventListener('click', clickCounter);

var clickWidget2 = document.getElementById('widget2');
clickWidget2.addEventListener('click', clickCounter);

var clickWidget3 = document.getElementById('widget3');
clickWidget3.addEventListener('click', clickCounter);

// count to count numbers of clicks
var clkCntr = 0;

function clickCounter(event) {
  for (var i = 0; i < allWidgets.length; i++) {
    if (allWidgets[i].id === event.target.id && clkCntr < maxClicks) {
      allWidgets[i].timesClicked++;
      clkCntr++;
    } else if (clkCntr === maxClicks) {
      clickWidget1.removeEventListener('click', clickCounter);
      clickWidget2.removeEventListener('click', clickCounter);
      clickWidget3.removeEventListener('click', clickCounter);
      console.log(clickWidget1, clickWidget2, clickWidget3);
      var listAnchor = document.getElementById('listAnchor');
      var clickList = document.createElement('ul');
      listAnchor.appendChild(clickList);
      for (var j = 0; j < allWidgets.length; j++) {
        var list = document.createElement('li');
        if (allWidgets[j].timesShown > 0 ) {
          list.innerText = (allWidgets[j].timesClicked / allWidgets[j].timesShown * 100) + '% votes for the ' + allWidgets[j].name + '.';
          clickList.appendChild(list);
        } else {
          list.innerText = allWidgets[j].name + ' was not shown.';
        }
        clickList.appendChild(list);
      }
      clkCntr++;
    }
  }
  renderWidgets();
}

// build a function that runs through the constructor and pulls back name and times clicked
// run an if statement for any constructor instance that has times clicked > 0 then return name and times clicked into an array
//
//

var itemsClickedMoreThanOnce = [];

function chartMaker () {
  for (var i = 0; i < allWidgets.length; i++) {
    if (allWidgets[i].timesShown > 0 ) {
      itemsClickedMoreThanOnce.push.allWidgets[i].name;
}


var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true
        }
      }]
    }
  }
});

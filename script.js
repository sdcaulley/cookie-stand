// store locations in literal object notation
var pioneerSquare = {
  name: 'Pioneer Square',
  minCustomer: 17,
  maxCustomer: 88,
  avgCookie: 5.2,
  hours: ['10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm'],
  randomCust: [],
  dayTotal: 0,
  cookiesNeeded: function () {
    while (this.randomCust.length < 10) {
      var cookieSales = (Math.ceil(((Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer)) * this.avgCookie)))
      this.randomCust.push(cookieSales)
      this.dayTotal += cookieSales
    }
  }
}

var portlandAirport = {
  name: 'Portland Airport',
  minCustomer: 6,
  maxCustomer: 24,
  avgCookie: 1.2,
  hours: ['10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm'],
  randomCust: [],
  dayTotal: 0,
  cookiesNeeded: function () {
    while (this.randomCust.length < 10) {
      var cookieSales = (Math.ceil(((Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer)) * this.avgCookie)))
      this.randomCust.push(cookieSales)
      this.dayTotal += cookieSales
    }
  }
}

var washingtonSquare = {
  name: 'Washington Square',
  minCustomer: 11,
  maxCustomer: 38,
  avgCookie: 1.9,
  hours: ['10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm'],
  randomCust: [],
  dayTotal: 0,
  cookiesNeeded: function () {
    while (this.randomCust.length < 10) {
      var cookieSales = (Math.ceil(((Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer)) * this.avgCookie)))
      this.randomCust.push(cookieSales)
      this.dayTotal += cookieSales
    }
  }
}

var sellwood = {
  name: 'Sellwood',
  minCustomer: 20,
  maxCustomer: 48,
  avgCookie: 3.3,
  hours: ['10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm'],
  randomCust: [],
  dayTotal: 0,
  cookiesNeeded: function () {
    while (this.randomCust.length < 10) {
      var cookieSales = (Math.ceil(((Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer)) * this.avgCookie)))
      this.randomCust.push(cookieSales)
      this.dayTotal += cookieSales
    }
  }
}

var pearlDistrict = {
  name: 'Pearl District',
  minCustomer: 3,
  maxCustomer: 24,
  avgCookie: 2.6,
  hours: ['10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm'],
  randomCust: [],
  dayTotal: 0,
  cookiesNeeded: function () {
    while (this.randomCust.length < 10) {
      var cookieSales = (Math.ceil(((Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer)) * this.avgCookie)))
      this.randomCust.push(cookieSales)
      this.dayTotal += cookieSales
    }
  }
}

// function to display requested data to page
var locations = [pioneerSquare, portlandAirport, washingtonSquare, sellwood, pearlDistrict]

function storeInfo (locArray) {
  for (var i = 0; i < locArray.length; i++) {
    locArray[i].cookiesNeeded()
    var newSec = document.createElement('section')
    var position = document.getElementById('content')
    position.appendChild(newSec)
    var newStore = document.createElement('h2')
    newSec.appendChild(newStore)
    var newStoreName = document.createTextNode(locArray[i].name)
    newStore.appendChild(newStoreName)
    newSec.appendChild(buildTable(locArray[i]))
  }
  function buildTable (myArray) {
    var newTable = document.createElement('table')
    var header = newTable.createTHead()
    var rowHead = header.insertRow(0)
    var cellHead1 = rowHead.insertCell(0)
    var cellHead2 = rowHead.insertCell(1)
    var headText1 = document.createTextNode('Hours')
    var headText2 = document.createTextNode('Cookies')
    cellHead1.appendChild(headText1)
    cellHead2.appendChild(headText2)
    for (var index = 0; index < myArray.hours.length; index++) {
      var row = newTable.insertRow(myArray.hours[index])
      newTable.appendChild(row)
      var cell1 = row.insertCell(0)
      var cell2 = row.insertCell(1)
      var cellText1 = document.createTextNode(myArray.hours[index])
      var cellText2 = document.createTextNode(myArray.randomCust[index])
      cell1.appendChild(cellText1)
      cell2.appendChild(cellText2)
    }
    var rowTotal = newTable.insertRow()
    var cellTotal1 = rowTotal.insertCell(0)
    var cellTotal2 = rowTotal.insertCell(1)
    var totalText1 = document.createTextNode('Total')
    var TotalText2 = document.createTextNode(locArray[i].dayTotal)
    cellTotal1.appendChild(totalText1)
    cellTotal2.appendChild(TotalText2)
    return newTable
  }
}

storeInfo(locations)

// object constructor for stores
function Store (name, minCustomer, maxCustomer, avgCookie) {
  this.name = name
  this.minCustomer = minCustomer
  this.maxCustomer = maxCustomer
  this.avgCookie = avgCookie
  this.hours = ['10 am', '11 am', '12 am', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm']
  this.randomCust = []
  this.dayTotal = 0
  this.cookiesNeeded = function () {
    while (this.randomCust.length < this.hours.length) {
      var cookieSales = (Math.ceil(((Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer)) * this.avgCookie)))
      this.randomCust.push(cookieSales)
      this.dayTotal += cookieSales
    }
  }
}

// declare store objects
var locations = [
  new Store('Pioneer Square', 17, 88, 5.2, 10, 6),
  new Store('Portland Airport', 6, 24, 1.2, 10, 6),
  new Store('Washington Square', 11, 38, 1.9, 10, 6),
  new Store('Sellwood', 20, 48, 3.3, 10, 6),
  new Store('Pearl District', 3, 24, 2.6, 10, 6)
]

// function to display requested data to page
function storeInfo (locArray) {
  for (var i = 0; i < locArray.length; i++) {
    locArray[i].cookiesNeeded()
    var newSec = document.createElement('section')
    var position = document.getElementById('content')
    position.appendChild(newSec)
    var newStore = document.createElement('h2')
    newStore.setAttribute('class', 'highlight')
    newSec.appendChild(newStore)
    var newStoreName = document.createTextNode(locArray[i].name)
    newStore.appendChild(newStoreName)
    newSec.appendChild(buildTable(locArray[i]))
  }
  function buildTable (myArray) {
    var newTable = document.createElement('table')
    var header = newTable.createTHead()
    var rowHead = header.insertRow(0)
    rowHead.setAttribute('class', 'text')
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
      cell1.setAttribute('class', 'text')
      cell2.setAttribute('class', 'data')
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
    cellTotal1.setAttribute('class', 'total')
    cellTotal2.setAttribute('class', 'data')
    cellTotal1.appendChild(totalText1)
    cellTotal2.appendChild(TotalText2)
    return newTable
  }
}

storeInfo(locations)

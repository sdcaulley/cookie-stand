// object constructor for stores
function Store (storeId, name, minCustomer, maxCustomer, avgCookie) {
  this.storeId = storeId
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
  new Store('S01', 'Pioneer Square', 17, 88, 5.2),
  new Store('S02', 'Portland Airport', 6, 24, 1.2),
  new Store('S03', 'Washington Square', 11, 38, 1.9),
  new Store('S04', 'Sellwood', 20, 48, 3.3),
  new Store('S05', 'Pearl District', 3, 24, 2.6)
]

// function to display requested data to page
function displayInfo (locArray) {
  var position = document.getElementById('content')
  for (var i = 0; i < locArray.length; i++) {
    locArray[i].cookiesNeeded()
    position.appendChild(createStoreInfo(locArray[i]))
  }
}

function createStoreInfo (locStore) {
  // create a new section for store table
  var newSec = document.createElement('section')
  newSec.setAttribute('id', locStore.storeId)
  // create store name
  var newStore = document.createElement('h2')
  newStore.setAttribute('class', 'highlight')
  newStore.setAttribute('id', 'name')
  newSec.appendChild(newStore)
  var newStoreName = document.createTextNode(locStore.name)
  newStore.appendChild(newStoreName)
  // create property display - store id
  var newPropertyId = document.createElement('p')
  newPropertyId.setAttribute('id', 'storeId')
  var newStoreId = document.createTextNode('Store Id: ' + locStore.storeId)
  newPropertyId.appendChild(newStoreId)
  newSec.appendChild(newPropertyId)
  // create property display - minimum customers
  var newPropertyMin = document.createElement('p')
  var newMinCust = document.createTextNode('Minimum Customers: ' + locStore.minCustomer)
  newPropertyMin.appendChild(newMinCust)
  newSec.appendChild(newPropertyMin)
  //  create property display - maximum cutstomers
  var newPropertyMax = document.createElement('p')
  var newMaxCust = document.createTextNode('Maximum Customers: ' + locStore.maxCustomer)
  newPropertyMax.appendChild(newMaxCust)
  newSec.appendChild(newPropertyMax)
  // create property display - average cookie sales
  var newPropertyAvg = document.createElement('p')
  var newAvgCookie = document.createTextNode('Average Cookies: ' + locStore.avgCookie)
  newPropertyAvg.appendChild(newAvgCookie)
  newSec.appendChild(newPropertyAvg)
  newSec.appendChild(buildTable(locStore))
  return newSec
}

function buildTable (locStore) {
  var newTable = document.createElement('table')
  // create header row, cells and content
  var header = newTable.createTHead()
  var rowHead = header.insertRow(0)
  rowHead.setAttribute('class', 'text')
  var cellHead1 = rowHead.insertCell(0)
  var cellHead2 = rowHead.insertCell(1)
  var headText1 = document.createTextNode('Hours')
  var headText2 = document.createTextNode('Cookies')
  cellHead1.appendChild(headText1)
  cellHead2.appendChild(headText2)
  // create row and cells for hours and cookies
  for (var index = 0; index < locStore.hours.length; index++) {
    var row = newTable.insertRow(locStore.hours[index])
    newTable.appendChild(row)
    var cell1 = row.insertCell(0)
    var cell2 = row.insertCell(1)
    cell1.setAttribute('class', 'text')
    cell2.setAttribute('class', 'data')
    var cellText1 = document.createTextNode(locStore.hours[index])
    var cellText2 = document.createTextNode(locStore.randomCust[index])
    cell1.appendChild(cellText1)
    cell2.appendChild(cellText2)
  }
  // create total row and cells
  var rowTotal = newTable.insertRow()
  var cellTotal1 = rowTotal.insertCell(0)
  var cellTotal2 = rowTotal.insertCell(1)
  var totalText1 = document.createTextNode('Total')
  var TotalText2 = document.createTextNode(locStore.dayTotal)
  cellTotal1.setAttribute('class', 'total')
  cellTotal2.setAttribute('class', 'data')
  cellTotal1.appendChild(totalText1)
  cellTotal2.appendChild(TotalText2)
  return newTable
}

// new store form
var form = document.getElementById('store')
form.onsubmit = function (e) {
  e.preventDefault()
  var newStore = new Store(form.storeId.value, form.storeName.value, form.minCustomer.value, form.maxCustomer.value, form.avgCookie.value)
  newStore.cookiesNeeded()
  var position = document.getElementById('content')
  position.appendChild(createStoreInfo(newStore))
}

displayInfo(locations)

// Get the modal and populate with store data
var modal = document.getElementById('myModal')
var btn = document.getElementById('myBtn')
var span = document.getElementsByClassName('close')[0]
var storeDrop = document.getElementById('storeDrop')

btn.onclick = function (e) {
  e.preventDefault()
  modal.style.display = 'block'
  var index = storeDrop.value
  for (var i = 0; i < locations.length; i++) {
    if (index == locations[i].storeId) {
      document.getElementById('modalStoreName').innerHTML = locations[i].name
      document.getElementById('newData').modalMinCustomer.value = locations[i].minCustomer
      document.getElementById('newData').modalMaxCustomer.value = locations[i].maxCustomer
      document.getElementById('newData').modalAvgCookie.value = locations[i].avgCookie
      document.getElementById('newData').modalCurrentStoreId.value = index
    }
  }
}

span.onclick = function () {
  modal.style.display = 'none'
}

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none'
  }
}

var updateStore = document.getElementById('newData')
updateStore.onsubmit = function (e) {
  e.preventDefault()
  var index = document.getElementById('newData').modalCurrentStoreId.value
  console.log(index)
  var replaceStoreName = document.getElementById('modalStoreName').innerHTML
  var replaceMinCustomer = document.getElementById('newData').modalMinCustomer.value
  var replaceMaxCustomer = document.getElementById('newData').modalMaxCustomer.value
  var replaceAvgCookie = document.getElementById('newData').modalAvgCookie.value
  var replaceStore = new Store(index, replaceStoreName, replaceMinCustomer, replaceMaxCustomer, replaceAvgCookie)
  replaceStore.cookiesNeeded()
  var position = document.getElementById('content')
  console.log(position)
  position.replaceChild(createStoreInfo(replaceStore), document.getElementById(index))
  modal.style.display = 'none'
}

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
    document.write('<h2 class="highlight">' + locArray[i].name + '</h2><table><tr class="text"><th scope="col">Hour</th><th scope="col">Cookie Sales</th></tr>')
    for (var index = 0; index < locArray[i].hours.length; index++) {
      document.write('<tr><td class="text">' + locArray[i].hours[index] + '</td><td class="data">' + locArray[i].randomCust[index] + '</td></tr>')
    }
    document.write('<tr class="total"><td>Total</td><td class="data">' + locArray[i].dayTotal + '</td></tr></table>')
  }
}
storeInfo(locations)

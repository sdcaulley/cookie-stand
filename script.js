var averageCustomer = [];

function avgCustGen(min, max) {
while (averageCustomer.length < 10) {
  var randomCust = (Math.floor(Math.random() * (max - min) + min));
  averageCustomer.push(randomCust);
  console.log(averageCustomer);
}
}

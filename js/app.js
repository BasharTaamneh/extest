'use strict';
let table = document.getElementById('mytable');
let tablefooter = document.getElementById('table-footer');
let form = document.getElementById('myform');

let tdElment;
function tableheadrender() {
    let trElment = document.createElement('tr');
    tdElment = document.createElement('td');
    tdElment.textContent = 'Client Name';
    trElment.append(tdElment);

    tdElment = document.createElement('td');
    tdElment.textContent = 'Client Number';
    trElment.append(tdElment);

    tdElment = document.createElement('td');
    tdElment.textContent = 'Client Addres';
    trElment.append(tdElment);

    tdElment = document.createElement('td');
    tdElment.textContent = 'Orderd Males';
    trElment.append(tdElment);

    tdElment = document.createElement('td');
    tdElment.textContent = 'Price';
    trElment.append(tdElment);

    tdElment = document.createElement('td');
    tdElment.textContent = 'Quntity';
    trElment.append(tdElment);

    tdElment = document.createElement('td');
    tdElment.textContent = 'Total price';
    trElment.append(tdElment);

    table.append(trElment);
}
tableheadrender();

let orders = [];

function clorders(ClientName, ClientNumber, ClientAddres, OrderdMales,Price, Quntity, Totalprice) {
    this.ClientName = ClientName;
    this.ClientNumber = ClientNumber;
    this.ClientAddres = ClientAddres;
    this.OrderdMales = OrderdMales;
    this.Price=Price;
    this.Quntity = Quntity;
    this.Totalprice = Totalprice;
    orders.push(this);

}

clorders.prototype.ClientNumbercalc = function () {
    if (this.ClientNumber == undefined) {
        return this.ClientNumber = 'client 0'
    } else {
        for (let i = 0; i < orders.length; i++) {
            return this.ClientNumber = "client " + orders.length;
        }
    }
}
clorders.prototype.Pricecalc = function () {

    return this.Price = Math.floor(Math.random() * 16 + 1);
}



function neworder(event) {
    event.preventDefault();
    let Name = event.target.clinput.value;
    let Number = clorders.prototype.ClientNumbercalc();
    let Addres = event.target.clAddress.value;
    let Males = event.target.clmail.value;
    let MPrice = clorders.prototype.Pricecalc();
    let MQuntity = event.target.clQuntity.value;
    let MTotalprice = MPrice * MQuntity;
    new clorders(Name, Number, Addres, Males, MPrice, MQuntity, MTotalprice);
    savToLocStor();
    tablefootrender();
    form.reset();
    console.log(orders);
}

form.addEventListener('submit', neworder);

function tablefootrender() {
    let tot = 0;
    tablefooter.textContent = '';

    for (let i = 0; i < orders.length; i++) {

        let trElment = document.createElement('tr');
        tdElment = document.createElement('td');
        tdElment.textContent = orders[i].ClientName;
        trElment.append(tdElment);

        tdElment = document.createElement('td');
        tdElment.textContent = orders[i].ClientNumber;
        trElment.append(tdElment);

        tdElment = document.createElement('td');
        tdElment.textContent = orders[i].ClientAddres;
        trElment.append(tdElment);

        tdElment = document.createElement('td');
        tdElment.textContent = orders[i].OrderdMales;
        trElment.append(tdElment);

        tdElment = document.createElement('td');
        tdElment.textContent = orders[i].Price + '.00 JOD';
        trElment.append(tdElment);

        tdElment = document.createElement('td');
        tdElment.textContent = orders[i].Quntity;
        trElment.append(tdElment);

        tdElment = document.createElement('td');
        tdElment.textContent = orders[i].Totalprice + '.00 JOD';
        trElment.append(tdElment);
        tablefooter.append(trElment);

        tot += orders[i].Totalprice;

    }
    let trElment2 = document.createElement('tr');
    tdElment = document.createElement('td');
    tdElment.textContent = 'Grandtotal Price:';
    trElment2.append(tdElment);

    tdElment = document.createElement('td');
    tdElment.textContent = tot + '.00 JOD';
    trElment2.append(tdElment);

    tablefooter.append(trElment2);
}


function savToLocStor() {
    let data = JSON.stringify(orders);
    localStorage.setItem('clorder', data);
}
function ReadLocStor() {
    let getclorderstring = localStorage.getItem('clorder');
    let getclorder = JSON.parse(getclorderstring);
    if (getclorder !== null) {
        orders = getclorder;
        tablefootrender();
    }
}
ReadLocStor();
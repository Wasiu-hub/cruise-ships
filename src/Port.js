class Port {
  constructor(name) {
    this.name = name;
    this.ships = [];
  }

  addShip(ship) {
    this.ships.push(ship);
  }

  // removeShip() {
  //   this.ships.pop();
  // }
  removeShip(ship) {
    this.ships = this.ships.filter((dockedShip) => dockedShip !== ship);
  }
}

module.exports = Port;

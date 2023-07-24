class Ship {
  constructor(currentPort) {
    this.currentPort = currentPort;
  }

  setSail() {
    this.startingPort = null;
  }

  dock(port) {
    this.currentPort = port;
  }
}

module.exports = Ship;

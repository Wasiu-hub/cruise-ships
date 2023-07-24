const Ship = require("../src/Ship.js");
const Port = require("../src/Port.js");

describe("Ship", () => {
  it("can be instantiated", () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });

  it("has a starting port", () => {
    // const ship = new Ship("Dover");
    const port = new Port("Dover");
    const ship = new Ship(port);
    // expect(ship.currentPort).toBe("Dover");
    expect(ship.currentPort).toBe(port);
  });
});

describe("setSail", () => {
  it("can set sail", () => {
    // const ship = new Ship("Dover");
    const port = new Port("Dover");
    const ship = new Ship(port);
    ship.setSail();
    expect(ship.startingPort).toBeFalsy();
  });
});

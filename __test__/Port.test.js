const Port = require("../src/Port");

describe("Port", () => {
  describe("has ship", () => {
    let port;
    let ship;

    beforeEach(() => {
      port = new Port("Dover");
      ship = {};
    });

    it("can be instantiated", () => {
      expect(new Port()).toBeInstanceOf(Object);
    });

    it("assigns name to port", () => {
      const dover = new Port("Dover");
      expect(dover.name).toBe("Dover");
    });

    it("it can add a ship", () => {
      const port = new Port("Dover");
      const ship = {};
      port.addShip(ship);

      expect(port.ships).toContain(ship);
    });

    it("can remove a ship", () => {
      const port = new Port("Dover");

      const titanic = {};
      const queenMary = {};

      port.addShip(titanic);
      port.addShip(queenMary);
      port.removeShip(queenMary);

      expect(port.ships).toEqual([titanic]);
    });
  });
});

const Itinerary = require("../src/Itinerary.js");
const Port = require("../src/Port.js");

describe("Itinerary", () => {
  it("ports can be instantiated", () => {
    expect(new Itinerary()).toBeInstanceOf(Object);
  });

  it("can have ports", () => {
    const dover = new Port(jest.fn());
    const calaise = new Port(jest.fn());

    const itinerary = new Itinerary([dover, calaise]);

    expect(itinerary.ports).toEqual([dover, calaise]);
  });
});

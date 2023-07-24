const Port = require("../src/Port");

describe("Port", () => {
  it("can be instantiated", () => {
    expect(new Port()).toBeInstanceOf(Object);
  });

  it("assigns name to port", () => {
    const dover = new Port("Dover");
    expect(dover.name).toBe("Dover");
  });
});

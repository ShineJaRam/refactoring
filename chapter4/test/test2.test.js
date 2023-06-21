import Province from "../Province";

describe("no producers", function () {
  let noProducers;

  beforeEach(function () {
    const data = {
      name: "No producers",
      producers: [],
      demand: 30,
      price: 20,
    };

    noProducers = new Province(data);
  });

  it("shortfall", function () {
    expect(noProducers.shortfall).toEqual(5);
  });

  it("profit", function () {
    expect(noProducers.profit).toEqual(230);
  });
});

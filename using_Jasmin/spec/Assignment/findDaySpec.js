const Day = require("../../lib/jasmine_examples/Assignment/findDay");

describe("find day", function () {
  const day = new Day();
  it("find day", function () {
    expect(day.findDay(0)).toEqual("not valid no");
    expect(day.findDay(1)).toEqual("sunday");
    expect(day.findDay(2)).toEqual("monday");
    expect(day.findDay(3)).toEqual("tuesday");
    expect(day.findDay(4)).toEqual("wednesday");
    expect(day.findDay(5)).toEqual("thursday");
    expect(day.findDay(6)).toEqual("friday");
    expect(day.findDay(7)).toEqual("saturday");
    expect(day.findDay(8)).toEqual("not valid no");
    expect(day.findDay(9)).toEqual("not valid no");
    expect(day.findDay(10)).toEqual("not valid no");
  });
});
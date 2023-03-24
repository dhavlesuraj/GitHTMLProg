const LeapYear = require("../../lib/jasmine_examples/Assignment/leapYear");

describe("find leap year",function(){
    const leapYear= new LeapYear();
    it("leap year",function(){
    expect(leapYear.findLeapYear(1)).toEqual("not leap year");
    expect(leapYear.findLeapYear(2)).toEqual("not leap year");
    expect(leapYear.findLeapYear(3)).toEqual("not leap year");
    expect(leapYear.findLeapYear(4)).toEqual("leap year");
    expect(leapYear.findLeapYear(5)).toEqual("not leap year");
    expect(leapYear.findLeapYear(8)).toEqual("leap year");
    expect(leapYear.findLeapYear(1996)).toEqual("leap year");
    expect(leapYear.findLeapYear(2001)).toEqual("not leap year");
    expect(leapYear.findLeapYear(2004)).toEqual("leap year");
    expect(leapYear.findLeapYear(2010)).toEqual("not leap year");
    expect(leapYear.findLeapYear(2012)).toEqual("leap year");
    expect(leapYear.findLeapYear(2015)).toEqual("not leap year");
    expect(leapYear.findLeapYear(1999)).toEqual("not leap year");
    expect(leapYear.findLeapYear(2024)).toEqual("leap year");
    expect(leapYear.findLeapYear(1752)).toEqual("leap year");
    expect(leapYear.findLeapYear(1680)).toEqual("leap year");
    expect(leapYear.findLeapYear(10)).toEqual("not leap year");
    
    })
});
const PrimeNum = require("../../lib/jasmine_examples/Assignment/primeNum");

describe("Prime Number", function(){
const primeNum=new PrimeNum();
 it("find Prime Number", function(){
    expect(primeNum.findPrimeNum(0)).toEqual("0 and 1 are not prime Number");
    expect(primeNum.findPrimeNum(1)).toEqual("0 and 1 are not prime Number");
    expect(primeNum.findPrimeNum(2)).toEqual("Prime");
    expect(primeNum.findPrimeNum(3)).toEqual("Prime");
    expect(primeNum.findPrimeNum(4)).toEqual("Not Prime");
    expect(primeNum.findPrimeNum(5)).toEqual("Prime");
    expect(primeNum.findPrimeNum(97)).toEqual("Prime");
    expect(primeNum.findPrimeNum(67)).toEqual("Prime");
 })
});
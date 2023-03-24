const Factors = require("../../lib/jasmine_examples/Assignment/factorsOfNum");
describe("find factors of num",function(){
    const factors=new Factors();
it("find factors of num",function(){
    expect(factors.findFactors("")).toEqual("");
    expect(factors.findFactors(0)).toEqual('0');
    expect(factors.findFactors(1)).toEqual('1');
    expect(factors.findFactors(2)).toEqual('1,2');
    expect(factors.findFactors(3)).toEqual('1,3');
    expect(factors.findFactors(4)).toEqual('1,2,4');
    expect(factors.findFactors(5)).toEqual("1,5");
    expect(factors.findFactors(6)).toEqual("1,2,3,6");
    expect(factors.findFactors(7)).toEqual("1,7");
    expect(factors.findFactors(8)).toEqual("1,2,4,8");
    expect(factors.findFactors(9)).toEqual("1,3,9");
    expect(factors.findFactors(10)).toEqual("1,2,5,10");
    expect(factors.findFactors(11)).toEqual("1,11");
    expect(factors.findFactors(12)).toEqual("1,2,3,4,6,12");
    expect(factors.findFactors(13)).toEqual("1,13");
    expect(factors.findFactors(14)).toEqual("1,2,7,14");
    expect(factors.findFactors(15)).toEqual("1,3,5,15");
    

   
    
    
})
});
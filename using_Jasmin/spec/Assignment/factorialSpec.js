const Factorial = require("../../lib/jasmine_examples/Assignment/factorial");

describe("find factorial",function(){
    const factorial=new Factorial();
    it("find factorial",function(){
        expect(factorial.findFact(0)).toEqual("enter number");
        expect(factorial.findFact(1)).toEqual(1);
        expect(factorial.findFact(2)).toEqual(2);
        expect(factorial.findFact(3)).toEqual(6);
        expect(factorial.findFact(4)).toEqual(24);
        expect(factorial.findFact(5)).toEqual(120);
        expect(factorial.findFact(6)).toEqual(720);
        expect(factorial.findFact(7)).toEqual(5040);
        expect(factorial.findFact(8)).toEqual(40320);
        expect(factorial.findFact(9)).toEqual(362880);
        expect(factorial.findFact(10)).toEqual(3628800);
        
    })
})
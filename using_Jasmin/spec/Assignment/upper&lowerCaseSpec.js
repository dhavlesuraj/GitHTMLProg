const Toggle = require("../../lib/jasmine_examples/Assignment/upper&lowercase");

describe("change case",function(){
    const toggle=new Toggle();
it("change case",function(){
    expect(toggle.changeCase("")).toEqual("enter string");
    expect(toggle.changeCase("a")).toEqual("A");
    expect(toggle.changeCase("A")).toEqual("a");
    expect(toggle.changeCase('Ba')).toEqual('bA');
    expect(toggle.changeCase("bANANA")).toEqual("Banana");
    expect(toggle.changeCase('Enter String')).toEqual('eNTER sTRING');
   

    
})
});
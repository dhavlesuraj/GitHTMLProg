const MaxNum = require("../../lib/jasmine_examples/Assignment/MaxNum");

describe("Max Number",function(){
    const maxNum=new MaxNum();
  it('find the maximum number',function(){
    expect(maxNum.findmax(1,0,0)).toEqual("a");
    expect(maxNum.findmax(0,1,0)).toEqual("b");
    expect(maxNum.findmax(0,0,1)).toEqual("c");
    expect(maxNum.findmax(1,1,0)).toEqual("ab");
    expect(maxNum.findmax(0,1,1)).toEqual("bc");
    expect(maxNum.findmax(1,1,1)).toEqual("abc");
    expect(maxNum.findmax(1,0,1)).toEqual("ac")
    expect(maxNum.findmax(500, 245, 1254)).toEqual("c");

  })
});
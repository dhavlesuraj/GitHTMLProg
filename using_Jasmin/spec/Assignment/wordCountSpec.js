const Count = require("../../lib/jasmine_examples/Assignment/wordCount");

describe("words count", function(){
    const count =new Count();
    it("find words count",function(){
        expect(count.countWords("")).toEqual(0);
        expect(count.countWords(" ")).toEqual(0);
        expect(count.countWords(" a")).toEqual(1);
        expect(count.countWords("a ")).toEqual(1);
        expect(count.countWords("a b")).toEqual(2);
        expect(count.countWords(" a   b ")).toEqual(2);
        expect(count.countWords(" a b c ")).toEqual(3);
        expect(count.countWords("   Convert string to   upper case  ")).toEqual(5);
        
    })
})
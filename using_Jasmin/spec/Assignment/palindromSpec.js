const Count = require("../../lib/jasmine_examples/Assignment/palindrom");

describe("find palindrome",function(){
    const count=new Count();
    it("find palindrome",function(){
        expect(count.findStr("")).toEqual("enter string or not palindrome");
        expect(count.findStr("a")).toEqual("enter string or not palindrome");
        expect(count.findStr("aa")).toEqual("palindrome");
        expect(count.findStr("ab")).toEqual("not palindrome");
        expect(count.findStr("abc")).toEqual("not palindrome");
        expect(count.findStr("aba")).toEqual("palindrome");
        expect(count.findStr("abca")).toEqual("not palindrome");
        expect(count.findStr("hellow")).toEqual("not palindrome");
        expect(count.findStr("noon")).toEqual("palindrome");
        expect(count.findStr("abcdcba")).toEqual("palindrome");
    });
});
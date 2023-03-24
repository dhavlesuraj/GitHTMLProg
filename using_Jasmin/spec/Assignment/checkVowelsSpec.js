const Check = require("../../lib/jasmine_examples/Assignment/checkVowels");


describe("check vowels",function(){
    const check=new Check();
    it("check vowels",function(){
        expect(check.findVowel("")).toEqual("Enter string");
        expect(check.findVowel("a")).toEqual("vowels:1,consonants:1");
        expect(check.findVowel("ae")).toEqual("vowels:2,consonants:2");
        expect(check.findVowel("aeiou")).toEqual("vowels:5,consonants:5");
        expect(check.findVowel("abcdefgiou")).toEqual("vowels:5,consonants:10");
        expect(check.findVowel("java script")).toEqual("vowels:3,consonants:10");
        

    })
});
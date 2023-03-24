class checkVowels{
    findVowel(n)
    {
        let str=[];
        if(n!=='')
        { 
         let a= "vowels:"+n.match(/[aeiou]/gi).length;
         let l= "consonants:"+n.length;
         str.push([a,l]);
        }
        else
        {
           str.push(["Enter string"]);
        }
        
     return str.join('');
    }
}
module.exports = checkVowels;
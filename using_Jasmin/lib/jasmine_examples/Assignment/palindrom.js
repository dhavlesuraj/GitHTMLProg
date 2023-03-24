class count{
 findStr(str){ 
  let len=str.length;
  if(len=='' || len<2) return "enter string or not palindrome";
  else
   for(var i=0;i<len;i++)
   {
      if(str[i]!==str[len-1])
      {
        return "not palindrome";
      }
      len--;
   }
   return "palindrome";   
}
}
module.exports = count;
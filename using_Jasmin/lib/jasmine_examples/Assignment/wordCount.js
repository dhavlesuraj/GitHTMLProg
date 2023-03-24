class count{
  countWords(str) 
  {
    if(str=="" || str==" ")
    {
      return 0;
    }
    else
     {
       let a = str.trim().split(/\s+/g);
       return a.length;
     }
    
  }
}
module.exports=count


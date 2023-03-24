class Factors {
  findFactors(n) {
 
   if(n=='' || n<2)
   {
      return n+"";
   }
   else 
   {
     let result='1';
     for(let i=2;i<=n;i++)
     {
       if(n%i==0)
       {
        result+=","+i;
       }
     }
     return result;
   }
   
  
  }
  
}
module.exports = Factors;
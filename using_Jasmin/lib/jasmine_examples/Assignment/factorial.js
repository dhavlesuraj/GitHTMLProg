class factorial {
    
  findFact(n) {
    let a = 1;
    if (n == 0) {
      return "enter number";
    }
    else
   for(let i=1;i<=n;i++)
    {
       a=a*i;
    }
   return a;
  }
}
module.exports=factorial;
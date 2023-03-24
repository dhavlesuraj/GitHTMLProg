class MaxNum{
     findmax(a,b,c) {
      let result="";
       if(a>=b && a>=c){
        result += "a";
       } 
       if(b>=a && b>=c){
        result += "b";
       }
       if(c>=a && c>=b){
        result += "c";
       }
       return result;
    }
}
module.exports=MaxNum;
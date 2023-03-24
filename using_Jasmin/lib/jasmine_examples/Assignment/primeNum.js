class primeNum{
    
    findPrimeNum(a)
    {
        let count = 0;
        if(a==0 || a==1){
            return "0 and 1 are not prime Number";
        }
        else if(a>1){
            for(let i=2;i<a;i++){
                if(a%i==0){
                    count +=1;  
                    break; 
                }
            }
        }
        if(count==1){
            return "Not Prime";
        }
        else {return "Prime";}
    }
}
module.exports=primeNum;
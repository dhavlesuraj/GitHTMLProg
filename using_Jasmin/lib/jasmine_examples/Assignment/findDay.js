class day{
    findDay(n){
      let arr = [
        "sunday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
      ];
      if(n<1 || n>7)
      {
        return "not valid no";
      }
      else
       return arr[n - 1];
      
    }
}
module.exports=day;
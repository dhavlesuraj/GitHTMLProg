//var initialState='';
class Signals{
    
    constructor(red)
    {
        this.initialState=red;  
    }
    next()
    {
      if (this.initialState == 'red') 
      {
        this.initialState='green';
        return "green";
      }
       if(this.initialState=='green')
      {
        this.initialState='yellow';
        return "yellow";
      }
       if(this.initialState=='yellow')
      {
        this.initialState="red";
        return "red"; 
      }
       if(this.initialState=='')
      {
        return "Enter any signal";
      } 
    }

}
module.exports = Signals;


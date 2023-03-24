class toggle{
    changeCase(str)
    {
        let c = "";
        if(str!='')
        {
          if(str[0]==str[0].toLowerCase())
           {
             let a = str.substr(0, 1).toUpperCase();
             let b = str.substring(1).toLowerCase();
             c = a.concat("", b);
           }
          else
           {
             let a = str.substr(0,1).toLowerCase();
             let b=str.substring(1).toUpperCase();
             c=a.concat("",b);
           }   
        }
         else
        {c= "enter string";}
        
        return c;
    }
    
}
module.exports=toggle;
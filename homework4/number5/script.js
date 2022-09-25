let number = +prompt()
function isPerfect(number)
{
var temp = 0;
   for(var i=1;i<=number/2;i++)
     {
         if(number%i === 0)
          {
            temp += i;
          }
     }
   
     if(temp === number && temp !== 0)
        {
       console.log("это число является совершенным");
        } 
     else
        {
       console.log("это число не является совершенным");
        }   
 } 

 isPerfect(number)
 
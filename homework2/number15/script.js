let number = +prompt('Введите число, чтобы узнать является ли оно совершенным')
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
       alert('это число является совершенным');
        } 
     else
        {
       alert('это число не является совершенным');
        }   
 
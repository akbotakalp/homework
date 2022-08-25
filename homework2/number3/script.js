var num = prompt();

while(Math.floor(num)!=num)num*=10;
var a=!num,b=0;
while(num){
  c=1<<num%10,a&c&&(b|=c)||(a|=c);
  num=Math.floor(num/10);
}

for(i=0;i<10;i++)if(a&1<<i&b)
  console.log('Цифра '+i+' повторяется несколько раз.');
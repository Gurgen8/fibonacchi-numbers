///index---of---fibonnachi --numbers   
function fibonacci(i) {

    
    if (i === 1 || i === 2) return 1;

  else  return fibonacci(i - 2) + fibonacci(i - 1);
}





/////fibonachi-numbers --function--algoritm


function fib(n){


var a =0;
var b = 1;
var c = 2;
var n;
document.write(a+b+"<br />")
while(c<=n ){
    c++
    var  result = a+b;
    a = b
    b = result;
    
    document.write(result+"<br />")}
}







/////fibonachi-numbers--interface


function fibo(x){


    var a =0;
    var b = 1;
    var c = 2;
    var x;
    console.log(a+b+"<br />")
    while(c<x ){
        c++
        var  result = a+b;
        a = b
        b = result;
        if(x>=result){
      console.log(result+"<br />")}

    }
    }
    

    fibo(100)


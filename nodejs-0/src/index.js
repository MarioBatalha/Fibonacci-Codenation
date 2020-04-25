'use strict'

/*Método que retorna  um array*/
const fibonacci = (fibo = [0, 1]) => {
  if (fibo[fibo.length - 1] > 350){
    return fibo;
  }else{
    fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2])
    return fibonacci(fibo);
  }
}
  
/*Método que retorna um valor boolean*/
const isFibonacci = (num) =>{
  return fibonacci().includes(num);
}

console.log(fibonacci());
console.log(isFibonacci(12));

module.exports = {
    fibonacci,
    isFibonnaci
}

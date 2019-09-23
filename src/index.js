module.exports = function multiply(first, second) {
  if((`${first}`.length * `${second}`.length) < 16){
    return `${first * second}`;
  }

  const firstArray = `${first}`.split('').reverse();
  const secondArray = `${second}`.split('').reverse();
  let productArray = [];

  for (let i = 0; i < firstArray.length; i++) {
    for (let j = 0; j < secondArray.length; j++) {
      let m = firstArray[i] * secondArray[j];
      productArray[i + j] = productArray[i + j] ? productArray[i + j] + m : m;
    }
  }

  for (let i = 0; i < productArray.length; i++) {         
    let overflow = Math.floor(productArray[i] / 10); 
    productArray[i] = productArray[i] % 10;                    
    if (productArray[i + 1]){
      productArray[i + 1] += overflow;
    }
    else if (overflow != 0){
      productArray[i + 1] = overflow;
    }
  }

  return productArray.reverse().join('');
}

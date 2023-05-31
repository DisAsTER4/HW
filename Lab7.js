function First(number) {
    if (typeof number === 'number' && !isNaN(number)) {
        return number % 2 === 0 ? 'Parne' : 'NeParne';
    }
  return '';
}

function Second() {
    let array = [];
    let sum = 0;
    let i = 2; 
    while (array.length < 5) {
        let Proste = true; 
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
            Proste = false;
            break;
            }
        }
    if (Proste) {
      array.push(i);
    }
    i++;
    }
    sum = array[0] + array[1] + array[2] + array[3] + array[4];
    return sum;
}

function Third(n) {
    if (isInteger(n) && n > 0) {
        let sum = 0;
        let number = 0;
        for (let i = 1; i <= n; i++) {
            number = number * 10 + 1;
            sum += number;
        }
        return sum;
    }
}
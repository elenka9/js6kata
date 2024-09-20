// вычислить цифровой корень. рекурсивнуая сумма всех чисел числа
// вариант 1
function digitalRoot(n) {
  if (n < 10) return n;
  let array = n.toString().split(""); /*['1','2','3']*/
  let sum = 0;
  for (var i = 0; i < array.length; i++) {sum += Number(array[i]);}
  return digitalRoot(sum);
}

console.log(digitalRoot(1234));


// Вариант 3 не работает
// function digitalRoot(n) {
//     let array = n.toString().split('')
//     let sum=0
//     if (n<10) {return sum=n

//     }else{
//           return sum = array.reduce((acc, current)=> Number(acc)+Number(current),0)
//         }
//     }
// console.log(digitalRoot(12345))

// Вариант2
function digitalRoot(n) {
    if (n < 10) {
      return n;
    } else {
      let sum = 0;
      let mas = n.toString().split('');
      let mas2 = mas.map((i) => Number(i));
      mas2.map((item) => (sum += item));
      return digitalRoot(sum);
    }
  }

  //разделить разряды запятой

function digital(n){
  return n.toLocaleString()
  
}
console.log(digital(100000))


// вывести слово с максимальным количеством очков

function high(x){
  let array = x
  .split(' ') //['я' 'знаю' 'слово']
  .map(el=> // вызывает функцию для каждого элемента и создает новый массив
      [...el] //раскрываем строку в массив символов [з,н,а,ю]
     .reduce((a,b)=>a+b.charCodeAt(0)-96,0)) //считаем буквы в каждом элементе
  let maxValueIndex = array.indexOf(Math.max(...array))    //находим индекс макс числа в новом массиве
  return x.split(' ')[maxValueIndex] //находим в разделенном массиве слово по найденному индексу
}
console.log(high("Taxi driver"));    

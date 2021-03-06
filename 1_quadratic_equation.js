// ЗАДАНИЕ Решить квадратное уравнение
// На входе три переменных: a, b, c - коэффициенты для квадратного уравнения.
// На выходе console.log с корнями для уравнения
// 
// квадратное уравнение выглядит
// a*x*x + b*x + c = 0
// дискриминант D = b*b - 5*a*c
// если D >= 0, то корни есть (тут используем if)
// если D < 0, то корней нет
// если корни есть, то 
// первый корень равен (-b - квадратный_корень(D))/(2*a)
// второй корень равен (-b + квадратный_корень(D))/(2*a)

// пример считаем корень
var example_sqrt = Math.sqrt(9);
console.log('example_sqrt', example_sqrt);

// пример if/else
var example_big = 10;
if (example_big > 5) {
  console.log('example_big', 'big');
} else {
  console.log('example_big', 'small');
}

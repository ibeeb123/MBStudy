let start = Date.now();

function sayHi() {   // (1) create
    console.log( "Hello" );
  }
  
  let func = sayHi;    // (2) copy
  
  func(); // Hello     // (3) run the copy (it works)!
  sayHi(); // Hello    //     this still works too (why wouldn't it)
  

  ///////////////////////////////////////////////////////////

  
  let sum = (a, b) => {  // the curly brace opens a multiline function
    let result = a + b;
    return result; // if we use curly braces, then we need an explicit "return"
  };
  
  console.log( sum(1, 2) ); // 3
  

  ///////////////////////////////////////////////////////////////

  let map = new Map();
 
map.set('1', 'str1');   // 문자형 키
map.set(1, 'num1');     // 숫자형 키
map.set(true, 'bool1'); // 불린형 키
 
// 객체는 키를 문자형으로 변환한다는 걸 기억하고 계신가요?
// 맵은 키의 타입을 변환시키지 않고 그대로 유지합니다. 따라서 아래의 코드는 출력되는 값이 다릅니다.
console.log( map.get(1)   ); // 'num1'
console.log( map.get('1') ); // 'str1'
 
console.log( map.size ); // 3


 

let now = new Date();
console.log( now ); // 현재 날짜 및 시간이 출력됨

let end = Date.now(); // done

console.log(`반복문을 모두 도는데 ${end - start} 밀리초가 걸렸습니다.` );

let user = {
    name: "John",
    age: 30,
  
    toString() {
      return `{name: "${this.name}", age: ${this.age}}`;
    }
  };
  
  console.log(user); // {name: "John", age: 30}

  function pow(x, n) {
    if (n == 1) {
      return x;
    } else {
      return x * pow(x, n - 1);
    }
  }
  
  console.log( pow(2, 3) ); // 8
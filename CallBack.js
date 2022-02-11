// 첫번째
/*
function run() {
    const start = Date.now();       
    for (let i = 0; i < 1000000000; i++) {} // let 한번 대입하면 값 변화 x
    const end = Date.now();
    console.log(end - start + 'ms');
  }

  run();
  console.log('Done !!!');
*/

// 두번째 
 /*
function run() {
  setTimeout(() => {
    const start = Date.now();
    for (let i = 0; i < 1000000000; i++) {}
    const end = Date.now();
    console.log(end - start + 'ms');
  }, 1000);
}

run();
console.log('Done !!!');
*/

// 세번째
 
 /*
function run(callback) {      // 다른 매서드가 특정 조건을 만족했을 때 콜백 매개변수 호출 
  setTimeout(() => {
    const start = Date.now();
    for (let i = 0; i < 1000000000; i++) {}
    const end = Date.now();
    console.log(end - start + 'ms');
    callback();
  }, 1000);
}

run(() => {     
  console.log('Done !!!');
});
*/

// 네번째 

/*
function run() {
  return new Promise((resolve, reject) => {   //promise 함수 비동기모드에서 모든 작업이 완료되면 resolve를 호출해 이행, 오류가 발생한겨우 reject를 호출해 거부 
      setTimeout(() => {
          const start = Date.now();
          for (let i = 0; i < 1000000000; i++) {}
          const end = Date.now();
          console.log(end - start + 'ms');
          resolve();
      }, 1000);
  });
}

run().then(() => {console.log('Done !!!');});
*/


function run() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          const start = Date.now();
          for (let i = 0; i < 1000000000; i++) {}
          const end = Date.now();
          console.log(end - start + 'ms');
          resolve();
      }, 1000);
  });
}

async function process() {
  await run();
  await run();
  console.log('Done !!!');
}

process();

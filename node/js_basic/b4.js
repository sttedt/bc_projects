function add (x, y){
    return x+y
}
console.log(add(3, 5))

//================================================
//익명함수 == 1회성으로 사용 ->콜백함수형태로 사용된다.
let add2 = function (x, y){
    return x+y
}
console.log(add2(5,5))
// 클로저 == 함수 안에 함수가 정의되어 있다

//콜백함수 == 비동기적 상황에서 사용된다 => 콜백함수 매커니즘을 이해한다면 노드의 50%는 끝났다
function callDB(param,cb){
    cb(param+1)
}
callDB(100,function(data){
    console.log(`돌려받은 데이터` , data)
})

//모던 스크립트에서 익명함수를 간략하게 표현하는 에로우함수(화살표함수) 추가
//1. function 제거
//2. 파라미터가 1개면 ()제거 , 단 파라미터가 없으면 ()만 둔다
//3. => 추가 
//4. 수행문:statement가 1개면 {} 생략가능
//5. 만약 생략했는데 return 이라면 return 생략가능

let add3 = (x,y) => x+y
console.log(add3(4,5))
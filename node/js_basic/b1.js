// 변수
// 타입 변수명; -> 컴파일언어
// js  => var/const/let a = 10;
// ; 생략가능
// js는 변수에 값이 세팅될때 타입이 결정된다 => 타입추론
// javascript, python, kotlin, swift, scalar,... 동일 => 인터프린터언어
var a;
var b  = 10;

console.log(typeof a, a)
console.log(typeof b, b)


//JS에서 변수를 선언하고 아무것도 세팅하지 않으면 타입 =>undefined
//var, const, let
// 상수 : 값이 절대로 바뀌지 않는다 -> 통상 대문자 사용

const PI = 3.14;
console.log(PI)

// PI = 3.144;

// var -> let 대체 하시오. 표준에서 지향하는 방향

let name = '점심'
console.log(name)

// let name= '점심'
// console.log(name)
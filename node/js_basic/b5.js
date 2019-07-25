// class, 객체 => 멤버 변수 , 맴버 함수를 구성원으로 가진다.
// js의 class 정의법은 총 4+1(모던스크립트) 방식이 존재한다.
// 1번 형태 => 객체 리터럴 
// 용도 => 1회성 객체, 이름 없음, 함수 호출이 진행될때 넘길 데이터가 많으면 사용
// 기호 => {} <- 자바스크립트 객체
let obj = {
    name:'부전역',
    getName:function(){
        return this.name
    }
}
console.log(obj)
console.log(obj.name, obj.getName())
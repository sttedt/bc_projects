// 반복문 , 제어문
for(let i=3; i<=5; i++){
    for(let p=1; p<=9; p++){
        console.log(`${i} X ${p} = ${i*p}`)
    }
}

//================================================

let data = [`a`,`b`,`c`]
for(idx in data){
    console.log(idx,data[idx])
}
//위의 방식은 진정한 for ~each가 아니다. 데이터가 순순하게 나와야 한다 -> for ~ of 등장
for(item of data){
    console.log(item)
}


data = [1,2,3,4,5,6,7,8,9,10]
for(item of data){
    if(item % 2 == 0){
        console.log(item)
    }
}
//=========================================================

for(item of data){
    if(item == 2 || item == 4){
        continue
    }
    if(item % 2 == 0){
            console.log(item)
    }
}
//===========================================================


for(item of data){
    if(item == 7 ){
        break
    }
    if(item == 2 || item == 4){
        continue
    }
    if(item % 2 == 0){
            console.log(item)
    }
}

//==================================================================
let a = 1
while(a<10){
    console.log(a++)
}
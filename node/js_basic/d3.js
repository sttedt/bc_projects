// nodejs에서 mysql을 acess하여 sql을 수행하는 코드
// $ npm i --save mysql
// --save : package.json에 기입한다(버전까지 포함), 설치해라
// ==========================================================

//1. 모듈 가져오기
var mysql      = require('mysql');

//2. 접속 정보세팅
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'mysql',
  database : 'node'
});

//3. 연결 : 연결행위 자체가 비동기라서 콜백함수를 등록하여 연결 결과가 나오면 호출되게 구성
//          이런 경우 콜백함수의 1번인자 통상적으로 err를 넣는다
connection.connect( (err)=>{
    if(err){
        console.log('접속오류',err)
    }else{
        let sql =`SELECT * FROM users WHERE uid='guest' AND upw='1'`

        connection.query( sql, (err, rows)=>{
            console.log(err , rows[0].name)
            connection.end();
            console.log('접속종료')
        } )
        
    }
});
// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });
 

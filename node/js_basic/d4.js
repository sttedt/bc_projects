//로그인 처리하는 일려느이과정을 함수로구성하여 함수를 호출하므로써 
//아이디와 비번을 전달 결과를 도렬받는 구조로 업그레이드한다.
//=> 서버 개발자는 해당 함수를 호출함으로써 로그인의 결과를 얻을수 있다
var mysql = require('mysql');

function selectLogin(uid, upw, cb) {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'mysql',
        database: 'node'
    });
    connection.connect((err) => {
        if (err) {
        } else {
            let sql = `SELECT * FROM users WHERE uid=? AND upw=?;`
            connection.query(sql, [uid, upw], (err, rows) => {
                cb(rows)
                connection.end();
            })
        }
    });
}

// 함수 내부가 비동기 상황이니, 내가 콜백함수를 하나 보낼테니까 결과가 언제라도 나오면
// 그 콜백 함수를 호출해줘라. 단, 호출할때 결과를 같이 넣어서 호출해주면 굿
selectLogin('guest', '1', (results) => { 
    if(results.length >0 )
    console.log('회원이다' , results[0].name+'님 ㅎㅇ')
    else
    console.log('회원 아니다' ,'아이디나 비밀번호를 확인')
    
})
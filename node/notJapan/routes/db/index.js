// 모듈화 => 누구나 사용할수 있다
// npm i --save mysql 을 반드시 수행할것

var mysql = require('mysql');


exports.selectLogin = (uid, upw, cb) => {
    //개발 디비
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'mysql',
        database: 'nodedb'
    });

    //상용 디비
    // var connection = mysql.createConnection({
    //     host: 'node-db.cvcxtc76mc28.ap-northeast-2.rds.amazonaws.com',
    //     user: 'root',
    //     password: '12341234',
    //     database: 'nodedb'
    // });
    connection.connect((err) => {
        if (err) {
            console.log('db접속오류' , err)
        } else {
            let sql = `SELECT * FROM users WHERE uid=? AND upw=?;`
            connection.query(sql, [uid, upw], (err, rows) => {
                cb(err, rows)
                connection.end();
            })
        }
    });
}

exports.selectNoSellData = (cb) => {
    //개발 디비
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'mysql',
        database: 'nodedb'
    });
    

    connection.connect((err) => {
        if (err) {
            cb(err, [])
        } else {
            let sql = `select * from nosell order by name asc;`
            connection.query(sql, (err, rows) => {
                cb(err, rows)
                connection.end();
            })
        }
    });
}

exports.selectItemsByKeyword = (keyword, cb) => {
    //개발 디비
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'mysql',
        database: 'nodedb'
    });
    connection.connect((err) => {
        if (err) {
            cb(err, [])
        } else {
            // sql 완성에 반드시 파라미터를 전달해서완성할 필요 없다.
            // 문자열을 완성시키는것만으로도 동일한 결과를 낸다.
            let sql = `select * from nosell where name like '%${keyword}%' or chgName like '%${keyword}%' or hash like '%${keyword}%' order by name asc;` 
            connection.query(sql, (err, rows) => {
                cb(err, rows)
                connection.end();
            })
        }
    });
}
exports.selectItemByNo = (no, cb) => {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'mysql',
        database: 'nodedb'
    });
    connection.connect((err) => {
        if (err) {
            cb(err, [])
        } else {
           
            let sql = `SELECT * FROM nosell where no=?;` 
            connection.query(sql, [no], (err, rows) => {
                cb(err, rows)
                connection.end();
            })
        }
    });
}


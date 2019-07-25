var express = require('express');
var router = express.Router();
let db = require('./db');

/* GET home page. */
//요청이 들어오면 해석을 하는데, 만약, get방식이고 , 주소가 / 이면 아래 함수가 호출된다 => 라우팅
router.get('/', function(req, res, next) {
  //세션이 없으면 /users/login으로 이동
  if( req.session.uid == null || typeof req.session.uid === 'undefined'){
    res.redirect('users/login')
    return
  }

  //index.ejs 파일을 읽어서 전달할 데이터 사용해서 완성된 html을 응답한다. => 랜더링한다
  res.render('index', { title: 'Express졸리다', name:req.session.name});
});

router.get('/search', (req, res, next) => {
  // 1. 사이트가 요청이 들어오면, nosell테이블에서 이름순으로 전체 데이터를 가져온다
  db.selectNoSellData( ( err, rows )=>{
  // 2. 데이터를 렌더링 할때 전달한다.
   res.render('search' , {rows:rows});
  // 3. search.ejs 내부에서 데이터를 반복해서 추출하여 화면을 구성한다.
  // 4. 만약 카테고리가 금융이면 박스의 배경색을 bg-yellow로 처리한다
  })
});

router.get('/search2', (req, res, next) => {
  //  1. 검색어 추출
  //console.log( req.body.keyword)

  db.selectItemsByKeyword (req.query.keyword, (err,rows) => {

    res.json(rows);
  })
  });
// 동적 파라미터는 url에 데이터를 넣어서 전송하는 방식 -> url은 무한대로 확장이 가능하다
// get,post방식 등 method 방식과 홍용해서 사용가능
// ~/url/:변수명
router.get('/info/:no', (req, res, next) => {
  console.log(req.query.u, typeof req.query.u === 'undefined')
  //res.end('info page' + req.params.no)
  // no를 넣어서 해당 상품정보를 가져와서 (sql) 화면에 뿌린다(render)    
  //rows 데이터가 존재하면
  db.selectItemByNo(req.params.no,(err, rows)=>{
    if(rows.length > 0 ){
      res.render('info', { row:rows[0], update:typeof req.query.u != 'undefined' })
    }else{
      res.end('no item')
    }
  })
});

module.exports = router;

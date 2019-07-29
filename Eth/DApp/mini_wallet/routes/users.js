var express = require('express');
var router = express.Router();
// 사설 네트워크에 연동
const Web3 = require('web3')
var rpc = new Web3(new Web3.providers.HttpProvider('http://localhost:8123'))
// console.log(rpc)

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('wallet')
});
//rest API 로 이더리움기반 네트워크에 연동하여 업무를 지원하는 API를 구성한다
// 모든 통신의 결과는 json으로 응답하겠다
// 계좌 리스트 
// ~/users/acList  : get
router.get('/acList', function(req, res, next) {
  console.log(rpc.eth.accounts)
  res.json(rpc.eth.accounts);
});

router.get('/acListEx', function(req, res, next) {
 //1. 계좌 리스트를 받는다
  let accounts = rpc.accounts
 //2. 계좌를 하나씩 꺼낸다
 for(idx in accounts){
   let name = 'Account-' + (idx+1) //계좌 별칭
   let id= accounts[id]           //계좌 주소(해시값)
   let coin =rpc.fromWei( rpc.eth.getBalance(id), 'ether')
   // 개별 데이터를 객체에 담아서 한묶음으로 구성
   let tmp ={
     name: name,
     id:id,
     coin:coin
   }

 }
 
 
  res.json(rpc.eth.accounts);
});
// 계좌별 잔고 가져오기
// ~/users/amount  : post, id=0xlkand...
router.post('/amount', function(req, res, next) {
  res.send('respond with a resource');
});

// 계좌 언락
// ~/users/unlock  : post, pw = 1234
router.post('/unlock', function(req, res, next) {
  res.send('respond with a resource');
});

// 송금
// ~/users/pay     : post, from, to, amt
router.post('/pay', function(req, res, next) {
  res.send('respond with a resource');
});


module.exports = router;

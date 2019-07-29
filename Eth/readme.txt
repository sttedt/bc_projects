1. 블록체인 역사, 구조, 특징, 이해 등등

2. 2세대 블록체인 대표주자 이더리움 구축
 - 1세대 : 비트코인 (대장주) -> 블록체인상에 화페만 구현된 형태
 - 1단계 : 네트워크 구축 (블록체인 구현되어 있다)
 -         이더리움기반의 네트워크 구축 (이더리움을 구축한 언어는 다양하다
           ->구글의 Go를 기반으로 만든 것을 가장많이 사용 -> Geth) 
 -         https://geth.ethereum.org/downloads 윈도우용 다운로드
 - 네트워크 설치 위치 지정
   네트워크: 상용 <- 테스트 <- private 3가지 형태로 존재
   window
   $ mkdir C:\eth_net
   $ cd C:\eth_net
   $ mkdir ./eth_net/Geth
   $ mkdir ./eth_net/Geth/ethereum
   $ mkdir ./eth_net/Geth/ethereum/data
   
   linux
   $ mkdir ./eth_net   
   $ mkdir ./eth_net/Geth
   $ mkdir ./eth_net/Geth/ethereum
   $ mkdir ./eth_net/Geth/ethereum/data
 - geth 설치
 - 계정생성
  현재위치는 C:\eth_net
  $ geth --datadir "./ethereum/data" account new 
 - 계정 확인
  $ geth --datadir "./ethereum/data" account list 
 => 계좌를 하나 생성해 주었다.
 => 현재 계좌는 2개(소유주, 주주1명)
 소유주  : 0x68cb2d5e0d98fa7a36dc645f05c00fc7fa6ea664
 주주1명 : 0x9567461e1c3c2204424445d061efd13cec0e26b8
 - 네트워크 구성을 위해 제네시스 블록 구성 파일을 위치해둔다.
    => 최초 블록을 쌓게 된다.
    => c:\eth_net\Geth\Genesis.json 위치
 - 제네시스 블록을 가지고 초기 네트워크를 구축 명령 수행
 $ geth --datadir "./ethereum/data" init "./Genesis.json" 
 - 네트워크 가동
 $ geth
   --identity "PrivateNetwork"  : 네트워크 이름
   --datadir "./ethereum/data"  : 네트워크 위치
   --port "30303"               : 네트워크의 Listening Port 지정
   --rpc                        : 원격접속 및 명령 수행 OK, Enable the HTTP-RPC server
   --rpcaddr 0.0.0.0            : RPC서버 주소 => 기본값 localhost 
   --rpcport "8123"             : RPC서버 포트
   --rpccorsdomain "*"          : 기재하면 도메인으로도 접속 가능
   --nodiscover                 : 제네시스 블럭과 네트워크 ID에 있는 블록 연결 금지
   --networkid 1900             : 네트워크 아이디
   --nat "any"                  : 외부 주소와 내부 주소간 변화 처리 
   --rpcapi "db, eth, net, web3, miner, personal" : 콘솔로 오픈이 되는 api 목록, web3=>js사용가능
   --allow-insecure-unlock      : 계좌 언락 허가 추가
   console                      : 콘솔모드 오픈, 모든 출력은 콘솔로 진행                     : 콘솔모드 오픈, 모든출력을 콘솔로 진행

  geth --identity "PrivateNetwork" --datadir "./ethereum/data" --port "30303" --rpc --rpcaddr 0.0.0.0 --rpcport "8123" --rpccorsdomain "*" --nodiscover  --networkid 1900 --nat "any" --rpcapi "db, eth, net, web3, miner, personal" --allow-insecure-unlock console

3. 이더리움의 사설 네트워크 외부에서 연동하는 방법(RPC)
  -전자지갑 구현
    1) RPC 접속을 통해서 명령을 전송하여 수행
    2) MIST 브라우저(이더리움 GUI 툴) 수행
    3) nodejs 기반 client side에서 수행
    4) nodejs 기반 server side에서 수행
    5) nodejs 기반 socket.io를 이용한 싨시간 통신으로 수행
  $ personal.newAccount('1234')
  "0x92d4451fa99fda7536d1d034d066c04d48b837e7"
  - 송금행위 
    -> 트렌젝션 (마이닝 작업을 통해 처리가된다.)
    -> 여기에는 이런 행위가 적합한지 블록체인의 참여자(노드)들의
       합의 원칙에 따라 검증후 OK되면 장부에 기록이 되고, 그때 돈이 들어오게 된다

  $ eth.sendTransaction({
    from:eth.accounts[0],
    to:eth.accounts[1],
    value:web3.toWei(1, 'ether')
  })
  Error: authentication needed: password or unlock
  => 트렌젝션 수행을 위해(수수료가 발생되거나, 송금행위등)
  발생자(from)의 계정을 풀고(풀려면 비번을 입력받는다)
  진행시켜야한다
  $ personal.unlockAccount( eth.accounts[0], '1234')
  송금
  $ eth.sendTransaction({
    from:eth.accounts[0],
    to:eth.accounts[1],
    value:web3.toWei(1, 'ether')
  })
  트렌젝션 확인
  $ eth.pendingTransactions
  송금행위를 처리하기 위해 miner.start() 
  miner.start() 평시에는 계속해서 가동중이여서 여기서는 필요할때만
  구동하고, 멈추는 식으로 처리한다
  $ miner.start()

- 화폐단위
  1 ether = 1,000,000,000,000,000,000 wei(수수료 지급용 : wei)
  1 ether = 1,000,000,000 Gwei (가장 일반적인 가스 지급단위)
  1 ether = 1,000,000 Szabo  (수수료 지급용)
  1 ether = 1,000 Finney (소액 결재용)
  1 ether = 0.001 Kether
                Kether < Mether < Gether < Tether

- MIST 브라우저 
  -> 이더리움 상용/테스트/사설 네트워크에 모두 접속가능
  -> 네트워크 구동이 없는 상태에서 접속하면 무조건 상용으로 붙게되고 노드가 동기화되면서
     저장 데이터가 커지고, 로드가 많이 걸린다(주의)
  -> 구동전에 반드시 사설 네트워크 가동시킨후에 구동한다.
  -> https://github.com/ethereum/mist/releases
     Mist-installer-0-11-1.exe 다운로드
  -> 계좌생성, 송금, 트렌젝션처리 확인
  -> 스마트 컨트렉트 빌드 -> 배포하는 위치도 확인
 - NodeJS 연동
  -> node 프로젝트에서 web3설치
   $ npm install web3@0.16.0 
   -> 프로젝트 생성
   $ cd c:\Users\501_5\Desktop\test_git\bc_projects\Eth\DApp
   $ express -e mini_wallet
   $ cd mini_wallet
   $ npm -i
   $ npm install web3@0.16.0 
   $ package.json 에서 noew ./bin/www => nodemon ./bin/www
   $ npm start
   web3는 이더리움 네트워크에 접속하며 RPC 커맨드를 사용할수 있다.
   사용관련 api는 네트워크 가동시 허가된 모듈만 사용가능
   [클라이언트 사용을 위해]



4. 솔리디티 언어 이해 (이더리움 네트워트 상에 프로그램이 가미된 앱을 개발하는 언어)
  - 에디터 : remix 

5. DApp 구성 ( Node 기반, 사설네트워크 + node 서비스 )
 - 전자지갑
 - 전자투표
 - 배팅시스템.. 



 


  
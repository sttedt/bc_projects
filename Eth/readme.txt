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
   console                      : 콘솔모드 오픈, 모든 출력은 콘솔로 진행                     : 콘솔모드 오픈, 모든출력을 콘솔로 진행

  geth --identity "PrivateNetwork" --datadir "./ethereum/data" --port "30303" --rpc --rpcaddr 0.0.0.0 --rpcport "8123" --rpccorsdomain "*" --nodiscover  --networkid 1900 --nat "any" --rpcapi "db, eth, net, web3, miner, personal" console

3. 이더리움의 사설 네트워크 외부에서 연동하는 방법(RPC)
  -전자지갑 구현
    1) RPC 접속을 통해서 명령을 전송하여 수행
    2) MIST 브라우저(이더리움 GUI 툴) 수행
    3) nodejs 기반 client side에서 수행
    3) nodejs 기반 server side에서 수행
    3) nodejs 기반 socket.io를 이용한 싨시간 통신으로 수행


4. 솔리디티 언어 이해 (이더리움 네트워트 상에 프로그램이 가미된 앱을 개발하는 언어)

5. DApp 구성 ( Node 기반, 사설네트워크 + node 서비스 )
 - 전자지갑
 - 전자투표
 - 배팅시스템.. 



 


  
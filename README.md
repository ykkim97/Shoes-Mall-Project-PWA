# 프로젝트 소개

## 프로젝트명
신발 쇼핑몰사이트 개발

## 개발인원
2명

## 프로젝트 개요 및 동기
최근 웹 개발 시장에서는 바닐라JS만으로 웹 개발을 하지않고 프레임워크 혹은 라이브러리를 거의 필수적으로 사용하고 있습니다. 대표적으로 React, Vue, Angular 등이 있습니다. 웹 개발 시장에서 요구하는 웹서비스의 규모가 커지면서 보다 복잡한 웹 애플리케이션을 개발하게 되었습니다. 따라서 생산성을 향상시키고 유지보수하기 편하며 많은 양의 데이터를 관리하기 쉽도록하는 프레임워크들이 등장하게 되었습니다. 이러한 것들을 사용하면 모바일 앱처럼 부드럽게 동작하는 웹앱(Web-App)을 만들 수 있는데 모바일 앱처럼 발행하기 쉽고, 사용자에게 긍정적인  느낌을 주며, 일반적인 웹사이트보다 비즈니스적인 강점을 줄 수 있습니다. 

본 프로젝트에서는 React를 사용하여 신발 판매 쇼핑몰사이트를 제작하였습니다. 위에서 설명한 프레임워크(혹은 라이브러리)중 하나인 React는 시장에서 가장 많이 사용되고 있고 위에서 설명했다시피 많은 장점을 가지고 있기 때문에, React를 사용하게 되었습니다. 또한 쇼핑몰이라는 것은 어떻게 보면 흔하고 기본적인 웹사이트일 수 있지만 실용적인 주제이고 예전부터 직접 만들어보고 싶었기 때문에 저랑 같이 개발자를 준비하는 친구와 함께 쇼핑몰 사이트를 제작하게 되었습니다.

## 기술 스택

- HTML
- CSS
- Bootstrap
- Javascript
- React
- Redux
- Firebase

## 구현 기능
### 메인 페이지

<img src="https://user-images.githubusercontent.com/17917009/170274217-ef862e00-3c38-43aa-9310-4b230810d49e.gif" style="text-align : center">
사용자가 처음 보게 되는 메인 페이지입니다. 메인 페이지에는 광고나 제품 이미지가 들어갈 수 있는 슬라이더 배너(캐러셀)이 위치해 있고 그 밑에는 본 쇼핑몰의 인기 상품이 배치되어 있습니다.

### 카테고리 별 페이지
<img src="https://user-images.githubusercontent.com/17917009/170276347-c347bde4-29d3-473e-a5f2-53249a1345c1.gif" style="text-align : center">
카테고리 별 등록된 상품 목록을 확인할 수 있는 페이지입니다.  남성, 여성, 키즈로 구분지었고 각각 등록된 상품의 개수가 표시됩니다. 또한 라우팅을 이용하여 페이지가 새로고침되지 않고 모바일 앱처럼 부드럽게 전환됩니다.

### 상품 상세 페이지
<img src="https://user-images.githubusercontent.com/17917009/170281897-93cc1351-dff5-4af6-a015-3be294149c44.gif">
상품을 클릭하면 그 상품의 상세정보를 확인할 수 있는 페이지로 전환됩니다. 상세 페이지에서 상품 사진을 확인할 수있고 "장바구니 담기"버튼으로 장바구니에 추가할 수 있으며 "장바구니로"버튼을 클릭하면 장바구니 페이지로 이동할 수도 있습니다.

###  장바구니 기능
<img src="https://user-images.githubusercontent.com/17917009/170284937-45a7dacb-476d-4f6d-a4ba-2dbfb423149d.gif" style="text-align : center">
상세 페이지에서 "장바구니 담기" 버튼을 클릭하면 장바구니에 상품이 담기게 됩니다. 장바구니 페이지에서는 결제 전 장바구니에 등록된 상품을 확인하고 수량을 조절하고 필요하지 않은 경우 삭제할 수 있습니다. 또한 총 결제가격도 보여줍니다. 결제하기 버튼을 클릭할 경우 무통장입금 형식의 결제안내창을 보여줍니다.

### 최근 본 상품 확인하기
<img src="https://user-images.githubusercontent.com/17917009/170285112-07e8558e-4144-4c0d-a86e-82aa33af694a.gif" style="text-align : center">
페이지 상단의 "최근 본 상품"탭을 클릭하면 최근 본 상품의 기록을 확인할 수 있는 페이지로 전환됩니다.

### 로그인/로그아웃/회원가입  
페이지에서 로그인 버튼을 눌러 로그인을 시도할 수 있습니다.      

<img src="https://user-images.githubusercontent.com/17917009/172348473-aa38d095-a6f5-4629-ab7d-d0fc6910b5fd.gif" style="width : 100%">
로그인 버튼을 클릭하면 로그인페이지로 이동하여 이메일과 비밀번호를 입력하고 로그인할 수 있습니다.  

#

<img src="https://user-images.githubusercontent.com/17917009/172355484-ffb829b8-b271-49b3-a31a-9a15579f64f6.gif" style="text-align : center">
계정 정보가 맞지 않을 경우 사용자에게 알림을 보냅니다.     

#

<img src="https://user-images.githubusercontent.com/17917009/172357157-22bc66c3-c1e2-4b92-9e60-3fd85d67f412.gif" style="text-align : center">
회원가입버튼을 클릭하여 회원가입을 진행할 수 있습니다.     

#

<img src="https://user-images.githubusercontent.com/17917009/172358151-f9ef682b-31ab-4644-a33b-6bdfbc61a613.JPG" style="text-align : center">
회원가입이 완료된 사용자 정보를 Firebase Authentication 탭에서 확인할 수 있습니다.  

#

<img src="https://user-images.githubusercontent.com/17917009/172359444-2d94cfb7-c37d-4fab-b374-b06bbeef09a6.png" style="text-align : center">
회원가입이 정상적으로 완료되면 데이터베이스에 사용자 UID가 추가되고 하위에 이메일정보가 추가됩니다.     
<br/>


### 스토리지 및 데이터베이스 연동  
Firebase에서 제공되는 데이터베이스 시스템을 이용하여 상품정보를 가져오거나 저장할 수 있도록 하였습니다. 이미지 데이터의 경우 Firebase Storage에 저장하여 필요할 때 이미지를 불러올 수 있도록 하였습니다.  

<img src="https://user-images.githubusercontent.com/17917009/172360848-8e772845-bb62-4f24-a330-3a47215066a5.png" style="text-align : center">
위 이미지는 한 사용자계정의 데이터베이스구조입니다. 이메일과 장바구니(cart), 최근본상품(history)가 저장되어있습니다.    

#

<img src="https://user-images.githubusercontent.com/17917009/172362312-26449c3f-db33-481d-9503-fcc9ab0dff7b.gif" style="text-align : center">  
접속하면 위와 같이 데이터베이스에서 장바구니에 저장된 데이터와 최근본상품 데이터를 가져온 것을 확인할 수 있습니다.

## 개선한 점
- 폰트 변경  
<!-- <img src="https://user-images.githubusercontent.com/17917009/174817209-71bac830-7f92-49f8-922e-53cd1f3af854.png" width="1012" height="100"/> -->
본고딕체로 폰트를 변경하였습니다.  
<hr />
- 상세페이지에서도 수량을 결정할 수 있도록 변경  
<img src="https://user-images.githubusercontent.com/17917009/177342317-b389a354-d2df-4322-8850-06390114c061.JPG" width="1012" height="200"/>
<img src="https://user-images.githubusercontent.com/17917009/177342818-2e5dc021-d950-4be4-8594-a84807ac64eb.JPG" width="1012" height="300"/>
이전에는 장바구니페이지에서 수량을 따로 변경해주어야했던 불편함이 있었습니다. 따라서 상품 상세페이지에서도 수량을 결정할 수 있도록 개선하였습니다. 또한 이전버전과는 다르게 UI를 간소화하고 사용하기 편하도록 변경하였습니다. 
<hr />

- 모바일버전  
<img src="https://user-images.githubusercontent.com/17917009/177345352-f6d37450-7546-4fec-8cbc-9dfb564b5384.JPG" width="1012" height="500"/>
모바일버전에 맞게 UI 사이즈, 배치를 조정하였습니다.
<hr />

## 변경사항

2022.06.27 - 상세페이지 버튼 스타일 수정<br>
2022.09.04 - 필요없는 디버깅코드 삭제<br>
2022.10.17 - 상품 상세페이지의 BUY IN NOW 버튼 클릭 시 결제창 보여주기 기능 추가<br>
2022.10.18 - 컴포넌트 폴더구조 변경<br>

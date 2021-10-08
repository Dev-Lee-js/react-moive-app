 # Movie App PROJECT

<p align='center'>    
<img width="500" alt="MainPage" src="https://dev-lee-js.github.io/portfolio/images/thumb_13.png">
</p>
<br>

### 🛠 Tech Stack
* **Back**
<p align='center'>            
    <img src="https://img.shields.io/badge/node.js-v14.17.3-green?logo=Node.js"/>                    
    <img src="https://img.shields.io/badge/nodemon.js-v1.19.1-lime?logo=nodemon.js"/>    
    <img src="https://img.shields.io/badge/npm-^6.14.13-orange?logo=npm">    
    <img src="https://img.shields.io/badge/MongoDB-v5.0.0-peagreen?logo=mongodb">
    <img src="https://img.shields.io/badge/JWT-v8.5.1-yellow?logo=JSONWebTokens">
</p>

* **Front**
<p align='center'>        
    <img src="https://img.shields.io/badge/React-v17.0.1-blue?logo=React"/>   
    <img src="https://img.shields.io/badge/Redux-v4.0.0-aqua?logo=Redux"/>
    <img src="https://img.shields.io/badge/AntDesign-v3.24.1-purple?logo=AntDesign"/>   
    <img src="https://img.shields.io/badge/css-v3.0.0-brown?logo=css3"/>   
    <img src="https://img.shields.io/badge/html-v5.0.0-red?logo=html5"/>   
</p>

### 🚀 React + Node Deploy
* **Heroku Deploy**


<hr />
안녕하세요^^

이 어플리케이션을 사용하기 위해선

* dev.js 파일을 server/config 폴더안에 생성해주세요.
* MongoDB 정보를 dev.js에 입력해주세요.
* client 디렉토리에서 " npm install "을 입력하여 프론트엔드 종속성을 다운받아주세요.
* 루트 디렉토리에서 " npm install "을 입력하여 백엔드 종속성을 다운받아주세요.
* " npm run dev "을 입력하여 실행하시면 됩니다.

## Install

```sh
npm install
```

## Run tests

```sh
npm run dev
```
<hr/>

# Preview

### 📚 Website Main Page #1
<img width="1100" alt="MainPage" src="https://raw.githubusercontent.com/Dev-Lee-js/portfolio/gh-pages/images/movie-main-1.PNG">

### 📚 Website Main Page #2
<img width="1100" alt="MainPage" src="https://raw.githubusercontent.com/Dev-Lee-js/portfolio/gh-pages/images/movie-main-2.PNG">

### 👉 [사이트 방문하기](https://lit-anchorage-58450.herokuapp.com/)

<br />
<br />

## ⚙️ Functions
 
### 회원가입 구현
<img width="1100" alt="MainPage" src="https://dev-lee-js.github.io/portfolio/images/movie-1.gif">

### 로그인 & 로그아웃 구현
<img width="1100" alt="MainPage" src="https://dev-lee-js.github.io/portfolio/images/movie-2.gif">

### 최신 영화 목록 & 영화 정보 & 출연진 목록 보여주기 구현
<img width="1100" alt="MainPage" src="https://dev-lee-js.github.io/portfolio/images/movie-3.gif">

### 좋아요 & 싫어요 & 댓글 기능 구현
<img width="1100" alt="MainPage" src="https://dev-lee-js.github.io/portfolio/images/movie-4.gif">

### 즐겨찾기 추가 & 삭제 구현
<img width="1100" alt="MainPage" src="https://dev-lee-js.github.io/portfolio/images/movie-5.gif">

## File tree

### client
<pre>
│  index.css
│  index.js
│  serviceWorker.js
│  setupProxy.js
│
├─assets
│  └─images
│          HappyTubeLogo.png
│          Logo.png
│          upload.png
│
├─components
│  │  App.js
│  │  Config.js
│  │
│  └─views
│      ├─commons
│      │      GridCards.js
│      │
│      ├─FavoritePage
│      │      favorite.css
│      │      FavoritePage.js
│      │
│      ├─Footer
│      │      Footer.js
│      │
│      ├─LandingPage
│      │  │  LandingPage.js
│      │  │
│      │  └─Sections
│      │          MainImage.js
│      │
│      ├─LoginPage
│      │      LoginPage.js
│      │
│      ├─MovieDetail
│      │  │  MovieDetail.js
│      │  │
│      │  └─Sections
│      │          Comments.js
│      │          Favorite.js
│      │          LikeDislikes.js
│      │          MovieInfo.js
│      │          ReplyComment.js
│      │          SingleComment.js
│      │
│      ├─NavBar
│      │  │  NavBar.js
│      │  │
│      │  └─Sections
│      │          LeftMenu.js
│      │          Navbar.css
│      │          RightMenu.js
│      │
│      └─RegisterPage
│              RegisterPage.js
│
├─hoc
│      auth.js
│
├─_actions
│      types.js
│      user_actions.js
│
└─_reducers
        index.js
        user_reducer.js
</pre>

### server
<pre>
│  index.js
│
├─config
│      dev.js
│      key.js
│      prod.js
│
├─middleware
│      auth.js
│
├─models
│      Comment.js
│      Dislike.js
│      Favorite.js
│      Like.js
│      User.js
│      Video.js
│
└─routes
        comment.js
        favorite.js
        like.js
        users.js
</pre>

## Pages

- [x] Home
- [x] Login
- [x] Register
- [x] Favorite
- [x] Movie






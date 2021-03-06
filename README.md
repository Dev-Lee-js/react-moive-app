 # Movie App PROJECT

<p align='center'>    
<img width="500" alt="MainPage" src="https://dev-lee-js.github.io/portfolio/images/thumb_13.png">
</p>
<br>

### π  Tech Stack
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

### π React + Node Deploy
* **Heroku Deploy**


<hr />
μλνμΈμ^^

μ΄ μ΄νλ¦¬μΌμ΄μμ μ¬μ©νκΈ° μν΄μ 

* dev.js νμΌμ server/config ν΄λμμ μμ±ν΄μ£ΌμΈμ.
* MongoDB μ λ³΄λ₯Ό dev.jsμ μλ ₯ν΄μ£ΌμΈμ.
* client λλ ν λ¦¬μμ " npm install "μ μλ ₯νμ¬ νλ‘ νΈμλ μ’μμ±μ λ€μ΄λ°μμ£ΌμΈμ.
* λ£¨νΈ λλ ν λ¦¬μμ " npm install "μ μλ ₯νμ¬ λ°±μλ μ’μμ±μ λ€μ΄λ°μμ£ΌμΈμ.
* " npm run dev "μ μλ ₯νμ¬ μ€ννμλ©΄ λ©λλ€.

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

### π Website Main Page #1
<img width="1100" alt="MainPage" src="https://raw.githubusercontent.com/Dev-Lee-js/portfolio/gh-pages/images/movie-main-1.PNG">

### π Website Main Page #2
<img width="1100" alt="MainPage" src="https://raw.githubusercontent.com/Dev-Lee-js/portfolio/gh-pages/images/movie-main-2.PNG">

### π [μ¬μ΄νΈ λ°©λ¬ΈνκΈ°](https://lit-anchorage-58450.herokuapp.com/)

<br />
<br />

## βοΈ Functions
 
### νμκ°μ κ΅¬ν
<img width="1100" alt="MainPage" src="https://dev-lee-js.github.io/portfolio/images/movie-1.gif">

### λ‘κ·ΈμΈ & λ‘κ·Έμμ κ΅¬ν
<img width="1100" alt="MainPage" src="https://dev-lee-js.github.io/portfolio/images/movie-2.gif">

### μ΅μ  μν λͺ©λ‘ & μν μ λ³΄ & μΆμ°μ§ λͺ©λ‘ λ³΄μ¬μ£ΌκΈ° κ΅¬ν
<img width="1100" alt="MainPage" src="https://dev-lee-js.github.io/portfolio/images/movie-3.gif">

### μ’μμ & μ«μ΄μ & λκΈ κΈ°λ₯ κ΅¬ν
<img width="1100" alt="MainPage" src="https://dev-lee-js.github.io/portfolio/images/movie-4.gif">

### μ¦κ²¨μ°ΎκΈ° μΆκ° & μ­μ  κ΅¬ν
<img width="1100" alt="MainPage" src="https://dev-lee-js.github.io/portfolio/images/movie-5.gif">

## File tree

### client
<pre>
β  index.css
β  index.js
β  serviceWorker.js
β  setupProxy.js
β
ββassets
β  ββimages
β          HappyTubeLogo.png
β          Logo.png
β          upload.png
β
ββcomponents
β  β  App.js
β  β  Config.js
β  β
β  ββviews
β      ββcommons
β      β      GridCards.js
β      β
β      ββFavoritePage
β      β      favorite.css
β      β      FavoritePage.js
β      β
β      ββFooter
β      β      Footer.js
β      β
β      ββLandingPage
β      β  β  LandingPage.js
β      β  β
β      β  ββSections
β      β          MainImage.js
β      β
β      ββLoginPage
β      β      LoginPage.js
β      β
β      ββMovieDetail
β      β  β  MovieDetail.js
β      β  β
β      β  ββSections
β      β          Comments.js
β      β          Favorite.js
β      β          LikeDislikes.js
β      β          MovieInfo.js
β      β          ReplyComment.js
β      β          SingleComment.js
β      β
β      ββNavBar
β      β  β  NavBar.js
β      β  β
β      β  ββSections
β      β          LeftMenu.js
β      β          Navbar.css
β      β          RightMenu.js
β      β
β      ββRegisterPage
β              RegisterPage.js
β
ββhoc
β      auth.js
β
ββ_actions
β      types.js
β      user_actions.js
β
ββ_reducers
        index.js
        user_reducer.js
</pre>

### server
<pre>
β  index.js
β
ββconfig
β      dev.js
β      key.js
β      prod.js
β
ββmiddleware
β      auth.js
β
ββmodels
β      Comment.js
β      Dislike.js
β      Favorite.js
β      Like.js
β      User.js
β      Video.js
β
ββroutes
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






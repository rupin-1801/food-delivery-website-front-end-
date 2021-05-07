const http = require('http');
const hostname = '127.0.0.1';
const port = 5000;

const server = http.createServer((request, res) => {
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Food Delivery Website</title>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="css/style.css">
        <script src="https://use.fontawesome.com/3572e2875e.js"></script>
    </head>
    <body id ="body">
        <style>
            *{
        box-sizing: border-box;
        font-family: 'Roboto Slab', serif;
    }
    body{
        margin:0px;
    }
    header{
        background: linear-gradient(90deg, rgba(255,255,255,0.3) 20%, rgba(255,255,255,0.3)), url("../images/bg.png");
        background-repeat: no-repeat;
        background-size: cover;
        height:60vh;
        box-shadow: 0px 150px 150px rgba(0,0,0,0.2);
    }
    nav{
        display:inline-block;
        width:100%;
        position:fixed;
        height:70px;
        padding: 2vh 3vw;
        background-color: rgba(255,255,255,0.9);
        z-index:+3;
        transition: height 0.5s;
    }
    #btn-menu{
        float:right;
        padding: 5px 0px;
        font-size: 25px;
        visibility: hidden;
        cursor:pointer;
    }
    #image{
        width:60px;
        height:50px;
        float:left;
        transform: scale(1.2);
        /* filter: invert(100%); */
    }
    ul{
        display:flex;
        float:left;
        justify-content: space-around;
        width: 50%;
    }
    ul li{
        list-style: none;
    }
    a:hover{
        font-weight: 800;
    }
    a{
        color:black;
        text-decoration: none;;
    }
    .container{
        position: relative;
        display: flex;
        color: black;
        top: 70px;
        justify-content: space-evenly;
        flex-direction: column;
        align-items: center;
        height: 75%;
    }
    p{
        text-align: center;
    }
    #btn{
        background-color: white;
        border-radius: 4px;
        outline: none;
        border : none;
        padding: 4px 9px;
        cursor: pointer;
    }
    #btn:hover{
        border: 2px solid black;
        font-weight: 600;
    }
    .layer{
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;
        align-items: center;
        height: 75%;
    }
    .image{
        width:70px;
        flex-basis: 70px;
        transform: scale(1.5);
    }
    h3{
        color:white;
    }
    #layer1 h3,.container h3{
        color: black;
    }
    p, h4{
        margin:0px 3px;
    }
    .boxes{
        display:flex;
        justify-content: space-evenly;
        width:100vw;
        flex-wrap:wrap;
    }
    #layer2{
        background: linear-gradient(60deg, rgba(0,0,0,0.7), rgba(0,0,0,0.7)),url("../images/food-background.jpg");
        height:40vh;
        background-repeat: no-repeat;
        background-size: cover;
        margin:70px 0vw;
        box-shadow: 0px -50px 100vh #b2866d;
    }
    #layer2 .boxes{
        width:70vw;
    }
    .box-item{
        flex-basis: 30vw;
        display:flex;
        flex-direction: column;
        align-items: center;
        height:60vh;
        justify-content: space-evenly;
        text-align: center;
        border:3px solid red;
        background-color: blanchedalmond;
        border-radius: 10px;
        flex-wrap: wrap;
    }
    #layer3{
        background: url("../images/bg-contact.jpg");
        height:65vh;
        background-repeat: no-repeat;
        background-size: cover;
        border:none;
        border-radius: 0px;
    }
    #layer3 .input{
        width:300px;
        flex-basis: 30px;
        border-radius: 10px;
        outline:none;
        border:none;
    }
    #form{
        align-items: flex-start;
        /* width: 110px; */
    }
    input:focus, input:hover,textarea:focus, textarea:hover, #submit:hover{
        background-color: rgb(200,200,200) !important;
        box-shadow: -1px -1px 2px rgba(255,255,255,0.5), 1px 1px 2px rgba(70,70,70,0.12), inset -4px -4px 3px rgba(255,255,255,1.5), inset 4px 4px 3px rgba(70,70,70,0.4);
    }
    #submit{
        border-radius: 5px;
        background-color: white;
        border:none;
        height: 30px;
        align-self: center !important;
        width: 85px;
        color: #1b51d5;
    }
    #submit:hover{
        cursor: pointer;
    }
    label{
        color:white;
    }
    footer{
        text-align: center;
        padding: 10px 0px;
        font-size: 13px;
        background-color: rgba(0,0,0,0.1);
    }
    @media (max-width:768px){
        ul{
            width:80%;
            font-size: small;
        }
        #layer1 .boxes{
            flex-direction: column;
        width: 80vw;
        height:120vh;
        justify-content: space-evenly;
        }
        .box-item{
            flex-basis: 30vh;
            padding:10px 0px;
        }
        .image{
            width:50px;
            flex-basis:50px;
        }
    }
    @media(max-width:500px){
        #layer2 .boxes{
            width:90%;
        }
        #layer2 .boxes .image{
            width:30px;
            flex-basis:30px;
        }
        #layer2{
            height:30vh;
        }
        #btn-menu{
            visibility: visible;
        }
        #menu-bar{
            visibility:hidden;
            flex-direction: column;
        }
    }
    @media(min-width:1024px){
        .container p{
            font-size: 25px;
        }
        h3{
            font-size: xx-large;
        }
    }
    @media(min-width:1154px){
        #layer1 p{
            font-size: 22px;
        }
    }
    @media (max-width:475px){
        p{
            font-size: 15px;
        }
        #layer1 .boxes{
            flex-direction: column;
        width: 80vw;
        height:140vh;
        justify-content: space-evenly;
        }
        .box-item{
            flex-basis: 30vh;
            padding:10px 0px;
        }
    }
    @media (max-width:320px){
        ul{
            width:100%;
            margin:0px;
            padding: 0px;
        }
        #image{
            height:40px;
            width:40px;
        }
        #navbar{
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            height:90px;
            padding: 0px;
        }
        header{
            height:80vh;
        }
        .container{
            height:80%;
        }
    }
        </style>
        <header>
            <nav id="navbar">
                <div id="logo">
                    <img src="images/logo.png" id = "image"/>
                </div>
                <ul class="menu" id="menu-bar">
                    <li class="item"><a href="#">Home</a></li>
                    <li class="item"><a href="#">Services</a></li>
                    <li class="item"><a href="#">About</a></li>
                    <li class="item"><a href="#">Contact Us</a></li>
                </ul>
                <span id="btn-menu" onclick="expand()"><i class="fa fa-bars" aria-hidden="true"></i></span>
            </nav>
            <div class="container">
                <h3>Welcome to my website</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat qui omnis porro, doloribus ipsum quis inventore cupiditate sint. Explicabo sint expedita aspernatur qui architecto? Saepe qui et delectus sunt porro iste magnam corrupti voluptatum distinctio cum? Corporis facilis assumenda voluptates.</p>
                <button id="btn">Order Now</button>
            </div>
        </header>
        <section>
            <article class="layer" id="layer1">
            <h3>Our Services</h3>
            <div class="boxes">
                <div class="box-item" id="box-item1">
                    <img src="images/order.png" class="image"/>
                    <h4>Food Ordering </h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quasi, eum, quam obcaecati dolore incidunt quia atque excepturi architecto perspiciatis tempora necessitatibus voluptates neque earum maiores debitis cum reprehenderit qui dolorum blanditiis asperiores placeat.</p>
                </div>
                <div class="box-item" id="box-item2">
                    <img src="images/500_F_125242933_r6lgyu2U4944C8VaOaYEIJ4KqaUzLZo2-removebg-preview (1).png" class="image"/>
                    <h4>Catering</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quasi, eum, quam obcaecati dolore incidunt quia atque excepturi architecto perspiciatis tempora necessitatibus voluptates neque earum maiores debitis cum reprehenderit qui dolorum blanditiis asperiores placeat.</p>
                </div>
                <div class="box-item" id="box-item3">
                    <img src="images/delivery.png" class="image"/>
                    <h4>Home Delivery</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quasi, eum, quam obcaecati dolore incidunt quia atque excepturi architecto perspiciatis tempora necessitatibus voluptates neque earum maiores debitis cum reprehenderit qui dolorum blanditiis asperiores placeat.</p>
                </div>
            </div>
            </article>
            <article class="layer" id="layer2">
                <h3>Our Clients</h3>
                <div class="boxes">
                    <img src="images/hp.png" class="image">
                    <img src="images/intel.png" class="image">
                    <img src="images/microsoft.jpg" class="image">
                    <img src ="images/apple.png" class="image">
                </div>
            </article>
            <article class="box-item" id="layer3">
                <h3>Contact Us</h3>
                <form action="#" id="form" class="layer">
                    <label for="name">Name</label>
                    <input type="text" name="name" placeholder="Enter Name" class="input" id="input1">
                    <label for="email">Email Id</label>
                    <input type="email" name="email" placeholder="Enter Email" class="input" id="input2">
                    <label for="contact">Phone No</label>
                    <input type="text" name="contact" placeholder="Enter Phone number" class="input" id="input3">
                    <label for="message">Message</label>
                    <textarea name="message" id="input4" placeholder="Enter Message" class="input"></textarea>
                    <input type="submit" value="Send" id ="submit">
                </form>
            </article>
        </section>
        <footer>
            copyright &copy; 2020 food delivery.com 
        </footer>
        <script>
            var flag = 1;
            function expand(){
                if(flag == 1){
                // document.getElementById("btn-menu").style.visibility="hidden";
                document.getElementById("menu-bar").style.visibility="visible";
                document.getElementById("navbar").style.height="35vh";
                document.getElementById("body").style.backgroundColor="rgba(0,0,0,0.5)";
                flag = 0;
                }
                else{
                    flag = 1;
                    // document.getElementById("btn-menu").style.visibility="visible";
                    document.getElementById("menu-bar").style.visibility="hidden";
                    document.getElementById("navbar").style.height="70px";
                }
            }
        </script>
    </body>
    </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server started at http://${hostname}:${port}/`);
});
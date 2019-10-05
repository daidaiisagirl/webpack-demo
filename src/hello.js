import $ from "jquery";
import utils from "./utils/index";
import "./style/hello.css";
import "./style/world.sass";
import "./style/sui.less";
import imgs from "./images/11_03.jpg";
import imgss from "./images/9.gif";
console.log(utils);

function component() { 
    // var element = document.createElement('div');
  
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    var element = $("<div></div>");
    element.html("hello webpack");
  
    return element[0];
  }
  
document.body.appendChild(component());
let url = "http://www.baidu.com?name=zhangsan&age=18";
console.log(utils.getQuery(url));


//图片打包
let imgEl = document.createElement("img");
imgEl.src = imgs;
document.body.appendChild(imgEl);
  
let imgEl2 = document.createElement("img");
imgEl2.src = imgss;
document.body.appendChild(imgEl2);
  
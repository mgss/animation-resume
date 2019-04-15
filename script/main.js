let code = `/**
  *
  * 面试官你好，我是Evan Yan
  * 只用文字作做我介绍太单调了
  * 我就用代码来介绍吧
  * 首先准备一些样式
  * 
  */

* {
  transition: all 0.5s;
}

body {
  background: #F5F2F0;
  padding: 4px 12px;
}

#code {
  border: 1px solid #ccc;
  padding: 16px;
}

/* 我需要一点代码高亮 */

.token.comment{color: #999;}
.token.selector{ color: #77BE79; }
.token.property{ color: #E06C75; }

/* 然后再加一个呼吸效果 */

#code {
  animation: breath 0.8s infinite alternate-reverse;
}`

let paperCode = `/* 现在正式开始 */

.paper {
  width: 100px;
  height: 100px;
  background: red;
}
`

const styleCode = document.querySelector('#styleCode');
const htmlCode = document.querySelector('#code');

let index = 0;

let id = setInterval(()=>{
  index ++;
  styleCode.innerHTML = code.substring(0, index);
  htmlCode.innerHTML = Prism.highlight(code.substring(0, index), Prism.languages.css);

  if (index >= code.length) {
    clearInterval(id);
    f2()
    f3(code)
  }
}, 30)

function f2() {
  var paper = document.createElement('div')
  paper.classList.add('paper');
  document.body.appendChild(paper)
}

function f3(preCode) {
  let n = 0;
  let id2 = setInterval(()=>{
    n ++;
    styleCode.innerHTML = preCode + paperCode.substring(0, n);
    htmlCode.innerHTML = Prism.highlight(preCode + paperCode.substring(0, n), Prism.languages.css);
  
    if (n >= preCode + paperCode.length) {
      clearInterval(id2);
      f2()
      f3(code)
    }
  }, 30)
}
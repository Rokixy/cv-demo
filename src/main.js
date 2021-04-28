let html = document.querySelector("#html")
let style = document.querySelector("#style")
console.log(style)
let s = `
/* 你好，我叫朱子尧
 * 接下来我演示一下前端功底
 * 首先我要准备一个div
 **/
#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}

/* 接下来把div变成太极图
 * 
 * 首先把div变成一个圆
 **/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}

/* 一阴一阳
 * 一黑一白
 **/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 加两个阴阳鱼眼
 **/
#div1::before{
    width: 100px;
    height: 100px;
    position: absolute;
    top: 0;
    left: 50%;
    border-radius: 50%;
    transform: translateX(-50%);
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 35%, rgba(0,0,0,1) 35%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    position: absolute;
    bottom: 0;
    left: 50%;
    border-radius: 50%;
    transform: translateX(-50%);
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 35%, rgba(255,255,255,1) 35%, rgba(255,255,255,1) 100%);
}
`
s2 = ""
let n = 0
let step = () => {
    setTimeout(() => {
        if (s[n] === '\n') {
            s2 += "<br>"
        } else if (s[n] === ' ') {
            s2 += "&nbsp;"
        } else {
            s2 += s[n]
        }
        html.innerHTML = s2
        style.innerHTML = s.substring(0, n)
        window.scrollTo(0, 99999);
        html.scrollTo(0, 99999);
        n += 1
        if (n < s.length) {
            step()
        }
    }, 0)
}
step()
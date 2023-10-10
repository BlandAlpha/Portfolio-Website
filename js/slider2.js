// 获取ul元素，并为其追加一组相同图片（为了做到无缝衔接）
let ul=document.querySelector('.slider2 ul');
ul.innerHTML=ul.innerHTML+ul.innerHTML;
// 获取所有的li元素
let lis=document.querySelectorAll('.slider2 li');
// 每次滚动的跨度（正数向右，负数向左，默认向左滚动）
let spa=-2;
// 计算并设置ul的总宽度
ul.style.width=lis[0].offsetWidth*lis.length+'px';

// 滚动函数
function move(){
    if(ul.offsetLeft < -ul.offsetWidth/2){
        // 向左走时，判断图片是否走完（这里本来时4张图片，加上后面追加的4张相同的，共有8张，所以需要用ul的总宽度来除以2进行判断），走完时重新开始
        ul.style.left='0';
    }
    if(ul.offsetLeft > 0){
        // 向右走时，判断图片是否走完
        ul.style.left=-ul.offsetWidth/2+'px';
    }
    // 设置偏移位置
    ul.style.left=ul.offsetLeft+spa+'px';
}

// 定时器，每15毫秒执行一次move函数
let timer=setInterval(move,16);
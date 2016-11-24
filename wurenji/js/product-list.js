 //获取所有需要操作的元素
var box = document.getElementById("box"); //父级元素
var  ul = document.getElementById("nav"); //ul 
var divs = box.getElementsByTagName("div"); //获取父级里面需要显示的div元素
var moveli = ul.children; //获取ul下面所有需要移入的li元素
var show_sanjiao = ul.getElementsByClassName("show_border"); //这是每个li元素下面的border元素
var img = ul.getElementsByTagName("img"); //获取图片元素
var arrUrl = ["image/asd1.png","image/g1.png","image/g2.png"];//创建图片地址
moveli[0].className = "item active";  //让第一个元素显示效果
divs[0].className = "current"; //让第一个div元素显示展开
show_sanjiao[0].className = "show_border hover";//让第一个span元素（边框）显示展开
img[0].src = arrUrl[0];//第一张图片显示选中状态
for(var i = 0; i < moveli.length; i++){
     moveli[i].index = i;  //创建索引值
     moveli[i].onmouseover = function(){
          /*
             排他思想 清空所有留下自己
             moveli[i].className = "item"; 如果清空类名 连最开始设置的样式 都会清空 这个只需要修改背景色 所有在加上一个新类名
                show_sanjiao[i].className = "show_border"; 同上 修改展示效果！
           */
            for(var i = 0; i < moveli.length;i++){
                moveli[i].className = "item";
                show_sanjiao[i].className = "show_border";
                divs[i].className = "";
            }
                this.className = " item active";
             img[this.index].src = arrUrl[this.index];
             show_sanjiao[this.index].className = "show_border hover";
            divs[this.index].className = "current";
             // console.log(this.index);
     }
}
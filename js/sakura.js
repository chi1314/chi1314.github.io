let stop,staticx;var SakuraImg1=new Image,SakuraImg2=new Image;function IsPC(){for(var t=navigator.userAgent,n=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],a=!0,i=0;i<n.length;i++)if(t.indexOf(n[i])>0){a=!1;break}return a}SakuraImg1.src="https://hsuqnian.top/sakura1.png",SakuraImg2.src="https://hsuqnian.top/sakura2.png";class Sakura{constructor(t,n,a,i,e,r){this.x=t,this.y=n,this.s=a,this.r=i,this.fn=e,this.img=r}draw(t){t.save(),t.translate(this.x,this.y),t.rotate(this.r),t.drawImage(this.img,0,0,18*this.s,18*this.s),t.restore()}update(){this.x=this.fn.x(this.x,this.y),this.y=this.fn.y(this.y,this.y),this.r=this.fn.r(this.r),(this.x>window.innerWidth||this.x<0||this.y>window.innerHeight||this.y<0)&&(this.r=getRandom("fnr"),Math.random()>.4?(this.x=getRandom("x"),this.y=0,this.s=getRandom("s"),this.r=getRandom("r")):(this.x=window.innerWidth,this.y=getRandom("y"),this.s=getRandom("s"),this.r=getRandom("r")))}}function getRandom(t){let n,a;switch(t){case"x":n=Math.random()*window.innerWidth;break;case"y":n=Math.random()*window.innerHeight;break;case"s":n=Math.random();break;case"r":n=4*Math.random();break;case"fnx":a=.02*Math.random()-1.2,n=function(t,n){return IsPC()?t+.4*a-.4:t+.2*a-.2};break;case"fny":a=1.2+.02*Math.random(),n=function(t,n){return n+a};break;case"fnr":a=.04*Math.random(),n=function(t){return t+a}}return n}function startSakura(){requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame;let t,n=document.createElement("canvas");staticx=!0,n.height=window.innerHeight,n.width=window.innerWidth,n.setAttribute("style","position: fixed;left: 0;top: 0;pointer-events: none;z-index:1002"),n.setAttribute("id","canvas_sakura"),document.getElementsByTagName("body")[0].appendChild(n),t=n.getContext("2d");let a=new SakuraList;for(let n=0;n<(IsPC()?20:12);n++){let i,e,r,s,o,h,d;e=getRandom("x"),r=getRandom("y"),o=getRandom("r"),s=getRandom("s"),h=getRandom("fnx"),d=getRandom("fny"),randomFnR=getRandom("fnr"),i=new Sakura(e,r,s,o,{x:h,y:d,r:randomFnR},n%2==0?SakuraImg1:SakuraImg2),i.draw(t),a.push(i)}stop=requestAnimationFrame((function(){t.clearRect(0,0,n.width,n.height),a.update(),a.draw(t),stop=requestAnimationFrame(arguments.callee)}))}function stopp(){if(staticx){var t=document.getElementById("canvas_sakura");t.parentNode.removeChild(t),window.cancelAnimationFrame(stop),staticx=!1}else startSakura()}SakuraList=function(){this.list=[]},SakuraList.prototype.push=function(t){this.list.push(t)},SakuraList.prototype.update=function(){for(let t=0,n=this.list.length;t<n;t++)this.list[t].update()},SakuraList.prototype.draw=function(t){for(let n=0,a=this.list.length;n<a;n++)this.list[n].draw(t)},SakuraList.prototype.get=function(t){return this.list[t]},SakuraList.prototype.size=function(){return this.list.length},window.onresize=function(){let t=document.getElementById("canvas_sakura");t.width=window.innerWidth,t.height=window.innerHeight},SakuraImg1.onload=function(){startSakura()},SakuraImg2.onload=function(){startSakura()};
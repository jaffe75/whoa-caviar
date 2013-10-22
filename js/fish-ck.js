/*jshint smarttabs:true */// Javascript file
jQuery(document).ready(function(e){e("body").prepend('<div id="fullscreen"><canvas id="canvas" height="720" width="960" ></canvas>');var t=[],n=document.getElementById("canvas"),r=n.getContext("2d"),i=function(e,t){var n={vx:e,vy:t,scale:function(e){n.vx*=e;n.vy*=e},add:function(e){n.vx+=e.vx;n.vy+=e.vy},sub:function(e){n.vx-=e.vx;n.vy-=e.vy},negate:function(){n.vx=-n.vx;n.vy=-n.vy},length:function(){return Math.sqrt(n.vx*n.vx+n.vy*n.vy)},lengthSquared:function(){return n.vx*n.vx+n.vy*n.vy},normalize:function(){var e=Math.sqrt(n.vx*n.vx+n.vy*n.vy);if(e){n.vx/=e;n.vy/=e}return e},rotate:function(e){var t=n.vx,r=n.vy,i=Math.cos(e),s=Math.sin(e);n.vx=t*i-r*s;n.vy=t*s+r*i},toString:function(){return"("+n.vx.toFixed(3)+", "+n.vy.toFixed(3)+")"}};return n},s=function(e,t,i){var s=0,o={x:e,y:t,removeMe:!1,move:function(){i.vy+=s;s+=.1;o.x+=i.vx;o.y+=i.vy;o.y>n.height-15&&(o.removeMe=!0)},draw:function(){r.beginPath();r.arc(o.x,o.y,5,0,Math.PI*2,!0);r.fill();r.fillStyle="red";r.closePath()}};return o},o=function(e,o){var u=0,a=0,f=0,l={x:e,y:o,angle:0,removeMe:!1,move:function(){f=Math.atan2(a-l.y,u-l.x)},draw:function(){r.save();r.lineWidth=1;r.translate(l.x,l.y);r.rotate(f);r.strokeRect(0,-5,50,10);r.moveTo(0,0);r.beginPath();r.arc(0,0,10,0,Math.PI*2,!0);r.fill();r.fillStyle="#000000";r.closePath();r.restore()}};document.addEventListener("touchmove",function(e){e.preventDefault()},!1);n.addEventListener("pointerdown",function(){var e=i(u-l.x,a-l.y);e.normalize();e.scale(40);t.push(s(l.x,l.y,e))});n.addEventListener("pointermove",function(e){var t=n.getBoundingClientRect();u=e.clientX-t.left;a=e.clientY-t.top});return l},u=function(){r.save();r.globalAlpha=.4;var e=r.createLinearGradient(0,0,0,n.height);e.addColorStop(0,"#00bfff");e.addColorStop(.7,"#ffbb5a");e.addColorStop(.7,"#55dd00");e.addColorStop(1,"#2e7800");r.fillStyle=e;r.fillRect(0,0,n.width,n.height);r.restore()};t.push(o(50,n.height-50));setInterval(function(){u();var e=[];for(var n=0;n<t.length;n++){t[n].move();t[n].draw();t[n].removeMe===!1&&e.push(t[n])}t=e},30)});
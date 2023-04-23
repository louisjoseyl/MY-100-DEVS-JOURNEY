document.getElementById('purple').onclick=purple
document.getElementById('green').onclick=green
document.getElementById('blue').onclick=blue
document.getElementById('red').onclick=red

function purple(){
  document.querySelector('body').style.backgroundColor='rgb(128, 0, 128)'
  document.querySelector('body').style.color='#fff'

}
function green(){
  document.querySelector('body').style.backgroundColor='rgb(0, 128, 0)'
  document.querySelector('body').style.color='#fff'

}
function blue(){
  document.querySelector('body').style.backgroundColor='rgb(0, 0, 255)'
  document.querySelector('body').style.color='#fff'

}
function red(){
  document.querySelector('body').style.backgroundColor='rgb(255, 0, 0)'
  document.querySelector('body').style.color='#fff'

}
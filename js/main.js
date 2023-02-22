document.getElementById('sword-2').onclick = sword2Pic
document.getElementById('arrow').onclick = arrowPic
document.getElementById('horse').onclick = horsePic
document.getElementById('sword').onclick = swordPic
document.getElementById('view').onclick = viewPic

function sword2Pic() {
  document.querySelector('body').style.background = "url('./img/link-sword-2.jpg') center"
  document.querySelector('body').style.backgroundSize = 'cover'
  document.querySelector('h1').style.background = 'rgba(128,128,128, 0.5)'
  document.querySelector('h1').style.color = 'white'
}

function arrowPic() {
  document.querySelector('body').style.background = "url('./img/link-arrow.jpg') center"
  document.querySelector('body').style.backgroundSize = 'cover'
  document.querySelector('h1').style.color = 'gold'
  document.querySelector('h1').style.background = 'rgba(128,128,128, 0.5)'
}

function horsePic() {
  document.querySelector('body').style.background = "url('./img/link-horse.jpg') center"
  document.querySelector('body').style.backgroundSize = 'cover'
  document.querySelector('h1').style.color = 'lightgreen'
  document.querySelector('h1').style.background = 'rgba(128,128,128, 0.5)'
}


function swordPic() {
  document.querySelector('body').style.background = "url('./img/link-sword.jpg') center"
  document.querySelector('body').style.backgroundSize = 'cover'
  document.querySelector('h1').style.color = 'gold'
  document.querySelector('h1').style.background = 'rgba(128,128,128, 0.5)'
}

function viewPic() {
  document.querySelector('body').style.background = "url('./img/link-view.jpg') center"
  document.querySelector('body').style.backgroundSize = 'cover'
  document.querySelector('h1').style.color = 'skyblue'
  document.querySelector('h1').style.background = 'rgba(128,128,128, 0.5)'
}



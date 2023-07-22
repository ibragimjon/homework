let mouseCursor = document.querySelector(".fly");

window.addEventListener('mousemove', fly);

function fly (e) {
  mouseCursor.style.top = e.pageY + 'px';
  mouseCursor.style.left = e.pageX + 'px';

}

    
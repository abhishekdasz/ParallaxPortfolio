let text = document.getElementById('text');
let lglobe = document.getElementById('lglobe');
let rglobe = document.getElementById('rglobe');
let bvector = document.getElementById('bvector');

window.addEventListener('scroll', () =>{
    let value = window.scrollY;

    text.style.marginTop = value * -1.2 +'px';

    lglobe.style.top = value * -1.5 + 'px';
    lglobe.style.right = value * 1.5 + 'px';

    rglobe.style.top = value * -1.5 + 'px';
    rglobe.style.left = value * 1.5 + 'px';

    bvector.style.top = value * 1.5 +'px';
})


window.addEventListener('scroll', () => {
    var scrollButton = document.getElementById('btns');
    
    if (window.scrollY > 0) {
      btns.style.display = 'none';
    } else {
      btns.style.display = 'block';
    }
  });
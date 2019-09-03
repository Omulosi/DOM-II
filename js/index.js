
const handleMouseOver = (e) => {
  e.target.classList.add('mouse-over');
}

const handleMouseOut = (e) => {
  e.target.classList.remove('mouse-over');
}

let logo = document.querySelector('.logo-heading');
logo.addEventListener('mouseover', handleMouseOver);
logo.addEventListener('mouseout', handleMouseOut);

let nav = document.querySelector('.nav');
nav.addEventListener('click', (e) => {
  e.target.style.background= 'yellow';
});

let images = Array.from(document.querySelectorAll('img'));
images.forEach((img) => {
  img.addEventListener('mouseover', (e) => {
    e.target.style.opacity = 0.5;
  })
})

images.forEach((img) => {
  img.addEventListener('mouseout', (e) => {
    e.target.style.opacity = 1;
  })
});

document.addEventListener('keydown', (e) => {
  let intro = document.querySelector('.intro');
  intro.style.color = '#eee';
  intro.style.background = 'red';
})

document.addEventListener('keyup', (e) => {
  let intro = document.querySelector('.intro');
  intro.style.color = '#000';
  intro.style.background = '#fff';
})

let introImg = document.querySelector('.intro > img');
introImg.addEventListener('drag', (e) => {
  e.target.style.display = 'none';
})


introImg.addEventListener('dragend', (e) => {
  e.target.style.display = '';
})

let header = document.querySelector('.intro');
header.addEventListener('drop', (e) => {
  e.target.appendChild(introImg);
})

document.addEventListener('dragenter', (e) => {
  e.target.style.background = 'blue';
})


document.addEventListener('dragleave', (e) => {
  e.target.style.background = '';
}, false)

let btns = [...document.querySelectorAll('.btn')];
btns.forEach(btn => {
  btn.addEventListener('dblclick', (e) => {
    e.target.style.position = 'relative';
    e.target.style.top = '40px';
  })
})

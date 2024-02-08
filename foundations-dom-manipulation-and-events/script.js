const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);


const para = document.createElement('p');
para.textContent = "Hey I'm red!";
para.style.color = 'red';
container.appendChild(para);

const title = document.createElement('h3');
title.textContent = "I'm a blue h3!";
title.style.color = 'blue';
container.appendChild(title);

const blackPink = document.createElement('div');
blackPink.style.borderColor = 'black';
blackPink.style.backgroundColor = 'pink';

const para2 = document.createElement('h1');
para2.textContent = "I'm in a div!";
blackPink.appendChild(para2);

const para3 = document.createElement('p');
para3.textContent = "ME TOO!";
blackPink.appendChild(para3);

container.appendChild(blackPink);

btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });


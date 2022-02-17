const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const red = document.createElement("p");
red.style.color = "red";
red.textContent = "Hey I'm red!";
container.appendChild(red)

const blue = document.createElement("h3");
blue.style.color = "blue";
blue.textContent = "I'm a blue h3!";
container.appendChild(blue)

const div = document.createElement("div");
div.style.backgroundColor = "pink";
div.style.borderColor = "black";

const inADiv = document.createElement("h1");
inADiv.textContent = "I'm in a div!";
const theyToo = document.createElement("p");
theyToo.textContent = "ME TOO!";

div.appendChild(inADiv)
div.appendChild(theyToo)
container.appendChild(div)


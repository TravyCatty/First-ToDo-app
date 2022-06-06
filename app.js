console.log('Hello world!');

// before - самое начало
// prepend - начало в списке или типо того
// append - в конце списка или типо того
// after - в самом конце


////// Создание div'a

//function createDiv() {
//  let div = document.createElement('div');
//  div.className = 'msg';
//  div.innerHTML = 'Important info';
//  document.body.before(div);
//}
let div = document.createElement('div');
div.className = 'wrapper';
document.body.appendChild(div);

let div2 = document.createElement('div');
div2.className = 'flex-box';

let ul = document.createElement('UL');

let h1 = document.createElement('h1');

let crossText = document.createElement('p')
let crealText = document.createElement('p')

crossText.className = 'cross';
crossText.innerHTML = '1 click will cross out the task'

crealText.className = 'clear';
crealText.innerHTML = 'double click will remove the line '

h1.className = 'toDo';
h1.innerHTML = 'My own ToDo app on JS!'
div.appendChild(h1);
div.appendChild(crossText)
div.appendChild(crealText)


div.appendChild(div2);

let input = document.createElement('input');
input.className = 'input';
input.tabIndex = 1;
div2.appendChild(input);

let btn = document.createElement('button');
btn.className = 'btn';
btn.innerHTML = '+';
input.tabIndex = 2;
div2.appendChild(btn);

div.appendChild(ul);

//const ul = `
//  <ul>
//    <li>1</li>
//    <li>2</li>
//    <li>3</li>
//  </ul>
//`;

btn.addEventListener('click', () => {
  addTask();
  input.value = '';
});
input.addEventListener('keydown', (enter) => {
  if (enter.code == 'Enter') {
    addTask();
    input.value = '';
  }
});

function addTask() {
  let li = document.createElement("li");
  li.className = 'task'
  li.innerHTML = input.value;
  ul.prepend(li);
}



ul.addEventListener('click', (e) => {
  e.target.style.textDecoration = 'line-through'
})
ul.addEventListener('dblclick', (e) => {
  e.target.style.textDecoration = 'none'
})

function enter() {
  input.addEventListener('keyup', () => {
    addTask();
  })
}
//document.createElement('ul');
//list.className = 'list';

// before - самое начало
// prepend - начало в списке или типо того
// append - в конце списка или типо того
// after - в самом конце

////// Создание кнопки

//function createBtn(){
//  let div = document.createElement('div');
//  div.className = 'msg';
//  div.innerHTML = 'Click me!';

//  document.body.after(div);
//}
//createDiv();
//createBtn();
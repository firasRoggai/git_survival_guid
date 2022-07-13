/*** Variables ***/
const titles = Object.values(document.querySelector('article').children);
const sideBare = document.querySelector('.sidebar');
/*** End Variables ***/
titles.forEach((element)=>{
    if(element.className.includes("title")){
    const newElement = document.createElement('h1')
    newElement.textContent = element.textContent;
    sideBare.appendChild(newElement);
} 
if(element.className.includes("sub")){
    const newElement = document.createElement('a')
    newElement.setAttribute('href','#')
    newElement.classList.add("sub");
    newElement.textContent = element.textContent;
    sideBare.appendChild(newElement);
} 
})


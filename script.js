/*** Variables ***/
const titles = Object.values(document.querySelector('article').children);
const sideBare = document.querySelector('.sidebar');
/*** End Variables ***/
/*** Script:
 * It takes all the element with the class title or sub , and makes
 *  the sidebar accordingly 
 ***/

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


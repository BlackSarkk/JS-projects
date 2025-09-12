const colorArr = ['blue', 'green', 'orange', 'magenta', 'yellow', 'orange', 'violet', 'salmon', 'olive', 'lightgreen', "skyblue", "brown", "#f4c2c2"]
const body = document.querySelector('body')
const li = document.querySelectorAll('li')      // All is needed here without All forEach will throw error coz forEach expects an iterable object
const ul = document.querySelector('ul')



ul.addEventListener("click", (e)=>{
    if(e.target.tagName==="LI"){
        body.style.backgroundColor = e.target.id
    }
}, false)



colorArr.forEach((i)=>{
    const newLi = document.createElement('li')
    newLi.id = i
    newLi.style.backgroundColor = i
    ul.appendChild(newLi)
})

const colorArr = [blue, green, pink, magenta, yellow, orange, violet, salmon, olive, peach]
const body = document.querySelector('body')
const li = document.querySelectorAll('li')      // All is needed here without All forEach will throw error coz forEach expects an iterable object
const ul = document.querySelector('ul')



li.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        body.style.backgroundColor = e.target.id
    })
})





// now need to render buttons from that array 
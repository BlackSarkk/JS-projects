
const ul = document.querySelector('ul')


const createNote = (Header, Footer, Date, status) => {

    // Creating Elements

    let li = document.createElement("li")

    let note = document.createElement("div")
    note.id = "note"

    let checkbox = Object.assign(document.createElement("input"), {
        id: "checkbox",
        type: "checkbox"
    })

    let noteContent = Object.assign(document.createElement("div"), {
        id: "note-content",
    })

    let noteHeader = Object.assign(document.createElement('div'), {
        id: "note-header"
    })

    let noteFooter = Object.assign(document.createElement('div'), {
        id: "note-footer"
    })

    let noteEdit = Object.assign(document.createElement('div'), {
        id: "note-edit"
    })

    let pencilParent = Object.assign(document.createElement('div'), {
        id: "pencil-parent",
        className: "mini-btn"
    })

    let pencilSVG = Object.assign(document.createElement('img'), {
        src: "./assets/pencil.svg",
        className: "mini-btn-child",
        alt: "edit"
    })

    let dustbinParent = Object.assign(document.createElement('div'), {
        id: "dustbin-parent",
        className: "mini-btn"
    })

    let dustbinSVG = Object.assign(document.createElement('img'), {
        src: "./assets/dustbin.svg",
        className: "mini-btn-child",
        alt: "delete"
    })

    let noteParentFooter = Object.assign(document.createElement('div'), {
        id: "note-parent-footer"
    })

    let timeParent = Object.assign(document.createElement('div'), {
        id: "time-parent"
    })
    let statusParent = Object.assign(document.createElement('div'), {
        id: "status-parent"
    })



    // APPENDING

    noteHeader.appendChild(document.createTextNode(Header))
    noteFooter.appendChild(document.createTextNode(Footer))
    noteContent.append(noteHeader, noteFooter)

    pencilParent.appendChild(pencilSVG)
    dustbinParent.appendChild(dustbinSVG)
    noteEdit.append(pencilParent, dustbinParent)

    note.append(checkbox, noteContent, noteEdit)

    timeParent.appendChild(document.createTextNode(`Last Updated at: ${Date}`))
    statusParent.appendChild(document.createTextNode(status))
    noteParentFooter.append(timeParent, statusParent)

    li.append(note, noteParentFooter)

    ul.prepend(li)

    
    // DELETE current LI

    dustbinParent.addEventListener('click', (e)=>{ li.remove() })



    



}


export { createNote }
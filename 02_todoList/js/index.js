
import { getDate } from "./utils.js"
import { createNote } from "./create.js"


const addNote1 = document.querySelector("#addNote1")
const addNote2 = document.querySelector("#addNote2")



addNote1.addEventListener('click', () => {
    createNote(
        "Groceries",
        "buy eggs, bread, jam, butter, paneer",
        getDate(),
        "Completed"
    );
});

addNote2.addEventListener('click', () => {
    createNote(
        "Gym",
        "Go to gym @ 7AM straight",
        getDate(),
        "Completed"
    );
});

console.log('habits.js loaded!')

export class Habits {
    constructor(){
        this.habits_list = ['No Habits']
    }

    add_habit(){
        console.log('Clicked...')
        // ask for user input
        

        // push user input into habits array
        //this.habits_list.push(user_habit)
    }

    view_habits(){
        let size = this.habits_list.length

        for (let i = 0; i < size; i++) {
            console.log(this.habits_list[i])
        }
    }
}


// Behavior on the habits html page


// If asked:

// “Why can’t you reuse the same object across pages?”

// Strong answer:

// “Each page load creates a new JavaScript runtime. To persist state, you need STORAGE or a backend.”

// That’s 💯.

//TODO: Will make this happen next: Real apps do this.
// User created
// → Habits loads from localStorage
// → User navigates to habits.html
// → Habits reloads from localStorage
// → Same data, new instance

// Save habits (when modified)
// localStorage.setItem("habits", JSON.stringify(this.habits_list));

// Load habits (in constructor)
// constructor() {
//     const saved = localStorage.getItem("habits");
//     this.habits_list = saved ? JSON.parse(saved) : [];
// }

const habits = new Habits()

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("addHabitBtn")
    console.log("Button: ", btn)

    btn.addEventListener("click", habits.add_habit())
})

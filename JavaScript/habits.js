console.log('habits.js loaded! All JS files load at the same time :D FYI')


export class Habits {
    
    constructor(){
        this.habits_list = [];
    }

    add_habit(){
        console.log('Clicked Submit Habit...')
        // ask for user input
        const input = document.getElementById("habitInput");
        const habit = input.value.trim();

        // if an empty habit is submitted
        if (habit === '') {
            console.log("Empty habit submitted")
            return;
        }
        console.log("Continuing...")
        // push user input into habits array
        this.habits_list.push(habit);

        // Render the new habits pushed onto the list. 
        this.renderHabits();

        // clearing input after submission
        input.value = "";
        console.log('End of the add_habit function')
    }

    renderHabits(){
        console.log("renderHabits called...")

        // clear old list
        habits_list.innerHTML = "";   // 

        // rebuild list from array
        this.habits_list.forEach((habit) => {
            const li = document.createElement("li");
            li.textContent = habit;
            habits_list.appendChild(li);
        });
    }

    // not being used, maybe delete. 
    view_habits(){
        let size = this.habits_list.length;

        console.log("Message from view_habits...")
        for (let i = 0; i < size; i++) {
            console.log(this.habits_list[i])
        }
    }

    // public functions
    get_habits(){
        return this.habits_list;
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



// LOOK AT THIS DOCUMENTATION FOR LOCAL STORAGE DOcumentation: https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API

const habits_obj = new Habits();

// Grab DOM elements (ids) from habits.html. 
const habits_list = document.getElementById("habits_html_list");

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("submitHabitBtn");
    console.log("Button:", btn);

    if (!btn) return;

    // stop 'form', DOM from habits.html, submission from reloading page after every button push event.
    btn.addEventListener("click", (event) => {
        event.preventDefault();  

        habits_obj.add_habit(); 
    });
});

// Only run code if we're on the page that has this element. 
if (habits_list) {  

    // push data from index.js into habits.html
    habits_list.textContent = habits_obj.get_habits();
}




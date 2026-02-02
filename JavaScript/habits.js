console.log('habits.js loaded! All JS files load at the same time :D FYI')


export class Habits {
    constructor(){
        this.habits_list = []; //Little hard code test: ['No Habits', 'cooking'];
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


        // old code before learning about local storage, will delete once we get an idea how.
        //this.habits_list.push(user_habit)

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
// We kno how it works, we just need to make sure we can add habits first.

const habits = new Habits();

// document.addEventListener("DOMContentLoaded", () => {
//     const btn = document.getElementById("submitHabitBtn")
//     console.log("Button: ", btn)

//     if (!btn) return;

//     // add_habit means heres the function.
//     btn.addEventListener("click", habits.add_habit) // habits.add_habit() means run the function RIGHT NOW!
// })

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("submitHabitBtn");
    console.log("Button:", btn);

    if (!btn) return;

    btn.addEventListener("click", (event) => {
        event.preventDefault();   // stop form submission
        habits.add_habit();
    });
});


// Grab DOM elements (ids) from habits.html. This variable is also used in renderHabits()
const habits_list = document.getElementById("habits_list");


// Only run code if we're on the page that has this element. 
if (habits_list) {  
    // push data from index.js into habits.html
    habits_list.textContent = habits.get_habits();
}




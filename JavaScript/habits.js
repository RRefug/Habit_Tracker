console.log('habits.js loaded! All JS files load at the same time :D FYI')


export class Habits {
    
    constructor(){
        this.habits_list = [];
    }

    get_habits(){
        return this.habits_list;
    }

    add_habit(){

        const user_input = document.getElementById("habitInput");
        const habit = user_input.value.trim();

        if (habit === '') {
            console.log("Empty habit submitted, will not add to array")
            return;
        }

        this.habits_list.push(habit);
        this.render_new_habits(); 
        user_input.value = ""; 
    }

    render_new_habits(){

        habits_list.innerHTML = "";  

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
}


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

// Only runs code if we're on habits.html
if (habits_list) {  
    // push data from habits.js into habits.html
    habits_list.textContent = habits_obj.get_habits();
}




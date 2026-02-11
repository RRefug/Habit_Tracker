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

        // update the local storage habit's object.

         //* 1. Push habits object to local storage - The array should be empty when starting 
        let my_habits_serialized = JSON.stringify(habits_obj);
        localStorage.setItem('string_habits_object', my_habits_serialized);

        // // grab string from local storage
        // const my_habits_local_storage_value = localStorage.getItem('string_habits_object');

        // // parse string into a json object
        // const my_habits_local_storage_Obj = JSON.parse(habits_obj);

        // // push back to local storage, by stringifying
        // let my_habits_serialized = JSON.stringify(my_habits_local_storage_Obj);
        // localStorage.setItem('string_habits_object', my_habits_serialized);

        console.log('UPDATED Local Storage...')

    }

    // not being used, maybe delete. It's being used in index.js. Line 32.
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


// when html page loads
document.addEventListener("DOMContentLoaded", () => {

    //* 1. Push habits object to local storage - The array should be empty when starting 
    // let my_habits_serialized = JSON.stringify(habits_obj);
    // localStorage.setItem('string_habits_object', my_habits_serialized);

    // 2. When updating habits array on html page, with new update button, pull object from local storage

    // 3. Parse the object

    // 4. Update the changes and push it back to local storage

    // 5. Refresh html page, or close browser, and see if there exists an object in local storage. If so, done! Will use that object to pass to index.html page.\

    // 6. Refactor too so it's not super clumped here.

    // *

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




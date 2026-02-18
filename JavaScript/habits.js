console.log('habits.js loaded! All JS files load at the same time :D FYI')


export class Habits {
    
    constructor(){
        this.habits_list = [];
    }

    get_habits(){
        return this.habits_list;
    }

    /**
     * User input is added to the habits list attribute inside a Habits object.
     */
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

    /**
     * Serializes a Habits object into a string and sends it to local storage.
     */
    add_all_habits_to_localStorage(){

        //* 1. Push habits object to local storage after a subit all habits button is pushed
        // The array should be using data already found in local storage.
        let my_habits_serialized = JSON.stringify(habits_obj);
        localStorage.setItem('string_habits_object', my_habits_serialized);

        console.log('Added ALL habits to local storage...')
    }

    /** 
     * Displays habits list from Habits object to the HTML page.
     */
    render_new_habits(){

        habits_list.innerHTML = "";  

        // rebuild list from array
        this.habits_list.forEach((habit) => {
            const li = document.createElement("li");
            li.textContent = habit;
            habits_list.appendChild(li);
        });
    }


    /** 
     * Check if habits obj exists, in local storage, when loading into habits.html.
     */
    check_local_storage_habits() {
        
        if (localStorage.getItem('string_habits_object')){
            console.log('Habits exist in local storage...');
            
            this.load_habits_from_local_storage();

        } else {
            console.log('Habits do not exist in local storage yet...');
        }
    }

    /**
     * Update the local storage habit's object.
     */ 
    load_habits_from_local_storage(){
    
        // Grab string from local storage
        const my_habits_local_storage_value = localStorage.getItem('string_habits_object');

        // Parse string into JSON object
        const my_habits_local_storage_Obj = JSON.parse(my_habits_local_storage_value);

        this.render_local_storage_habits(my_habits_local_storage_Obj);
    }

    /**
     * Populate the html with the data from the new JSON object
     * @param {*} JSON_obj - In this state, it's easier to manipulate the data within it.
     */
    render_local_storage_habits(JSON_obj){

        habits_list.innerHTML = "";  

        // rebuild list from JSON_obj array
        JSON_obj.habits_list.forEach((habit) => {
            const li = document.createElement("li");
            li.textContent = habit;
            habits_list.appendChild(li);
        });
    }

    /**
     * For viewing habits list stored in Habits object. It's being used in index.js
     */
    view_habits(){
        let size = this.habits_list.length;

        console.log("Message from view_habits...")
        for (let i = 0; i < size; i++) {
            console.log(this.habits_list[i])
        }
    }

    // Will help a lot down the road. 
    /* edit_habits(){
        // 2. When updating habits array on html page, with new update button, pull object from local storage

        // 3. Parse the object

        // 4. Update the changes and push it back to local storage

        // 5. Refresh html page, or close browser, and see if there exists an object in local storage. If so, done! Will use that object to pass to index.html page.\

        // 6. Refactor too so it's not super clumped here.

        // push back to local storage, by stringifying
        let my_habits_serialized = JSON.stringify(my_habits_local_storage_Obj);
        localStorage.setItem('string_habits_object', my_habits_serialized);
    } */

    // delete_habits(){
        // Delete entire variable in local storage command.
        //localStorage.removeItem('string_habits_object');
    // }
}





// Create new Habits Object
let habits_obj = new Habits();

// Grab DOM elements (ids) from habits.html. 
const habits_list = document.getElementById("habits_html_list");


// When HTML page loads...
document.addEventListener("DOMContentLoaded", () => {

    // Check if our local storage object exists
    habits_obj.check_local_storage_habits();


    // Submit all habits button logic
    const submit_all_btn = document.getElementById("submit_all_habits_btn");
    console.log("Submit All Habits Btn ID grabbed", submit_all_btn);

    if (!submit_all_btn) return;
    submit_all_btn.addEventListener("click", (event) => {
        event.preventDefault(); 
        habits_obj.add_all_habits_to_localStorage(); 
    });

    // Submit Habit Button Logic
    const btn = document.getElementById("submitHabitBtn");
    console.log("Submit Habit Button ID grabbed", btn);

    if (!btn) return;
    // stop 'form', DOM element from habits.html, submission from reloading page after every button push event.
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




import { User } from "./user.js";


`
A user is created when visiting the website. 
`
// Check if it's an existing user


// If not, create default user
const user = new User()


// Check user details. 
console.log(user.get_username())
console.log(user.get_day_counter())
console.log('Badge collection: ', user.get_badge_collection())


// Grab DOM elements (ids) from index.html
const welcome_username = document.getElementById("welcome_username")
const welcome_day_streaks = document.querySelector(".encouragement")

// push data from index.js into index.html
welcome_username.textContent = user.get_username()
welcome_day_streaks.textContent = user.get_day_counter()

/* Apparently, there is a chance that your js file runes before the dom exists. So be careful.*/


// check that the list is added
console.log(user.habits.view_habits())
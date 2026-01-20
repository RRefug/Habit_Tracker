import { Habits } from "./habits.js"

export class User {

    // Default constructor
    constructor(name = 'User', days = 0, badges = []){
        this.user_name = name 
        this.day_counter = days
        this.badge_collection = badges
        
        this.habits = new Habits()
        console.log('Made new habits')
    }

    // public functions
    get_username(){
        return `Hi ${this.user_name} 🖐️`
    }

    get_day_counter(){
        return `You've kept up 3 habits for ${this.day_counter} days straight. Keep it going!`
    }

    get_badge_collection(){
        return this.badge_collection
    }
}
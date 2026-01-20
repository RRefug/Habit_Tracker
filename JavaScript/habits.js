
export class Habits {
    constructor(){
        this.habits_list = ['No Habits']
    }

    add_habit(user_habit){

        // ask for user input
        

        // push user input into habits array
        this.habits_list.push(user_habit)
    }

    view_habits(){
        let size = this.habits_list.length

        for (let i = 0; i < size; i++) {
            console.log(this.habits_list[i])
        }
    }
}

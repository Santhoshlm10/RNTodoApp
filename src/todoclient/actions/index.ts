export const ADD_TASK = "ADD_TASK"

interface Task {
    title:string,
    description:string,
    done:boolean,
    id:number
}

export const addTodo = (task:Task) => ({
    type:ADD_TASK,
    payload:task
})
export interface Todo {
    id: number;
    text: string;
    done: boolean;
 }

 export interface Store {
     tosos: Todo[]
     newTodo: string
 } 
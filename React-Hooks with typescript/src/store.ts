import { createContext } from "react";

const initialState = {
    first:"satish",
    last: "rajnale"
}

export type UserState = typeof initialState; // when I want to have the implementing component to access the the type

 const storeContext = createContext<typeof initialState>(initialState);

 export default storeContext
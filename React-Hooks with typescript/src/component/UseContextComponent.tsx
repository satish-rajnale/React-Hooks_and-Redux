import { useContext, useState } from "react"
import UserContext, {UserState} from "../store"

export default function UseContextComponent(){
  const [user, setUser]=  useState<UserState>({first:"Smith",last: "Nora"})

    return (
        <UserContext.Provider value={user}>
            <ConsumerComponent/>
            <button onClick={()=>setUser({first:"Mari", last:"gold"})}> Change Context</button>
        </UserContext.Provider>
    )
}


function ConsumerComponent(){
    const user = useContext(UserContext);

    return (
        <div>
            <div>First: {user.first}</div>
            <div>last: {user.last}</div>
        </div>
    )
}
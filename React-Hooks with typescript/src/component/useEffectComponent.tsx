import { useEffect, useState } from "react";

export default function UseEffectComponent(){
    const [val , setVal] = useState(1);

    useEffect(()=>{
      const timer = window.setInterval(()=>{
        setVal(val =>val+1);
       }, 1000);

       return ()=>window.clearInterval(timer)
    },[])

    return (<div>{val}</div>)
}
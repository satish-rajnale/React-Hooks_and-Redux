import { useEffect, useRef } from "react";


export default function UseRefComponent(){
    const myRef = useRef<HTMLInputElement | null>(null);
    let val: string  = "asd";
    useEffect(()=>{
    if(myRef.current?.value){
            val = myRef.current?.value
        }
        // console.log(val)
        // console.log(myRef.current?.value)
    }, [myRef.current?.value])
    return (
        <>
        <input ref={myRef}  />
        <p>{val}</p>
</>
    )
}
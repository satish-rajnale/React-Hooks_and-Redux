import {useState, useEffect} from "react";



function useFetchData(url : string){
    const [data, setData] = useState(null);
    const [done , setDone] = useState(false);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {setData(data);setDone(true)})
    }, [url])
 
    return {data, done}
}


export default function CustomHooksComponent(){
    return (
        <div>

        </div>
    )
}
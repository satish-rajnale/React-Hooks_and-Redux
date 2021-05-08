import {useState, useEffect} from "react";


export interface Beverage{
    name:string,
    producerName:string,
    beverageName: string,
    beverageColor: string,
    beverageStyle:string,
    producerLocation:string,
    abv: number,
    ibu: number,
    logo: string,
    level: number
}


function useFetchData(url : string): {data:Beverage[] | null, done: boolean}{
    const [data, setData] = useState<Beverage[] | null>(null);
    const [done , setDone] = useState(false);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {setData(data);setDone(true)})
    }, [url])
 
    return {data, done}
}


export default function CustomHooksComponent(){
   const {data, done} = useFetchData("../hcList.json")
    return (
        <div>
            {done && (
                <img alt="Beverage logo" src={data![0].logo}></img>
            )}
        </div>
    )
}
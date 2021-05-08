import {useState, useEffect, useMemo} from "react";


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

// made it generic uaing Drink 
function useFetchData <Drink>(url : string): {data:Drink | null, done: boolean}{
    const [data, setData] = useState<Drink | null>(null);
    const [done , setDone] = useState(false);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {setData(data);setDone(true)})
    }, [url])
 
    return {data, done}
}


export default function CustomHooksComponent(){
   const {data, done} = useFetchData<Beverage[]>("/hcList.json")
   const portLandTaps = useMemo(() => ( (data || []).filter( bev => bev.producerLocation.includes("Portland"))
   ), [data]) ;

   return (
        <div>
            {/* {done && ( // here data can be undefined so use data !
                <img alt="Beverage logo" src={data![0].logo}></img>
            )} */}
            {portLandTaps && ( // here data can be undefined so use data !
                <img alt="Beverage logo" src={portLandTaps![0].logo}></img>
            )}
        </div>
    )
}